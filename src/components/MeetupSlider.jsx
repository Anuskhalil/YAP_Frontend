import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './MeetupSlider.css';

// Import images for Meetup
import meetupimg1 from '../images/MeetUp/meetupimg1.jpg';
import meetupimg2 from '../images/MeetUp/meetupimg2.jpg';
import meetupimg3 from '../images/MeetUp/meetupimg3.jpg';
import meetupimg4 from '../images/MeetUp/meetupimg4.jpg';
import meetupimg5 from '../images/MeetUp/meetupimg5.jpg';
import meetupimg6 from '../images/MeetUp/meetupimg6.jpg';
import meetupimg7 from '../images/MeetUp/meetupimg7.jpg';
import meetupimg8 from '../images/MeetUp/meetupimg8.jpg';

const MeetupSlider = () => {
  const meetupPhotos = [
    { title: 'Meetup 1', image: meetupimg1 },
    { title: 'Meetup 2', image: meetupimg2 },
    { title: 'Meetup 3', image: meetupimg3 },
    { title: 'Meetup 4', image: meetupimg4 },
    { title: 'Meetup 5', image: meetupimg5 },
    { title: 'Meetup 6', image: meetupimg6 },
    { title: 'Meetup 7', image: meetupimg7 },
    { title: 'Meetup 8', image: meetupimg8 },
  ];

  const itemsPerPage = 6; // Number of images per page
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedPhotos, setPaginatedPhotos] = useState([]);

  // Pagination Logic
  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setPaginatedPhotos(meetupPhotos.slice(startIndex, endIndex));
  }, [currentPage, meetupPhotos]);

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

  const totalPages = Math.ceil(meetupPhotos.length / itemsPerPage);

  return (
    <Container className="meetup-container">
      <h2 className="meetup-title" data-aos="fade-down">
        Meetup Gallery
      </h2>
      <Row>
        {paginatedPhotos.map((photo, index) => (
          <Col
            xs={12}
            sm={6}
            md={4}
            lg={3}
            key={index}
            className="meetup-photo-col"
            data-aos="fade-up"
          >
            <div
              className="meetup-photo-wrapper"
              onClick={() => handleImageClick(photo.image)}
            >
              <img
                className="img-fluid meetup-photo"
                src={photo.image}
                alt={photo.title}
              />
              <div className="meetup-photo-caption">
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
            alt="Meetup gallery"
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

export default MeetupSlider;
