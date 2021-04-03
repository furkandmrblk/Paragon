import Head from 'next/head';
import { Navbar } from '../components/Navbar';
import { Contact } from '../components/Contact';
import { useEffect } from 'react';

export default function ContactUs() {
  return (
    <>
      <Head>
        <title>Paragon Design Studio | Contact Us</title>
      </Head>
      <Navbar />
      <Contact />
    </>
  );
}
