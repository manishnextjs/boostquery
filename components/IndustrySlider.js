'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const industries = [
  {
    icon: 'fas fa-pen-nib',
    title: 'Law Firms',
    text: 'We help legal practices establish authority online through targeted SEO, optimized content and local visibility to attract high-intent clients.',
  },
  {
    icon: 'fas fa-globe',
    title: 'Marketing Teams',
    text: 'From campaign execution to performance tracking, we empower in-house marketing teams with the digital muscle needed to scale efficiently.',
  },
  {
    icon: 'fa-solid fa-volume-high',
    title: 'Real Estate',
    text: 'Whether you&rsquo;re selling properties or building a brand, we optimize your online presence to capture leads and showcase listings effectively.',
  },
  {
    icon: 'far fa-clipboard',
    title: 'Health Care',
    text: 'We create HIPAA-compliant, patient-first digital experiences that build trust, enhance discoverability and drive appointment bookings.',
  },
];

const IndustrySlider = () => {
  return (
    <section className="marketing_sec">
      <div className="container">
        <div className="head-sec text-center">
          <h2>Strategic Innovation for Every Industry</h2>
          <p>
            Every industry has its own audience, challenges and digital opportunities. At Boost Query, we craft
            data-driven digital strategies tailored to your industry&rsquo;s unique needs. With deep domain expertise
            and a proven track record, we help brands in every sector thrive online.
          </p>
        </div>

        <div className="main-content mt-5">
          <Swiper
            modules={[Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            loop={true}
            breakpoints={{
              768: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
            }}
          >
            {industries.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="card text-center p-4">
                  <i className={`${item.icon} fs-2 mb-3`} aria-hidden="true"></i>
                  <h5>{item.title}</h5>
                  <p>{item.text}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default IndustrySlider;
