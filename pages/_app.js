// pages/_app.js

import '../styles/style.css';
// import 'bootstrap/dist/css/bootstrap.min.css'; // if using Bootstrap
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../styles/style.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



// import '../styles/bootstrap-custom.scss';
// import '@/styles/globals.css'; // or your own global CSS
import '../styles/globals.scss'; // or your correct path




// import '../styles/globals.css'


import { Montserrat, Instrument_Sans } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-montserrat',
});

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-instrument-sans',
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${montserrat.variable} ${instrumentSans.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}
