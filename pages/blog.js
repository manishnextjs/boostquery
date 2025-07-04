// pages/blog.js
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: 'Inside the Tactics of Leading Advertising Agencies',
      date: '30 January, 2024',
      slug: 'advertising-agency-tactics',
      image: '/images/blog1.webp',
    },
    {
      id: 2,
      title: 'SEO Strategies That Still Work in 2024',
      date: '02 February, 2024',
      slug: 'seo-strategies-2024',
      image: '/images/blog2.webp',
    },
    {
      id: 3,
      title: 'Boosting ROI Through Paid Media: What to Know',
      date: '05 February, 2024',
      slug: 'paid-media-roi',
      image: '/images/blog3.webp',
    },
  ];

  const categories = ['Finance', 'Marketing', 'Social Media', 'Strategy'];
  const tags = ['Business', 'Finance', 'SEO', 'Growth'];

  return (
    <>
      <Head>
        <title>Blog | Clicks Magnet</title>
        <meta name="description" content="Stay up-to-date with the latest digital marketing insights and strategies from Clicks Magnet." />
      </Head>

      <Navbar />

      <section className="blog-section blog-main">
        <div className="container">
          <div className="row">
            {/* Blog Posts */}
            <div className="col-lg-8 col-12">
              <div className="row">
                {blogPosts.map((post) => (
                  <div className="col-lg-6 col-12" key={post.id}>
                    <div className="blog-info">
                      <div className="blog-img">
                        <Link href={`/blog/${post.slug}`}>
                          <Image src={post.image} alt={post.title} width={400} height={250} />
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

            {/* Sidebar */}
            <div className="col-lg-4 col-12 side-blog">
              {/* Search Widget */}
              <div className="side-widget">
                <div className="widget-info">
                  <form onSubmit={(e) => e.preventDefault()}>
                    <input type="text" placeholder="Enter Keyword" />
                    <button className="main-btn" type="submit">
                      <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                  </form>
                </div>
              </div>

              {/* Categories Widget */}
              <div className="side-widget">
                <div className="widget-info">
                  <h4 className="widget-title">Categories</h4>
                  <div className="blog-categories">
                    <ul>
                      {categories.map((cat, idx) => (
                        <li key={idx}>
                          <Link href={`/category/${cat.toLowerCase().replace(/\s+/g, '-')}`}>{cat}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Recent Posts Widget */}
              <div className="side-widget">
                <div className="widget-info">
                  <h4 className="widget-title">Recent Posts</h4>
                  <div className="recent-post-sec">
                    {blogPosts.map((post) => (
                      <div className="recent-list" key={post.id}>
                        <div className="post-img">
                          <Link href={`/blog/${post.slug}`}>
                            <Image src={post.image} alt={post.title} width={80} height={60} />
                          </Link>
                        </div>
                        <div className="post-content">
                          <span className="post-date">
                            <i className="fa-regular fa-clock"></i> {post.date}
                          </span>
                          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Tags Widget */}
              <div className="side-widget">
                <div className="widget-info">
                  <h4 className="widget-title">Popular Tags</h4>
                  <div className="tag-list">
                    <ul>
                      {tags.map((tag, idx) => (
                        <li key={idx}>
                          <Link href={`/tag/${tag.toLowerCase()}`}>{tag}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
