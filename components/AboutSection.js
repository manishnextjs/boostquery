import Image from 'next/image';
import Link from 'next/link';

export default function AboutSection() {
  return (
    <section className="abt-home">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-12">
            <div className="home-abt-info">
              <div className="head-sec">
                <h2>About BoostQuery</h2>
              </div>
              <div className="home-abt-para">
                <p>
                  At Boost Query, we&rsquo;re more than just a digital marketing agency in the USA.
                  We&rsquo;re your growth partner. We build customer-first strategies that work across every touchpoint —
                  search, design, content & social.
                </p>

                <ul>
                  <li>100+ brands served</li>
                  <li>Transparent pricing & quick support</li>
                  <li>Trusted for real results, not just traffic</li>
                </ul>

                <p>
                  From advanced SEO to creative web design, we offer results-focused digital marketing services in the USA.
                  Whether you&rsquo;re evaluating our proven track record, browsing our diverse portfolio or seeking clear, results-backed pricing,
                  Boost Query is committed to delivering measurable outcomes, unmatched support and long-term digital success.
                </p>
              </div>
              <Link href="/about" className="main-btn">Explore</Link>
            </div>
          </div>

          <div className="col-lg-5 col-12">
            <div className="home-abt-img">
              <Image
                src="/images/home-abt.svg"
                alt="About BoostQuery"
                width={500}
                height={500}
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
