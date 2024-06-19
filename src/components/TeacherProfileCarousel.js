import React from 'react';
import { Carousel } from 'react-bootstrap';

const TeacherProfileCarousel = () => {
  const teachers = [
    {
      name: 'Teacher 1',
      image: process.env.PUBLIC_URL + '/public/foto/1.jpg'
    },
    {
      name: 'Teacher 2',
      image: process.env.PUBLIC_URL + '/public/foto/2.jpg'
    },
    {
      name: 'Teacher 3',
      image: process.env.PUBLIC_URL + '/public/foto/3.jpg'
    }
  ];

  return (
    <Carousel>
      {teachers.map((teacher, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={teacher.image}
            alt={`Foto ${teacher.name}`}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default TeacherProfileCarousel;
