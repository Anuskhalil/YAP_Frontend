import React from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './SocietiesSlider.css';

const SocietiesSlider = () => {
  const navigate = useNavigate();

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const societies = [
    { id: 1, name: 'Readers & Writers', image: '../src/images/Society1.png' },
    { id: 2, name: 'Dramatic & Alliance', image: '../src/images/Society2.png' },
    { id: 3, name: 'Beats & Buzz', image: '../src/images/Society3.png' },
    { id: 4, name: 'Sports Society', image: '../src/images/Society4.png' },
    { id: 5, name: 'Beats Breaker', image: '../src/images/Society5.png' },
    { id: 6, name: 'Quills and Scroll', image: '../src/images/Society6.png' },
    { id: 7, name: 'Culinary Cooks', image: '../src/images/Society7.png' },
    { id: 8, name: 'Tech Titans', image: '../src/images/Society8.png' },
    { id: 9, name: 'Rhetoric Realm', image: '../src/images/society9.png' },
    { id: 10, name: 'Logistics Edge', image: '../src/images/Society10.png' },
    { id: 11, name: 'Cinemagic', image: '../src/images/Society11.png' },
    { id: 12, name: 'Community Cares', image: '../src/images/Society12.png' },
    { id: 13, name: 'Trads & Transitions', image: '../src/images/Society13.png' },
    { id: 14, name: 'Stitch & Stroke Club', image: '../src/images/Society14.png' },
    { id: 15, name: 'Entrepreneurship', image: '../src/images/Society15.png' },
    { id: 16, name: 'Psych Squad', image: '../src/images/Society16.png' },
  ];

  const handleKnowMoreClick = (id) => {
    navigate(`/society/${id}`);
  };

  return (
    <div className="container my-5" id='OurSociety'>
      <Slider {...settings} className='main-societies'>
        {societies.map((society) => (
          <div key={society.id} className="society-slide">
            <div className="image-wrapper">
              <img src={society.image} alt={society.name} className="img-fluid" />
            </div>
            <h3>{society.name}</h3>
            <button id='sent' onClick={() => handleKnowMoreClick(society.id)}>Know more</button>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SocietiesSlider;
