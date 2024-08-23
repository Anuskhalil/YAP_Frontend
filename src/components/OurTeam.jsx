import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './OurTeam.css';
import TeamSlider from './TeamSlider'; // Assume you have a slider component

const OurTeam = () => {
  return (
    <Container>
      <div className="main-head">
        <h1>Meet Our Team</h1>
        <h3>Celebrities and Influencers</h3>
      </div>
      <Row className="celebrities-row">
        <Col xs={12} md={6} lg={3}>
          <div className="image-container mt-5">
            <img src="./src/images/celebrity1.jpeg" alt="Celebrity 1" className="img-fluid" />
            <div className="overlay">
              <div className="text">Sahir Ali Baggha</div>
            </div>
          </div>
        </Col>
        <Col xs={12} md={6} lg={3}>
          <div className="image-container mt-5">
            <img src="./src/images/celebrity2.jpeg" alt="Celebrity 2" className="img-fluid" />
            <div className="overlay">
              <div className="text">Mahira Khan</div>
            </div>
          </div>
        </Col>
        <Col xs={12} md={6} lg={3}>
          <div className="image-container mt-5">
            <img src="./src/images/celebrity3.jpeg" alt="Celebrity 3" className="img-fluid" />
            <div className="overlay">
              <div className="text">Anwar Masood</div>
            </div>
          </div>
        </Col>
        <Col xs={12} md={6} lg={3}>
          <div className="image-container mt-5">
            <img src="./src/images/celebrity4.jpeg" alt="Celebrity 4" className="img-fluid" />
            <div className="overlay">
              <div className="text">Fahad Mustafa</div>
            </div>
          </div>
        </Col>
        <Col xs={12} md={6} lg={3}>
          <div className="image-container mt-5">
            <img src="./src/images/celebrity5.jpeg" alt="Celebrity 4" className="img-fluid" />
            <div className="overlay">
              <div className="text">Asim Azhar</div>
            </div>
          </div>
        </Col>
        <Col xs={12} md={6} lg={3}>
          <div className="image-container mt-5">
            <img src="./src/images/celebrity6.jpeg" alt="Celebrity 4" className="img-fluid" />
            <div className="overlay">
              <div className="text">Umer Alam</div>
            </div>
          </div>
        </Col>
        <Col xs={12} md={6} lg={3}>
          <div className="image-container mt-5">
            <img src="./src/images/celebrity7.jpeg" alt="Celebrity 4" className="img-fluid" />
            <div className="overlay">
              <div className="text">Hiba Bukhari</div>
            </div>
          </div>
        </Col>
      </Row>
      <h3 className="teamMembers mt-5">YAP Team Members</h3>
      <TeamSlider />
    </Container>
  );
};

export default OurTeam;
