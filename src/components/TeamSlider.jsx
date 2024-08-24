import React, { useState } from 'react';
import Slider from 'react-slick';
import { Modal, Button } from 'react-bootstrap';
import './TeamSlider.css';

const TeamSlider = () => {
  const [show, setShow] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = (member) => {
    setSelectedMember(member);
    setShow(true);
  };

  const teamMembers = [
    {
      name: 'Anus Khalil',
      image: './src/images/Team Member/anus.png',
      description: 'UI/UX Designer focused on creating intuitive user experiences.'
    },
    {
      name: 'Ghulam Rasool',
      image: './src/images/Team Member/ghulam.jpeg',
      description: 'Ghulam Rasool is an ACP Youth Ambassador who excels in team management, organizing cultural events, and educational workshops. A Computer Science student at Sindh Madressatul Islam University, he also contributes to his community through web development and effective leadership.'
    },
    {
      name: 'Rawaid Khan',
      image: './src/images/Team Member/rawaid.jpeg',
      description: ''
    },
    {
      name: 'Ali Mehdi Abro',
      image: './src/images/Team Member/Ali.jpeg',
      description: 'Ali Mehdi Abro is a highly motivated Logistics Intern at the Arts Council of Pakistan’s Youth Ambassador Program. He excels in managing tasks, coordinating teams, and paying close attention to detail. His experience with university societies, GDG Kolachi, and the Arts Council events has honed his skills. As the former president of the Literary Society at SMIU, he developed strong communication, teamwork, and problem-solving abilities. Ali is committed to personal growth, seeking new challenges and opportunities for professional development.Zia Mohyeddin'
    },
    {
      name: 'Eeman Asad',
      image: './src/images/Team Member/eeman2.jpg',
      description: 'Eeman Asad is a Bachelor’s student in English at DHA Suffa University and serves as the Social Media Manager for the Youth Ambassador Programme. She oversees social media platforms, enhancing communication and engagement, and has honed her skills in social media, communication, and collaboration through this role.'
    },
    {
      name: 'Syeda Aqsa Shah ',
      image: './src/images/Team Member/aqsa.jpg',
      description: 'Syeda Aqsa Shah is an English major at DSU, currently interning as a videographer at the Arts Council of Pakistan through the Youth Ambassador Programme. Her role involves creating content that showcases youth perspectives, while gaining valuable experience and connecting with talented peers from various institutions.'
    },
    {
      name: 'Nafiu Bhutto',
      image: './src/images/Team Member/nafes.jpeg',
      description: ' A Computer Science student at DUET, Nafiu is an experienced Marketing Manager with a successful track record working with international brands, including Dopispy and Minea. Recognized as a top-rated professional on Upwork. Expertise in managing YouTube channels, including a personal channel with over 40,000 subscribers and more than 11 million views.'
    },
    {
      name: 'Mahnoor Waseem',
      image: './src/images/Team Member/MAHNOORW.jpg',
      description: 'Mahnoor Waseem is a Master student in Psychology at Federal Urdu University, interning at the Arts Council in the Youth Ambassador Programme. She leads the Psych Squad as Communication Manager, overseeing event management to ensure activities are successful and enjoyable. Her experience at the Arts Council is enhancing her skills in communication and event management, benefiting her future career in psychology.'
    },
    {
      name: 'Ali Mohyeddin',
      image: './src/images/Team Member/alim.jpg',
      description: 'Ali Mehdi Abro is a highly motivated Logistics Intern at the Arts Council of Pakistan’s Youth Ambassador Program. He excels in managing tasks, coordinating teams, and paying close attention to detail. His experience with university societies, GDG Kolachi, and the Arts Council events has honed his skills. As the former president of the Literary Society at SMIU, he developed strong communication, teamwork, and problem-solving abilities. Ali is committed to personal growth, seeking new challenges and opportunities for professional development.'
    },
    {
      name: 'Areesha Javed Chotani',
      image: './src/images/Team Member/Arisha.jpg',
      description: 'Areesha Javed Chotani is a dynamic individual balancing motherhood, studies, and content writing. Pursuing a Bachelor of Arts at Allama Iqbal Open University, she explores subjects like journalism, media sciences, and community development. As a media intern and content writer for the Youth Ambassador Programme at the Arts Council of Pakistan, Areesha drives creativity and collaboration, using her diverse academic background to create impactful content and foster youth empowerment.'
    },
    {
      name: 'Noman Rehman',
      image: './src/images/Team Member/Noman.jpg',
      description: 'Areesha Javed Chotani is a dynamic individual balancing motherhood, studies, and content writing. Pursuing a Bachelor of Arts at Allama Iqbal Open University, she explores subjects like journalism, media sciences, and community development. As a media intern and content writer for the Youth Ambassador Programme at the Arts Council of Pakistan, Areesha drives creativity and collaboration, using her diverse academic background to create impactful content and foster youth empowerment.'
    },
    // Add more members as needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings} className="team-slider mt-5">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <img src={member.image} alt={member.name} className="img-fluid" />
            <h5 className="member-name">{member.name}</h5>
            <Button variant="primary" onClick={() => handleShow(member)}>
              Know more
            </Button>
          </div>
        ))}
      </Slider>

      {selectedMember && (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedMember.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{selectedMember.description || 'No description available.'}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
};

export default TeamSlider;
