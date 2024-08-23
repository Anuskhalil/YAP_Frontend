import React from 'react';
import Slider from 'react-slick'; // Assuming you are using react-slick
import './TeamSlider.css';

const TeamSlider = () => {
  const teamMembers = [
    { name: 'Anus Khalil', image: './src/images/anus.jpg' },
    { name: 'Ghulam Rasool', image: './src/images/ghulam.jpeg' },
    { name: 'Rawaid Khan', image: './src/images/rawaid.jpeg' },
    { name: 'Ali Mehdi Abro', image: './src/images/Ali.jpeg' },
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
    <Slider {...settings} className="team-slider mt-5">
      {teamMembers.map((member, index) => (
        <div key={index} className="team-member">
          <img src={member.image} alt={member.name} className="img-fluid" />
          <h5 className="member-name">{member.name}</h5>
        </div>
      ))}
    </Slider>
  );
};

export default TeamSlider;
