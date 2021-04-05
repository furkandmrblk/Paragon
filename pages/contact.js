import Head from 'next/head';
import { Navbar } from '../components/Navbar';
import { Contact } from '../components/Contact';

const client = require('contentful').createClient({
  space: process.env.NEXT_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_CONTENTFUL_ACCESS_TOKEN,
});

export default function ContactUs({ posts }) {
  return (
    <>
      <Head>
        <title>Paragon Design Studio | Contact Us</title>
      </Head>
      <Navbar props={posts} />
      <Contact />
    </>
  );
}

export async function getStaticProps() {
  const data = await client.getEntries({
    content_type: 'title',
  });

  return {
    props: {
      posts: data.items,
    },
  };
}
