'use client'; // Only if using Next.js App Router

import React from 'react';
import Link from 'next/link';

const CallToAction = () => {
  return (
    <section className="abt-cta mt-5">
      <div className="container">
        <div className="abt-cta-content text-center">
          <h2>Results That Stick. Strategies That Scale.</h2>
          <p>
            Your audience is searching. Let&rsquo;s make sure they find you. From SEO to design to full digital campaigns,
            Boost Query digital marketing services in the USA are crafted to help your business grow with confidence.
          </p>
          <Link href="/contact" className="main-btn">
            Get Results Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
