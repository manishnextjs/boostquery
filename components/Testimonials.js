'use client'; // Required if Swiper is interactive and you're using App Router

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const testimonials = [
  {
    content: "We tried other agencies, but Boost Query actually made things easier for us. More leads, better strategy and full clarity.",
    name: "Dane Whitney",
    role: "Creative and Identity Partner"
  },
  {
    content: "Boost Query made our brand visible where it matters most. The results speak for themselves!",
    name: "Lily Roberts",
    role: "B2B SaaS Founder"
  },
  {
    content: "Their team turned our online presence around within months. Clear strategies & solid results!",
    name: "Emily R",
    role: "E-commerce Owner"
  },
  {
    content: "It&rsquo;s like having a superpower! I&rsquo;ve tried almost every alternative and competitor and haven&rsquo;t found anything quite as easy to use as Fluxi marketing.",
    name: "Dane Whitney",
    role: "Creative and Identity Partner"
  }
];

const Testimonials = () => {
  return (
    <section className="home-testimonial">
      <div className="container">
        <div className="head-sec">
          <p>Testimonials</p>
          <h2>Discover how businesses <br /> like our strategies.</h2>
        </div>
      </div>

      <div className="container-fluid">
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true }}
          navigation
          className="testimonials-slider"
        >
          {testimonials.map((testi, index) => (
            <SwiperSlide key={index}>
              <div className="home-test-info">
                <div className="quote-image">{/* Optional quote SVG */}</div>

                <div className="test-logo">
                  <Image
                    src="/images/test-logo.svg"
                    alt="Client Logo"
                    width={100}
                    height={40}
                  />
                </div>

                <div className="test-cont">
                  <p>{testi.content}</p>
                </div>

                <div className="author-area">
                  <Link href="#">
                    <Image
                      src="/images/avatar.png"
                      alt={testi.name}
                      width={60}
                      height={60}
                      className="rounded-circle"
                    />
                  </Link>
                  <div className="author-info">
                    <h6 className="title">{testi.name}</h6>
                    <p>{testi.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
