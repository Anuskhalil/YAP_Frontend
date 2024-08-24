import React from 'react';
import { Carousel } from 'react-bootstrap';
import './UniversitySlider.css'; // Add custom styles here

const UniversitySlider = () => {
  const universities = [
    { name: 'Karachi University', logo: './src/images/MoU Universities/ku logo.png' },
    { name: 'DOW University', logo: './src/images/MoU Universities/dow logo.jpg' },
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
