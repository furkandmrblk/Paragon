import Head from 'next/head';
import { Navbar } from '../components/Navbar';
import { About } from '../components/About';

export default function AboutPage() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <title>Paragon Design Studio | About Us</title>
      </Head>
      <Navbar />
      <About />
    </>
  );
}
