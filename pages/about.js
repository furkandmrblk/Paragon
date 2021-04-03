import Head from 'next/head';
import { Navbar } from '../components/Navbar';
import { About } from '../components/About';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>Paragon Design Studio | About Us</title>
      </Head>
      <Navbar />
      <About />
    </>
  );
}
