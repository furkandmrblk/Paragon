import Head from 'next/head';

import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';

export default function Home() {
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
        <title>Paragon</title>
      </Head>
      <Navbar />
      <Hero />
    </>
  );
}
