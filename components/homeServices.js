'use client'; // Optional if you're using Next.js App Router

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    icon: '/images/social.png',
    title: 'Search Engine Optimization',
    desc: 'Want to rank higher on Google? Our tailored Boost Query SEO services help you improve visibility, attract qualified leads & convert more traffic into sales.',
    points: [
      'Advanced Keyword Planning',
      'On-Page & Off-Page Optimization',
      'Competitor Analysis & Insights',
    ],
    href: '/services/seo',
  },
  {
    icon: '/images/seo.png',
    title: 'Web design & Development',
    desc: 'Need a website that not only looks great but works hard too? Our Boost Query web design services create responsive, fast & conversion-focused websites your customers will love.',
    points: [
      'Responsive Design',
      'Fast-loading Framework',
      'Seamless User Experience',
    ],
    href: '/services/web-development',
  },
  {
    icon: '/images/boost.png',
    title: 'Social Media Marketing',
    desc: 'Struggling to stay visible and connect with your audience? Our social strategies help you engage and convert with scroll-stopping content.',
    points: [
      'Platform-Specific Strategies',
      'Full-funnel Campaign Design',
      'Targeted Audience Engagement',
    ],
    href: '/services/social-media',
  },
];

const Services = () => {
  return (
    <section className="home-services">
      <div className="container">
        <div className="head-sec text-center">
          <p>Our Core Services</p>
          <h2>Smart Solutions to Scale Your Business</h2>
        </div>
        <div className="row">
          {services.map((service, index) => (
            <div className="col-lg-4 col-12" key={index}>
              <div className={`home-service-info ${index === 1 ? 'active' : ''}`}>
                <div className="service-top-area">
                  <div className="service-icon">
                    <Image
                      src={service.icon}
                      alt={`${service.title} Icon`}
                      width={60}
                      height={60}
                      loading="lazy"
                    />
                  </div>
                  <h5>{service.title}</h5>
                </div>
                <div className="home-service-para">
                  <p>{service.desc}</p>
                  <ul>
                    {service.points.map((point, i) => (
                      <li key={i}>
                        <i className="fa-regular fa-circle-check"></i> {point}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link href={service.href} className="other-btn">
                  Learn more <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
