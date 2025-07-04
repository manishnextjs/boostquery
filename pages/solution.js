import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Solution() {
  return (
    <>
      <Head>
        <title>Solutions | Clicks Magnet</title>
        <meta name="description" content="Customized digital marketing solutions tailored to your business needs, including SEO, web development, and social media." />
      </Head>

      <Navbar />

      <section className="services-section">
        <div className="container">
          <div className="head-sec">
            <h1>
              Customized solutions to <span>your business</span>
            </h1>
            <p>
              Welcome to Clicks Magnet. As a motivational speaker, we&rsquo;re passionate about helping individuals unlock their true potential.
            </p>
          </div>

          <div className="services-inner">
            <div className="row">
              {[
                {
                  icon: '/images/web-page.png',
                  title: 'Search Engine Optimization',
                  desc: 'Get organic traffic and high rankings with multi-team collaboration that will help you optimize on-page and off-page SEO.',
                },
                {
                  icon: '/images/front-dev.png',
                  title: 'Web design and development',
                  desc: 'Building the site map with places to house in mind means implementing your SEO landing pages.',
                },
                {
                  icon: '/images/social-mark.png',
                  title: 'Social Media Marketing',
                  desc: 'Optimizing your website for each of the main components to put a good and fit in house strategy in place.',
                },
                {
                  icon: '/images/note.png',
                  title: 'Content Writing',
                  desc: 'Get organic traffic and high rankings with multi-team collaboration that will help you optimize on-page and off-page SEO.',
                },
                {
                  icon: '/images/social-media.png',
                  title: 'Social Media Advertising',
                  desc: 'Building the site map with places to house in mind means implementing your SEO landing pages.',
                },
                {
                  icon: '/images/website.png',
                  title: 'Pay Per Click (PPC)',
                  desc: 'Optimizing your website for each of the main components to put a good and fit in house strategy in place.',
                },
              ].map((service, idx) => (
                <div className="col-lg-4 col-md-6 col-12" key={idx}>
                  <div className="services-info">
                    <div className="service-icon">
                      <Image src={service.icon} alt={service.title} width={60} height={60} />
                    </div>
                    <h5>{service.title}</h5>
                    <p>{service.desc}</p>
                    <Link href="#" className="other-btn">
                      Learn more <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="blog-section">
        <div className="container">
          <div className="head-sec">
            <p>Recent Articles</p>
            <h2>Latest from our blog</h2>
          </div>

          <div className="row">
            {[
              { img: '/images/blog1.webp', date: '30 January, 2024', title: 'Inside the Tactics of Leading Advertising Agencies' },
              { img: '/images/blog2.webp', date: '30 January, 2024', title: 'Inside the Tactics of Leading Advertising Agencies' },
              { img: '/images/blog3.webp', date: '30 January, 2024', title: 'Inside the Tactics of Leading Advertising Agencies' }
            ].map((item, index) => (
              <div className="col-lg-4 col-md-4 col-12" key={index}>
                <div className="blog-info">
                  <div className="blog-img">
                    <Link href="#">
                      <Image src={item.img} alt="blog post" width={400} height={250} />
                    </Link>
                  </div>
                  <div className="blog-content">
                    <div className="blog-bottom">
                      <span className="blog-date">{item.date}</span>
                    </div>
                    <h4><Link href="#">{item.title}</Link></h4>
                    <Link href="#" className="other-btn">Read More</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="abt-cta mt-5">
        <div className="container">
          <div className="abt-cta-content text-center">
            <h2>Results That Stick. Strategies That Scale.</h2>
            <p>
              Your audience is searching. Let&rsquo;s make sure they find you. From SEO to design to full digital campaigns,
              Boost Query digital marketing services in the USA are crafted to help your business grow with confidence.
            </p>
            <Link href="#" className="main-btn">Get Results Now</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
