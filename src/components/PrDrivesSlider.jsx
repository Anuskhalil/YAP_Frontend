import React, { useEffect, useState, useMemo } from 'react';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './PrDrives.css';

// Import images for PR Drives
import prDrive1 from '../images/PrDrives/prDrives1.jpg';
import prDrive2 from '../images/PrDrives/prDrives2.jpg';
import prDrive3 from '../images/PrDrives/prDrives3.jpg';

const PrDrives = () => {
  const prDrivesPhotos = useMemo(() => [
    { title: 'PR Drive 1', image: prDrive1 },
    { title: 'PR Drive 2', image: prDrive2 },
    { title: 'PR Drive 3', image: prDrive3 },
    // Add more images here
  ], []);

  const itemsPerPage = 6; // Number of images per page
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedPhotos, setPaginatedPhotos] = useState([]);

  // Pagination Logic
  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setPaginatedPhotos(prDrivesPhotos.slice(startIndex, endIndex));
  }, [currentPage, prDrivesPhotos]);

  // Initialize AOS for animations
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  // State for Modal
  const [showModal, setShowModal] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const handleImageClick = (image) => {
    setCurrentImage(image);
    setShowModal(true);
  };

  const totalPages = Math.ceil(prDrivesPhotos.length / itemsPerPage);

  return (
    <Container className="pr-drives-container">
      {/* <h2 className="pr-drives-title" data-aos="fade-down">
        PR Drives
      </h2> */}
      <Row>
        {paginatedPhotos.map((photo, index) => (
          <Col
            xs={12}
            sm={6}
            md={4}
            lg={3}
            key={index}
            className="pr-drives-photo-col"
            data-aos="fade-up"
          >
            <div
              className="pr-drives-photo-wrapper"
              onClick={() => handleImageClick(photo.image)}
            >
              <img
                className="img-fluid pr-drives-photo"
                src={photo.image}
                alt={photo.title}
              />
              <div className="pr-drives-photo-caption">
                <p>{photo.title}</p>
              </div>
            </div>
          </Col>
        ))}
      </Row>

      {/* Pagination Controls */}
      <div className="pagination-controls">
        <Button
          variant="outline-secondary"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        <span className="mx-2">
          Page {currentPage} of {totalPages}
        </span>
        <Button
          variant="outline-secondary"
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </div>

      {/* Modal for Lightbox */}
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        centered
        size="lg" // Ensures the modal is larger
      >
        <Modal.Body className="text-center modal-body">
          <img
            src={currentImage}
            alt="PR Drive"
            className="img-fluid large-modal-image"
            style={{
              borderRadius: '10px',
              maxHeight: '90vh',
              objectFit: 'contain',
            }}
          />
        </Modal.Body>
      </Modal>

    </Container>
  );
};

export default PrDrives;
