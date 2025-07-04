'use client'; // Optional if using App Router

import React from 'react';

const AboutIntroSection = () => {
  return (
    <section className="about-upper">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-12">
            <div className="about-upper-head">
              <h1>
                Driving Digital Success with{' '}
                <span>Creativity</span>, <span>Code</span>, and <span>Commitment</span>
              </h1>
            </div>
          </div>
          <div className="col-lg-5 col-12">
            <div className="about-upper-content">
              <p>
                At <strong>Boost Query</strong>, we help businesses grow online. For over three years,
                we&rsquo;ve delivered smart, creative, and reliable digital services that get real results.
              </p>
              <p>
                We offer website design, development, SEO, SEM, social media, and content marketing —
                all tailored to fit your business needs. Our projects are always on time, high-quality,
                and focused on helping you succeed.
              </p>
              <p>
                Whether you&rsquo;re just starting out or ready to grow bigger, we&rsquo;re here to support your journey.
              </p>
              <p>
                Let&rsquo;s build, boost, and grow — together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntroSection;
