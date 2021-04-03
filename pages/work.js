export default function WorkPage() {
  return <div>workpage</div>;
}

// import Head from 'next/head';
// import Link from 'next/link';
// import { Navbar } from '../components/Navbar';
// import { WorkDiv, WorkTitle } from '../components/WorkS';

// const client = require('contentful').createClient({
//   space: process.env.NEXT_CONTENTFUL_SPACE_ID,
//   accessToken: process.env.NEXT_CONTENTFUL_ACCESS_TOKEN,
// });

// export default function WorkPage({ posts }) {
//   // console.log(posts);
//   return (
//     <>
//       <Head>
//         <title>Paragon Design Studio | Our Work</title>
//       </Head>
//       <Navbar />
//       {posts.map((post) => (
//         <WorkDiv key={post.sys.id}>
//           <Link href={'/work/' + post.fields.slug}>
//             <WorkTitle>
//               {post.fields.title}{' '}
//               <span style={{ color: `#6a6a6b32` }}>{post.fields.subtitle}</span>
//               .
//             </WorkTitle>
//           </Link>
//         </WorkDiv>
//       ))}
//     </>
//   );
// }

// export async function getStaticProps() {
//   let data = await client.getEntries({
//     content_type: 'title',
//   });

//   return {
//     props: {
//       posts: data.items,
//     },
//     // revalidate: 60,
//   };
// }
