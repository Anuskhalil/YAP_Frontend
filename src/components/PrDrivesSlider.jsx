import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './PrDrives.css';

const PrDrives = () => {
  const prDrivesPhotos = [
    { title: 'PR Drive 1', image: './src/images/Pr Drives/pr.jpeg' },
    { title: 'PR Drive 2', image: './src/images/Pr Drives/pr2.jpeg' },
  ];

  return (
    <Container className="pr-drives-container">
      <Row>
        {prDrivesPhotos.map((photo, index) => (
          <Col xs={12} sm={6} md={4} lg={3} key={index} className="pr-drives-photo-col">
            <div className="pr-drives-photo-wrapper">
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
    </Container>
  );
};

export default PrDrives;
