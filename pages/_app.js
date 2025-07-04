// pages/_app.js

// Global & framework styles
import '../styles/style.css';
import '../styles/globals.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Swiper styles (for sliders/carousels)
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Google Fonts (Next.js way)
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

// App wrapper
export default function App({ Component, pageProps }) {
  return (
    <main className={`${montserrat.variable} ${instrumentSans.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}
