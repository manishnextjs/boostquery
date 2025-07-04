import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="top-footer d-flex justify-content-between align-items-center">
          <div className="footer-logo">
            <Link href="/">
              <Image
                src="/images/boostquery logo.svg"
                alt="BoostQuery Logo"
                width={150}
                height={40}
                priority
              />
            </Link>
          </div>
          <div className="footer-social">
            <ul className="d-flex gap-3 list-unstyled">
              <li>
                <a
                  href="https://www.linkedin.com/in/clicks-magnet-5b082b315/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  aria-label="Twitter"
                >
                  <i className="fa-brands fa-x-twitter"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/clicksmagnet_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=61557118326471"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-middle mt-5">
          <div className="row">
            <div className="col-md-3">
              <h4>Solutions</h4>
              <ul>
                <li><Link href="/website-designer-dev">Web design and development</Link></li>
                <li><Link href="/contant-writing">Content writing</Link></li>
                <li><Link href="/social-media-markating">Digital marketing</Link></li>
                <li><Link href="/seo">Search Engine Optimization</Link></li>
                <li><Link href="/social-media-ad">Social Media Advertising</Link></li>
                <li><Link href="/pay-per-click">Pay per click</Link></li>
              </ul>
            </div>
            <div className="col-md-3">
              <h4>Quick Links</h4>
              <ul>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/services">Services</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/contact">Contact Us</Link></li>
              </ul>
            </div>
            <div className="col-md-3">
              <h4>Industry</h4>
              <ul>
                <li><Link href="/health-care">Health Care</Link></li>
                <li><Link href="/low-firm">Law Firm</Link></li>
                <li><Link href="/real-estate">Real Estate</Link></li>
                <li><Link href="/dental">Dental</Link></li>
              </ul>
            </div>
            <div className="col-md-3">
              <h4>Newsletter</h4>
              <form action="#">
                <div className="form-input position-relative mb-2">
                  <input type="email" placeholder="Email address.." required />
                  <i className="fa-regular fa-envelope position-absolute end-0 me-3 top-50 translate-middle-y"></i>
                </div>
                <button type="submit" className="main-btn">Subscribe Now</button>
              </form>
            </div>
          </div>
        </div>

        <div className="bottom-footer mt-4 d-flex justify-content-between flex-wrap">
          <div className="footer-bottom-left">
            <p>© 2024 Clicks, All right reserved.</p>
          </div>
          <div className="footer-bottom-right">
            <ul className="d-flex gap-3 list-unstyled">
              <li><Link href="#">Privacy Policy</Link></li>
              <li><Link href="#">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
