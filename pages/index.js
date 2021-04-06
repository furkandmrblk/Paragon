import Head from 'next/head';

import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';

const client = require('contentful').createClient({
  space: process.env.NEXT_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_CONTENTFUL_ACCESS_TOKEN,
});

export default function Home({ posts }) {
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
        <title>Paragon Design Studio | Homepage</title>
      </Head>
      <Navbar props={posts} />
      <Hero />
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
    // revalidate: 10,
  };
}
