import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './MeetupSlider.css';

const Meetup = () => {
  const meetupPhotos = [
    { title: 'Meetup 1', image: './src/images/meetupimg1.jpg' },
    { title: 'Meetup 2', image: './src/images/meetupimg2.jpg' },
    { title: 'Meetup 3', image: './src/images/meetupimg3.jpg' },
    { title: 'Meetup 4', image: './src/images/meetupimg4.jpg' },
    { title: 'Meetup 5', image: './src/images/meetupimg5.jpg' },
    { title: 'Meetup 6', image: './src/images/meetupimg6.jpg' },
    { title: 'Meetup 7', image: './src/images/meetupimg7.jpg' },
    { title: 'Meetup 8', image: './src/images/meetupimg8.jpg' },
    { title: 'Meetup 9', image: './src/images/meetupimg9.jpg' },
    { title: 'Meetup 10', image: './src/images/meetupimg10.jpg' },
    { title: 'Meetup 11', image: './src/images/meetupimg11.jpg' },
    { title: 'Meetup 12', image: './src/images/meetupimg12.jpg' },
  ];

  return (
    <Container className="meetup-container">
      <Row>
        {meetupPhotos.map((photo, index) => (
          <Col xs={12} sm={6} md={4} lg={3} key={index} className="meetup-photo-col">
            <div className="meetup-photo-wrapper">
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
    </Container>
  );
};

export default Meetup;
