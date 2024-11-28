// MoUSignedUni.jsx
import React from 'react';
import './MoUSignedUni.css';

// Importing university logos
import ku from '../images/MouUniversities/ku.png';

const MoUSignedUni = () => {
  const universities = [
    {
      id: 1,
      name: 'Karachi University',
      logo: ku, // Directly assign the imported image path here
      description: 'This is a brief description about University of Karachi.',
      link: '#',
    },
    {
      id: 2,
      name: 'University of Example 2',
      logo: 'path/to/logo2.png', // Path to another logo
      description: 'This is a brief description about University of Example 2.',
      link: '#',
    },
    // Add more universities here as needed
  ];

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
            <a href={university.link} className="read-more-btn">
              Read More
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MoUSignedUni;
