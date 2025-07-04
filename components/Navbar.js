'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <>
      {/* Desktop Header */}
      <header>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-3">
              <div className="header-logo">
                <Link href="/">
                  <Image
                    src="/images/Boostquery-logo.svg"
                    alt="BoostQuery Logo"
                    width={140}
                    height={40}
                    priority
                  />
                </Link>
              </div>
            </div>

            <div className="col-6">
              <nav className="header-center">
                <ul>
                  <li><Link href="/about">About</Link></li>

                  <li className="upper-menu">
                    <Link href="/services">Solutions</Link>
                    <div className="under-menu">
                      <div className="container-fluid">
                        <div className="row">
                          {/* Mega menu card */}
                          <div className="col-3">
                            <div className="card p-4 megamenu_card">
                              <Image
                                src="https://techtro-wp.qzency.com/wp-content/uploads/2025/01/2149399293-1-1-min-664x353.png"
                                alt="Mega Menu"
                                width={260}
                                height={150}
                              />
                              <span className="mt-3 text-dark">
                                Lorem ipsum dolor sit amet consectetur, elit.
                              </span>
                              <Link href="/blog" className="mega-link">
                                Check Our Latest Blogs <i className="fa fa-arrow-right" />
                              </Link>
                            </div>
                          </div>

                          {/* Solutions */}
                          <div className="col-6 border-rl">
                            <div className="drop-title">
                              <h5>Solutions</h5>
                            </div>
                            <div className="drop-menu d-flex justify-content-between">
                              <ul>
                                <li>
                                  <Link href="/web-design-and-development-services">
                                    <Image src="/images/front-dev.png" alt="" width={20} height={20} />
                                    Web design and development
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/seo-services">
                                    <Image src="/images/web-page.png" alt="" width={20} height={20} />
                                    Search Engine Optimization
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/content-writing-services">
                                    <Image src="/images/note.png" alt="" width={20} height={20} />
                                    Content Writing
                                  </Link>
                                </li>
                                <li className="view-link">
                                  <Link href="/services">
                                    View All <i className="fa fa-arrow-right" />
                                  </Link>
                                </li>
                              </ul>

                              <ul>
                                <li>
                                  <Link href="/search-engine-marketing-services">
                                    <Image src="/images/social-media.png" alt="" width={20} height={20} />
                                    Search Engine Marketing
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/pay-per-click-services">
                                    <Image src="/images/website.png" alt="" width={20} height={20} />
                                    Pay Per Click (PPC)
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/social-media-optimization-services">
                                    <Image src="/images/social-mark.png" alt="" width={20} height={20} />
                                    Social Media Optimization
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>

                          {/* Industries */}
                          <div className="col-3">
                            <div className="drop-title">
                              <h5>Industries</h5>
                            </div>
                            <div className="drop-menu">
                              <ul>
                                <li>
                                  <Link href="/healthcare-seo-agency">
                                    <Image src="/images/first-aid-kit.png" alt="" width={20} height={20} />
                                    Healthcare
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/law-firm-seo-services">
                                    <Image src="/images/weight.png" alt="" width={20} height={20} />
                                    Law firm
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/real-estate-seo">
                                    <Image src="/images/property.png" alt="" width={20} height={20} />
                                    Real estate
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/dental-seo-company">
                                    <Image src="/images/tooth.png" alt="" width={20} height={20} />
                                    Dental
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li><Link href="/small-business">Small Business</Link></li>
                  <li><Link href="/blog">Blogs</Link></li>
                  <li><Link href="/contact">Contact Us</Link></li>
                </ul>
              </nav>
            </div>

            <div className="col-3">
              <div className="header-right">
                <ul>
                  <li>
                    <Link href="/contact" className="main-btn">
                      Get Quote Now
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Header */}
      <header className="page-header mob">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <Link href="/" className="logo">
              <Image
                src="https://amanda.webdesignvrvr.com/uploads/uploads/logo-6791015a37145.png"
                alt="Logo"
                width={120}
                height={35}
                priority
              />
            </Link>

            <div className="menu-toggle1" id="menu-toggle1">
              <i className="fa fa-bars" />
            </div>

            <div className="menu-bar-in" id="tag1">
              <div className="mobile-nav">
                <div className="mobile-menu-logo d-flex justify-content-between align-items-center">
                  <Link href="/" className="logo">
                    <Image
                      src="https://amanda.webdesignvrvr.com/uploads/uploads/logo-6791015a37145.png"
                      alt="Logo"
                      width={120}
                      height={35}
                    />
                  </Link>
                  <span id="close-menu">
                    <i className="fa fa-times" id="close-menu1" />
                  </span>
                </div>

                <nav className="navbar navbar-expand-lg">
                  <ul className="navbar-nav">
                    <li className="nav-item"><Link className="nav-link" href="/">Home</Link></li>
                    <li className="nav-item"><Link className="nav-link" href="/about">About Us</Link></li>

                    <li className="nav-item dropdown">
                      <span className="nav-link dropdown-toggle">Services</span>
                      <ul className="dropdown-menu">
                        <li><Link className="dropdown-item" href="/website-designer-dev">Web design and development</Link></li>
                        <li><Link className="dropdown-item" href="/seo">Search Engine Optimization</Link></li>
                        <li><Link className="dropdown-item" href="/content-writing">Content Writing</Link></li>
                        <li><Link className="dropdown-item" href="/social-media-ad">Social Media Advertising</Link></li>
                        <li><Link className="dropdown-item" href="/pay-per-click">Pay Per Click (PPC)</Link></li>
                        <li><Link className="dropdown-item" href="/social-media-marketing">Social Media Marketing</Link></li>
                      </ul>
                    </li>

                    <li className="nav-item dropdown">
                      <span className="nav-link dropdown-toggle">Industries</span>
                      <ul className="dropdown-menu">
                        <li><Link className="dropdown-item" href="/health-care">Healthcare</Link></li>
                        <li><Link className="dropdown-item" href="/law-firm">Law firm</Link></li>
                        <li><Link className="dropdown-item" href="/real-estate">Real estate</Link></li>
                        <li><Link className="dropdown-item" href="/dental">Dental</Link></li>
                      </ul>
                    </li>

                    <li className="nav-item"><Link className="nav-link" href="/contact">Contact Us</Link></li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
