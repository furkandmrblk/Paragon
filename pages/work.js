import Head from 'next/head';
import Link from 'next/link';
import { Navbar } from '../components/Navbar';
import { WorkDiv, WorkTitle } from '../components/WorkS';

const client = require('contentful').createClient({
  space: process.env.NEXT_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_CONTENTFUL_ACCESS_TOKEN,
});

export default function WorkPage({ posts }) {
  // console.log(posts);
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
      {posts.map((post) => (
        <WorkDiv key={post.sys.id}>
          <Link href={'/work/' + post.fields.slug}>
            <WorkTitle>
              {post.fields.title}{' '}
              <span style={{ color: `#6a6a6b32` }}>{post.fields.subtitle}</span>
              .
            </WorkTitle>
          </Link>
        </WorkDiv>
      ))}
    </>
  );
}

export async function getStaticProps() {
  let data = await client.getEntries({
    content_type: 'title',
  });

  return {
    props: {
      posts: data.items,
    },
    // revalidate: 60,
  };
}
