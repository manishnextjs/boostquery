// pages/blog.js
'use client';

import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';

export default function Blog() {
  const blogPosts = [
    {
      img: '/images/blog1.webp',
      date: '30 January, 2024',
      title: 'Inside the Tactics of Leading Advertising Agencies',
      slug: 'advertising-agency-tactics',
    },
    {
      img: '/images/blog2.webp',
      date: '01 February, 2024',
      title: 'How SEO Drives Real Business Growth in 2024',
      slug: 'seo-business-growth',
    },
    {
      img: '/images/blog3.webp',
      date: '05 February, 2024',
      title: 'Web Design Trends That Convert Visitors into Clients',
      slug: 'web-design-trends-2024',
    },
  ];

  return (
    <>
      <Head>
        <title>Blog - Boost Query</title>
        <meta name="description" content="Read the latest articles from Boost Query’s digital experts." />
      </Head>

      <section className="blog-section">
        <div className="container">
          <div className="head-sec">
            <p>Recent Articles</p>
            <h2>Latest from our blog</h2>
          </div>

          <div className="row">
            {blogPosts.map((post, index) => (
              <div className="col-lg-4 col-md-6 col-12" key={index}>
                <div className="blog-info">
                  <div className="blog-img">
                    <Link href={`/blog/${post.slug}`}>
                      <Image
                        src={post.img}
                        alt={`Thumbnail for ${post.title}`}
                        width={400}
                        height={250}
                        className="img-fluid"
                      />
                    </Link>
                  </div>
                  <div className="blog-content">
                    <div className="blog-bottom">
                      <span className="blog-date">{post.date}</span>
                    </div>
                    <h4>
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h4>
                    <Link href={`/blog/${post.slug}`} className="other-btn">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
