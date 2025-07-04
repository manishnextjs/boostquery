// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Button } from "@/components/ui/button";
// import { Mail, Send, Building2, PhoneCall } from "lucide-react";

// export default function ContactPage() {
//   return (
//     <div className="min-h-screen bg-white text-black">
//       {/* Banner Section */}
//       <section className="bg-[#f7f8fc] py-16">
//         <div className="max-w-5xl mx-auto text-center px-4">
//           <h1 className="text-4xl md:text-5xl font-bold mb-4">
//             Don’t hesitate to <br /> <span className="text-primary">reach out</span>
//           </h1>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             Amet tempor ornare a nunc mauris. Arcu dui ut ultrices nunc mattis vitae. Aliquam
//             pulvinar libero iaculis iaculis nullam urna.
//           </p>
//         </div>
//       </section>

//       {/* Contact Form Section */}
//       <section className="py-12 bg-white">
//         <div className="max-w-3xl mx-auto px-4">
//           <form className="space-y-6 bg-[#f7f8fc] p-6 rounded-xl shadow">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Full name *
//               </label>
//               <Input placeholder="Your name" />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Email address *
//               </label>
//               <Input type="email" placeholder="Your email" />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Message *
//               </label>
//               <Textarea placeholder="Write your message..." rows={6} />
//             </div>
//             <Button className="w-full flex gap-2 items-center justify-center">
//               Send Message <Send className="w-4 h-4" />
//             </Button>
//           </form>
//         </div>
//       </section>

//       {/* Contact Info Section */}
//       <section className="py-16 bg-[#f7f8fc]">
//         <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
//           <div className="flex flex-col items-center text-center space-y-4">
//             <div className="bg-primary/10 p-4 rounded-full">
//               <Building2 className="w-8 h-8 text-primary" />
//             </div>
//             <h3 className="text-xl font-semibold">Address</h3>
//             <p className="text-gray-600">4140 Parker Rd. Allen, New Mexico 31134</p>
//           </div>
//           <div className="flex flex-col items-center text-center space-y-4">
//             <div className="bg-primary/10 p-4 rounded-full">
//               <Mail className="w-8 h-8 text-primary" />
//             </div>
//             <h3 className="text-xl font-semibold">Email</h3>
//             <p className="text-gray-600">
//               <a href="mailto:sayhello@fluxi.com">sayhello@fluxi.com</a>
//             </p>
//           </div>
//           <div className="flex flex-col items-center text-center space-y-4">
//             <div className="bg-primary/10 p-4 rounded-full">
//               <PhoneCall className="w-8 h-8 text-primary" />
//             </div>
//             <h3 className="text-xl font-semibold">Phone</h3>
//             <p className="text-gray-600">
//               <a href="tel:+2395550108">+(239) 555-0108</a>
//             </p>
//           </div>
//         </div>
//       </section>
//     </div>

    
//   );
// }


import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Send, Building2, PhoneCall } from "lucide-react";

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Seo from '../components/seo';

export default function ContactPage() {
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

      {/* Banner Section */}
      <section className="contact-banner">
  <div className="container">
    <div className="banner-content">
      <h1>Don&rsquo;t hesitate to <br /> <span>reach out</span></h1>
      <p>
        Amet tempor ornare a nunc mauris. Arcu dui ut ultrices nunc mattis vitae.
        Aliquam pulvinar libero iaculis iaculis nullam urna.
      </p>
    </div>
  </div>
</section>


      {/* Contact Form */}
      <section className="contact-form-sec">
        <div className="container">
          <div className="contact-form">
            <form>
              <div className="form-info">
                <label>Full name *</label>
                <input type="text" placeholder="Your name" />
                {/* Add your SVG here */}
              </div>
              <div className="form-info">
                <label>Email address *</label>
                <input type="email" placeholder="Your email" />
                {/* Add your SVG here */}
              </div>
              <div className="form-info textarea-field">
                <label>Textarea *</label>
                <textarea rows="10" placeholder="Textarea"></textarea>
                {/* Add your SVG here */}
              </div>
              <div className="form-button">
                <button className="main-btn">
                  Send Message
                  <svg aria-hidden="true" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M444.52 3.52L28.74 195.42c-47.97 22.39-31.98 92.75 19.19 92.75h175.91v175.91c0 51.17 70.36 67.17 92.75 19.19l191.9-415.78c15.99-38.39-25.59-79.97-63.97-63.97z" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="contact-info">
        <div className="container">
          <div className="row">
            {/* Address */}
            <div className="col-lg-4 col-md-4 col-12">
              <div className="contact-details">
                <svg width="80" height="80" viewBox="0 0 80 80"><rect width="80" height="80" rx="40" fill="#614CE1" /><rect width="80" height="80" rx="40" fill="white" fillOpacity="0.8" /><path d="..." fill="#614CE1" /></svg>
                <h3>Address</h3>
                <p>4140 Parker Rd. Allen, New Mexico 31134</p>
              </div>
            </div>

            {/* Email */}
            <div className="col-lg-4 col-md-4 col-12">
              <div className="contact-details">
                <svg width="80" height="80" viewBox="0 0 80 80"><rect width="80" height="80" rx="40" fill="#614CE1" /><rect width="80" height="80" rx="40" fill="white" fillOpacity="0.8" /><path d="..." fill="#614CE1" /></svg>
                <h3>Email</h3>
                <p><a href="mailto:sayhello@fluxi.com">sayhello@fluxi.com</a></p>
              </div>
            </div>

            {/* Phone */}
            <div className="col-lg-4 col-md-4 col-12">
              <div className="contact-details">
                <svg width="80" height="80" viewBox="0 0 80 80"><rect width="80" height="80" rx="40" fill="#614CE1" /><rect width="80" height="80" rx="40" fill="white" fillOpacity="0.8" /><path d="..." fill="#614CE1" /></svg>
                <h3>Phone</h3>
                <p><a href="tel:+2395550108">+(239) 555-0108</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
