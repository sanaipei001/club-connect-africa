import '../styles/globals.css';
import { Inter } from 'next/font/google';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Initialize Inter font
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter', // Optional: Define a CSS variable for the font
});

export default function MyApp({ Component, pageProps }) {
  return (
    <div className={inter.className}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
