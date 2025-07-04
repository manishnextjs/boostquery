
import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HomeServices from '../components/homeServices';

import IndustrySlider from '../components/IndustrySlider';
import CtaSection from '../components/CtaSection';
import WhyChooseUs from '../components/WhyChooseUs';
import Seo from '../components/seo';
import dynamic from 'next/dynamic';
import Banner from '../components/Banner';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import Testimonials from '../components/Testimonials';
import AboutSection from '@/components/AboutSection';



export default function Home() {
  return (
    <>
      <Seo
        title="About Us"
        description="Learn more about Boosst Query, a full-service SEO and web development agency helping businesses scale online."
        image="/images/about-us-og.png"
        schemaType="WebPage"
        publishedTime="2024-07-01T10:00:00+05:30"
      />

      <Navbar />

     <Banner />

      <HomeServices />

      <WhyChooseUs />
  
     <AboutSection />

     <Testimonials />


     <IndustrySlider />

     <CtaSection />



      <Footer />
    </>
  );
}
