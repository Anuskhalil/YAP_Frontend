import React, { useState } from 'react';
import './MoUSignedUni.css';

// Importing university logos and images
import ned from '../images/MouUniversities/Logos/nedLogo.jpg';
import smiu from '../images/MouUniversities/Logos/smiuLogo.jpg';

// NED University
import nedMoU1 from '../images/MouUniversities/NedUni/ned1.jpeg';
import nedMoU2 from '../images/MouUniversities/NedUni/ned2.jpeg';
import nedMoU3 from '../images/MouUniversities/NedUni/ned3.jpeg';
import nedMoU4 from '../images/MouUniversities/NedUni/ned4.jpeg';

// SMI University
import smiuMoU1 from '../images/MouUniversities/SmiuUni/smiu1.jpeg';
import smiuMoU2 from '../images/MouUniversities/SmiuUni/smiu1.jpeg';

const MoUSignedUni = () => {
  const [selectedUniversity, setSelectedUniversity] = useState(null);

  const universities = [
    {
      id: 1,
      name: 'NED University',
      logo: ned,
      description: 'This is a brief description about Karachi University.',
      images: [nedMoU1, nedMoU2, nedMoU3, nedMoU4],
    },
    {
      id: 2,
      name: 'Sindh Madressatul Islam University',
      logo: smiu,
      description: 'This is a brief description about University of Example 2.',
      images: [smiuMoU1, smiuMoU2],
    },
  ];

  const openModal = (university) => {
    setSelectedUniversity(university);
  };

  const closeModal = () => {
    setSelectedUniversity(null);
  };

  return (
    <section className="mou-universities">
      {/* <h2 className="section-title">MoU Signed Universities</h2> */}
      <div className="universities-container">
        {universities.map((university) => (
          <div key={university.id} className="university-card">
            <img
              src={university.logo}
              alt={`${university.name} Logo`}
              className="university-logo"
            />
            <h3 className="university-name">{university.name}</h3>
            <p className="university-description">{university.description}</p>
            <button
              className="learn-more-btn bg-dark fw-bold"
              onClick={() => openModal(university)}
            >
              See Glimpse
            </button>
          </div>
        ))}
      </div>

      {/* Modal for displaying images */}
      {selectedUniversity && (
        <div className="modal-overlay" onClick={closeModal}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <h3>{selectedUniversity.name}</h3>
            <div className="images-container">
              {selectedUniversity.images.length > 0 ? (
                selectedUniversity.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`MoU ${selectedUniversity.name} ${index + 1}`}
                    className="mou-image"
                  />
                ))
              ) : (
                <p>No images available for this university.</p>
              )}
            </div>
            <button className="close-modal-btn" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default MoUSignedUni;

