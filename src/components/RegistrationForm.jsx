// src/components/RegistrationForm.jsx
import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import './RegistrationForm.css';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    cnic: '',
    email: '',
    education: '',
    profilePhoto: null,
    reason: ''
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to server)
    console.log(formData);
  };

  return (
    <Container className="registration-form mt-5 py-5">
      <h2>Register for the Youth Ambassador Programme</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} required />
        </Form.Group>

        <Form.Group controlId="formNumber">
          <Form.Label>Number</Form.Label>
          <Form.Control type="text" name="number" value={formData.number} onChange={handleChange} required />
        </Form.Group>

        <Form.Group controlId="formCNIC">
          <Form.Label>CNIC</Form.Label>
          <Form.Control type="text" name="cnic" value={formData.cnic} onChange={handleChange} required />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required />
        </Form.Group>

        <Form.Group controlId="formEducation">
          <Form.Label>Education Details</Form.Label>
          <Form.Control type="text" name="education" value={formData.education} onChange={handleChange} required />
        </Form.Group>

        <Form.Group controlId="formProfilePhoto">
          <Form.Label>Profile Photo</Form.Label>
          <Form.Control type="file" name="profilePhoto" onChange={handleChange} accept="image/png, image/jpeg" required />
        </Form.Group>

        <Form.Group controlId="formReason">
          <Form.Label>Why do you want to join?</Form.Label>
          <Form.Control as="textarea" name="reason" value={formData.reason} onChange={handleChange} rows={3} required />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default RegistrationForm;
