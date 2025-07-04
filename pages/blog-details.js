import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Image Imports
import blogBanner from '../public/images/blog-banner.jpg';
import blogDetails1 from '../public/images/blog-details1.jpg';
import whiteOverlay from '../public/images/white-overlay.svg';
import bannerIcon from '../public/images/banner-icon.svg';
import goBackIcon from '../public/images/go-back.svg';

export default function BlogDetails() {
  return (
    <>
      <Head>
        <title>7 Simple Steps to Ace Your Startup Market Research</title>
        <meta name="description" content="Learn 7 actionable steps for conducting market research as a startup." />
      </Head>

      <Navbar />

      {/* Blog Hero Section */}
      <section className="blog-details-section">
        <div className="blog-hero">
          <div className="blog-top-nav">
            <div className="container">
              <div className="blog-upper d-flex justify-content-between">
                <Link href="/resources">
                  <span>Resources</span> <span>/</span> Business Plan & Pitch Deck
                </Link>
                <div className="blog-upper-right d-flex gap-3">
                  <p className="published"><span>Published on</span> October 2, 2023</p>
                  <p className="read"><span>Read time</span> 6 min</p>
                </div>
              </div>

              <div className="blog-head">
                <h1>7 Simple Steps to Ace Your Startup Market Research</h1>
                <div className="blog-share d-flex align-items-center gap-2">
                  <p>Follow Us:</p>
                  <ul className="d-flex gap-2 list-unstyled">
                    <li><Link href="https://facebook.com"><i className="fa-brands fa-facebook-f" /></Link></li>
                    <li><Link href="https://linkedin.com"><i className="fa-brands fa-linkedin-in" /></Link></li>
                    <li><Link href="https://twitter.com"><i className="fa-brands fa-x-twitter" /></Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Banner */}
        <div className="blog-banner position-relative">
          <Image src={blogBanner} alt="Startup Market Research Banner" layout="responsive" />
          <Link href="#dt" className="scroll-icon">
            <Image src={whiteOverlay} alt="Scroll Overlay" />
            <div className="banner-icon">
              <Image src={bannerIcon} alt="Scroll Icon" />
            </div>
          </Link>
        </div>

        {/* Blog Details + Sidebar */}
        <div className="blog-dtail-list" id="dt">
          <div className="container d-flex flex-wrap gap-5">
            {/* Sidebar */}
            <aside className="details-sidebar col-lg-3">
              <div className="details-side">
                <Link href="/blog" className="go-back main-btn d-flex align-items-center gap-2">
                  <Image src={goBackIcon} alt="Go Back Icon" width={20} height={20} />
                  Go Back
                </Link>

                <hr />

                <div className="table-of-content">
                  <p>Table of contents:</p>
                  <ul>
                    {[
                      'Define the Problem',
                      'Brainstorm Solutions',
                      'Identify Direct Competitors',
                      'Identify Indirect Competitors',
                      'Define a Competitive Price',
                      'Size Your Market Opportunity',
                      'Identifying Market Trends',
                      'Outro'
                    ].map((step, i) => (
                      <li key={i}>
                        <a href={`#step${i + 1}`}>Step {i + 1}: {step}</a>
                      </li>
                    ))}
                  </ul>
                </div>

                <hr />

                <div className="share-article">
                  <p>Share this article:</p>
                  <ul className="d-flex gap-2 list-unstyled">
                    <li><Link href="#"><i className="fa-brands fa-facebook-f" /></Link></li>
                    <li><Link href="#"><i className="fa-brands fa-linkedin-in" /></Link></li>
                    <li><Link href="#"><i className="fa-brands fa-x-twitter" /></Link></li>
                  </ul>
                </div>
              </div>
            </aside>

            {/* Main Blog Content */}
            <article className="blog-detail-content col-lg-8">
              <h2>
                You've heard it before: 90% of startups vanish, often victims of inadequate research.
                With these 7 steps and a handful of free tools, you'll 10x your chances of success.
              </h2>

              <Image src={blogDetails1} alt="Startup research guide" layout="responsive" />

              <div className="step-content" id="step1">
                <h3>Step 1: Define the Problem</h3>
                <p>Every empire's construction begins with understanding its foundation...</p>
                <p><strong>Approach:</strong> In this step, your task is to crystallize the problem...</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Optional Table Section */}
      <section className="pt-0">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First</th>
                    <th>Last</th>
                    <th>Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>1</td><td>Mark</td><td>Otto</td><td>@mdo</td></tr>
                  <tr><td>2</td><td>Jacob</td><td>Thornton</td><td>@fat</td></tr>
                  <tr><td>3</td><td>Larry</td><td>Bird</td><td>@twitter</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
