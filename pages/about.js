import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BlogSection from '../components/BlogSection';
import WhyChooseUs from '../components/WhyChooseUs';
import AboutIntroSection from '../components/AboutIntroSection';

import CtaSection from '../components/CtaSection';
import Seo from '../components/seo';

export default function about() {
    return (
      <>
        <Seo
        title="About Us"
        description="Learn more about Boosst Query, a full-service SEO and web development agency helping businesses scale online."
        image="/images/about-us-og.png"
        schemaType="WebPage"
        publishedTime="2024-07-01T10:00:00+05:30"
      />
  
        <Navbar />
  
        {/* Navbar Placeholder */}
        {/* You can replace this with <Navbar /> if you create a Navbar.js component */}
        
  
        {/* Main Content Placeholder */}
       
        <AboutIntroSection />

<section className="about-video">
  <div className="container">
    <div className="row">
      <div className="col-12">
        <iframe
          width="100%"
          height="550"
          src="https://www.youtube.com/embed/ELn7kwGjAXA?si=u2rZoLmmiHFgDMlP"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  </div>
</section>

<section className="choose-us">
  <div className="container">
    <div className="head-sec">
      <p>This Is How We Work</p>
      <h2>Why you will choose us</h2>
    </div>
    <div className="row">
      <div className="col-lg-6 col-md-6 col-12">
        <div className="choose-us-content">
          <div className="accordion" id="accordionPanelsStayOpenExample">
            {/* Accordion Item 1 */}
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseOne"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseOne"
                >
                  {/* SVG Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                    {/* ... Your path data here ... */}
                  </svg>
                  Understand Your Goals
                </button>
                <span className="number">01</span>
              </h2>
              <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse">
                <div className="accordion-body">
                  <p>
                    Includes using high-quality keywords to write strategic content that ranks, as well as descriptive metadata and meaningful image alt text.
                  </p>
                </div>
              </div>
            </div>

            {/* Accordion Item 2 */}
            {/* Repeat structure like above with different `data-bs-target` and IDs */}

            {/* ... Item 3 and 4 */}
          </div>
        </div>
      </div>

      <div className="col-lg-6 col-md-6 col-12">
        <div className="choose-us-img">
        <Image
  src="/images/choose.png"
  alt="Choose us"
  width={500}     // You can adjust width and height as needed
  height={300}
/>
        </div>
      </div>
    </div>

    {/* Optional Stats Area */}
    <div className="choose-list d-none">
      <div className="row">
        <div className="col-3">
          <div className="choose-list-icon">
            {/* SVG */}
          </div>
          <div className="choose-list-content">
            <h4>2017</h4>
            <p>Year founded</p>
          </div>
        </div>
        {/* Repeat col-3 for other stats */}
      </div>
    </div>
  </div>
</section>




<BlogSection />

<CtaSection />



<Footer />
    </>
  );
}
