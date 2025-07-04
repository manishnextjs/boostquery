import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import chooseServiceImg from '../public/images/choose-service.jpg';
import boostQueryLogo from '../public/images/boostquery logo.svg';

const services = [
  {
    title: 'Custom Website Design',
    desc: 'Stand out online with a website crafted uniquely for your brand. Our custom website design services combine creativity and strategy...',
    link: '#',
  },
  {
    title: 'Responsive Development',
    desc: 'Ensure your website performs beautifully across all devices. Our responsive development guarantees seamless user experiences...',
    link: '#',
  },
  {
    title: 'eCommerce Development',
    desc: 'Launch or scale your online store with custom eCommerce development tailored to your goals and customers.',
    link: '#',
  },
  {
    title: 'CMS Development',
    desc: 'Manage your content efficiently with our customized CMS solutions built for flexibility and ease of use.',
    link: '#',
  },
  {
    title: 'WordPress Design & Development',
    desc: 'Tap into the power of WordPress with themes and plugins built for performance, security, and scalability.',
    link: '#',
  },
  {
    title: 'Website Maintenance',
    desc: 'Keep your website secure and updated with our comprehensive maintenance and support services.',
    link: '#',
  },
];

export default function WebDesignDevelopment() {
  return (
    <>
      <Head>
        <title>Web Design and Development Services | Your Brand</title>
        <meta name="description" content="Custom website design and development services that convert, captivate, and scale with your business." />
      </Head>
      <Navbar />

      <section className="service-details-banner">
        <div className="container">
          <div className="breadcrumb">
            <ul>
              <li>
                <Link href="/"><i className="fa-solid fa-house"></i></Link>
              </li>
              <li><i className="fa-solid fa-chevron-right"></i></li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li><i className="fa-solid fa-chevron-right"></i></li>
              <li className="bread-page">Web Design and Development Services</li>
            </ul>
          </div>

          <div className="banner-info">
            <h1>Web Design and Development Services</h1>
            <p>
              Build a website that captivates, converts and grows with your business. Our expert team offers end-to-end
              web design and development services tailored to your goals, industry and audience.
            </p>
            <Link href="#" className="main-btn">Get Your Free Website Consultation</Link>
          </div>
        </div>
      </section>

      <section className="services-info">
        <div className="container">
          <h2>Building Custom Websites for Seamless User Experience</h2>
          <p>
            As a leading website design and development company, we help businesses turn their digital vision into
            reality. Whether you&rsquo;re launching a new site or upgrading an outdated one, our website design and
            development services ensure a seamless, responsive and visually striking user experience that fuels
            business growth.
          </p>
          <p>
            From creative UI/UX design to robust coding and custom functionalities, we provide comprehensive web
            design and development services that blend aesthetics with performance. Whether you&rsquo;re a startup, SMB,
            or large enterprise, our team builds custom, scalable solutions tailored to your brand.
          </p>
        </div>
      </section>

      <section className="details-services">
        <div className="container">
          <div className="head-sec">
            <h2>BoostQuery Web Design and Development Services</h2>
          </div>

          <div className="row">
            {services.map((service, index) => (
              <div className="col-4" key={index}>
                <div className="details-service-info">
                  <div className="details-service-icon">
                    <Link href={service.link}>
                      <svg aria-hidden="true" className="e-font-icon-svg e-fas-pen-fancy" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                        <path d="M79.18 282.94a32.005 32.005 0 0 0-20.24 20.24L0 480l4.69 4.69 92.89-92.89c-.66-2.56-1.57-5.03-1.57-7.8 0-17.67 14.33-32 32-32s32 14.33 32 32-14.33 32-32 32c-2.77 0-5.24-.91-7.8-1.57l-92.89 92.89L32 512l176.82-58.94a31.983 31.983 0 0 0 20.24-20.24l33.07-84.07-98.88-98.88-84.07 33.07zM369.25 28.32L186.14 227.81l97.85 97.85 199.49-183.11C568.4 67.48 443.73-55.94 369.25 28.32z" />
                      </svg>
                    </Link>
                  </div>
                  <div className="details-service-content">
                    <h5><Link href={service.link}>{service.title}</Link></h5>
                    <p>{service.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="choose-service">
        <div className="container">
          <div className="head-sec">
            <h2>Why Choose BoostQuery for Web Design and Development Services?</h2>
          </div>
          <div className="row">
            <div className="col-6 choose-service-img">
              <Image src={chooseServiceImg} alt="Choose Us" width={500} height={400} />
            </div>
            <div className="col-6 choose-service-content">
              <div className="choose-service-info">
                <h3>Your Trusted Website Design and Development Company</h3>
                <p>BoostQuery brings 3+ years of experience in delivering top-notch website design and development services to businesses across industries.</p>
                <p>Our team leverages modern tech stacks and industry best practices to deliver fast, secure and scalable websites tailored to your goals.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
