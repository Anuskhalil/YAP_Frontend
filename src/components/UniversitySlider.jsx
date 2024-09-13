import React from 'react';
import { Carousel } from 'react-bootstrap';
import './UniversitySlider.css'; // Add custom styles here

import ku from '../images/MoU Universities/ku.png';
import dow from '../images/MoU Universities/dow logo.jpg';

const UniversitySlider = () => {
  const universities = [
    { name: 'Karachi University', logo: ku },
    { name: 'DOW University', logo: dow },
    // Add more universities
  ];

  return (
    <Carousel>
      {universities.map((university, index) => (
        <Carousel.Item key={index}>
          <div className="university-container">
            <img
              className="university-logo"
              src={university.logo}
              alt={university.name}
            />
            <h3 className="university-name">{university.name}</h3>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default UniversitySlider;
