// components/TabSection.js
import { useState } from 'react';
import Image from 'next/image';

const tabs = [
  {
    id: 'nav-home',
    label: 'Discover',
    title: 'Discovery & Research',
    desc:
      'We begin with in-depth research to understand your business, audience and goals. This helps us create a clear vision and strategy for your website that aligns with your brand identity and supports long-term growth.',
    img: '/images/discovery research.svg',
  },
  {
    id: 'nav-profile',
    label: 'Design',
    title: 'Wireframing & UI/UX Design',
    desc:
      'Our team crafts intuitive wireframes and engaging UI/UX designs...',
    img: '/images/wireframe.svg',
  },
  {
    id: 'nav-contact',
    label: 'Structure',
    title: 'Content Integration',
    desc:
      'We integrate your content strategically, prioritizing clarity...',
    img: '/images/Content.svg',
  },
  {
    id: 'nav-build',
    label: 'Build',
    title: 'Development Phase',
    desc:
      "Using the latest tech stacks, we write clean, scalable and responsive code...",
    img: '/images/Development.svg',
  },
  {
    id: 'nav-audit',
    label: 'Audit',
    title: 'Testing & QA',
    desc:
      'We conduct thorough quality assurance including mobile responsiveness...',
    img: '/images/tester.svg',
  },
  {
    id: 'nav-Launch',
    label: 'Launch',
    title: 'Launch & Optimization',
    desc:
      'Once approved, we smoothly deploy your website and initiate post-launch monitoring...',
    img: '/images/Launch.svg',
  },
];

export default function TabSection() {
  const [activeTab, setActiveTab] = useState('nav-home');

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="card p-3 border-0">
            <nav>
              <div className="nav nav-tabs mb-3 justify-content-center" role="tablist">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    className={`nav-link ${activeTab === tab.id ? 'active' : ''}`}
                    onClick={() => setActiveTab(tab.id)}
                    type="button"
                    role="tab"
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </nav>

            <div className="tab-content p-3 border bg-light shadow">
              {tabs.map((tab) => (
                <div
                  key={tab.id}
                  className={`tab-pane fade ${activeTab === tab.id ? 'show active' : ''}`}
                >
                  <div className="row align-items-center">
                    <div className="col-6">
                      <div className="tab-text">
                        <h3 className="_title">{tab.title}</h3>
                        <p>{tab.desc}</p>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="tab-box-img">
                        <Image src={tab.img} alt={tab.title} width={500} height={400} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
