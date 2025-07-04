import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const WhyChooseUs = () => {
  const choices = [
    {
      icon: '/images/choice1.svg',
      title: 'Impact-Driven Strategies',
      desc: 'We prioritize results that matter—from higher conversions to improved ROI. Every digital move we make is built around measurable goals that push your brand forward.'
    },
    {
      icon: '/images/choice2.svg',
      title: 'Tailored Digital Solutions',
      desc: 'Forget cookie-cutter tactics. We create custom digital strategies that align with your brand&rsquo;s personality, audience preferences and specific business objectives.'
    },
    {
      icon: '/images/choice3.svg',
      title: 'Support by Dedicated Experts',
      desc: 'Our experienced team combines innovation, analytics and industry knowledge to craft and execute digital campaigns that deliver real impact.'
    },
    {
      icon: '/images/choice4.svg',
      title: 'Transparent Reporting & Insights',
      desc: 'You deserve to know what&rsquo;s happening behind the scenes. We provide regular performance updates, competitor insights and open communication so you&rsquo;re never left guessing.'
    }
  ];

  return (
    <section className="home-choice">
      <div className="container">
        <div className="head-sec">
          <div className="left-head">
            <p>Choice</p>
            <h2>
              Why Boost Query is the Smart <br />
              Choice for Your Digital Growth
            </h2>
          </div>
          <div className="right-head">
            <p>
              At Boost Query, we go beyond delivering services. We build digital success stories.
              With customer-centric strategies and measurable outcomes, we focus on growing your brand the smart way.
            </p>
            <Link href="#" className="main-btn">View More</Link>
          </div>
        </div>

        <div className="choice-info">
          {choices.map((card, index) => (
            <div className="choice-cards" key={index}>
              <Link href="#">
                <div className="choice-card-inner">
                  <Image
                    src={card.icon}
                    alt={card.title}
                    width={64}
                    height={64}
                  />
                  <div className="choice-content">
                    <div className="choice-head">
                      <h4>{card.title} <i className="fa-solid fa-arrow-right"></i></h4>
                    </div>
                    <p>{card.desc}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
