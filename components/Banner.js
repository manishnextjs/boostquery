'use client';

import Image from 'next/image';
import React from 'react';

const Banner = () => {
  return (
    <section className="banner_section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="banner-text">
              <h1>
                Fuel Your <span className="banner_blue_text">Business <br /> Growth</span> with Boost Query
              </h1>
              <p>
                Ready to grow online the smart way? At Boost Query, we don&rsquo;t just drive traffic—we deliver customers.
              </p>
              <p>
                Whether you&rsquo;re looking for expert digital marketing services in the USA, SEO upgrades, or a new website
                that performs for your business, we craft strategies built around your goals to help you succeed.
              </p>
            </div>

            <form className="banner_form" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                id="email-field"
                placeholder="Enter Website Address..."
                className="email-field"
                aria-label="Website address"
              />
              <button type="submit" className="main-btn">Get My Free Proposal</button>
            </form>

            <div className="logos mt-4">
              <div className="logo-div">
                <Image
                  src="https://cdn-icggj.nitrocdn.com/AphBmykuaGyxZijWArNhxcCiPzVdYZGT/assets/images/optimized/rev-d6d7292/thriveagency.com/files/Badge-Strip-670X60.png"
                  alt="Badges"
                  width={670}
                  height={60}
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
