// src/components/Carousel/Carousel.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import './Carousel.css';

import Slide from './Slide';
import nike from '../../assets/nike.png';

export default function Carousel() {
  const slides = [
    {
      title: 'Queima de estoque Nike',
      description: 'Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.',
      image: nike,
    },
    {
      title: 'Queima de estoque Nike',
      description: 'Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.',
      image: nike,
    },
    {
      title: 'Queima de estoque Nike',
      description: 'Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.',
      image: nike,
    },
    {
      title: 'Queima de estoque Nike',
      description: 'Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.',
      image: nike,
    },
  ];

  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      pagination={{ clickable: true }}
      autoplay={{ delay: 4000 }}
      loop={true}
    >
      {slides.map((item, index) => (
        <SwiperSlide key={index}>
          <Slide {...item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
