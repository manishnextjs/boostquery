import Image from 'next/image';

export default function BlogSection() {
  const posts = [
    {
      image: '/images/blog1.webp',
      date: '30 January, 2024',
      title: 'Inside the Tactics of Leading Advertising Agencies',
    },
    {
      image: '/images/blog2.webp',
      date: '30 January, 2024',
      title: 'Inside the Tactics of Leading Advertising Agencies',
    },
    {
      image: '/images/blog3.webp',
      date: '30 January, 2024',
      title: 'Inside the Tactics of Leading Advertising Agencies',
    },
  ];

  const categories = ['Finance', 'Marketing', 'Social Media', 'Strategy'];
  const recentPosts = [...posts];
  const tags = ['Business', 'Finance'];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Main Posts */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post, idx) => (
              <div key={idx}>
                <div className="mb-4">
                  <a href="#">
                    <Image
                      src={post.image}
                      alt="Blog Image"
                      width={600}
                      height={400}
                      className="rounded-xl w-full h-auto"
                    />
                  </a>
                </div>
                <div>
                  <span className="text-sm text-gray-500 block mb-2">{post.date}</span>
                  <h4 className="text-lg font-semibold text-gray-600 mb-2">
                    <a href="#">{post.title}</a>
                  </h4>
                  <a href="#" className="text-[#614CE1] font-semibold hover:underline">
                    Read More
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3 space-y-8">
            {/* Search */}
            <div className="bg-gray-100 rounded-xl p-4">
              <form className="flex">
                <input
                  type="text"
                  placeholder="Enter Keyword"
                  className="w-full px-4 py-2 rounded-l-md focus:outline-none text-gray-700 placeholder-gray-500 bg-white"
                />
                <button
                  type="submit"
                  className="bg-[#614CE1] text-white px-4 py-2 rounded-r-md"
                >
                  <i className="fas fa-search"></i>
                </button>
              </form>
            </div>

            {/* Categories */}
            <div className="bg-gray-100 rounded-xl p-4">
              <h4 className="text-lg font-semibold mb-4 text-black">Categories</h4>
              <ul className="space-y-2">
                {categories.map((cat, idx) => (
                  <li key={idx}>
                    <a
                      href="#"
                      className="block bg-white text-gray-700 rounded-md py-2 px-4 hover:bg-gray-50"
                    >
                      {cat}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recent Posts */}
            <div className="bg-gray-100 rounded-xl p-4">
              <h4 className="text-lg font-semibold mb-4 text-black">Recent Posts</h4>
              <div className="space-y-4">
                {recentPosts.map((post, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-16 h-16 overflow-hidden rounded-md">
                      <Image
                        src={post.image}
                        alt="Recent Post"
                        width={64}
                        height={64}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div>
                      <span className="text-sm text-gray-500 block mb-1">
                        <i className="far fa-clock mr-1"></i>{post.date}
                      </span>
                      <a href="#" className="text-sm font-medium text-gray-600">
                        {post.title}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="bg-gray-100 rounded-xl p-4">
              <h4 className="text-lg font-semibold mb-4 text-black">Popular Tags</h4>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="bg-white text-gray-700 px-3 py-1 rounded-full text-sm border hover:bg-gray-50"
                  >
                    {tag}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
