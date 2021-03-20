import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import Head from 'next/head';
import { Error } from '../../components/404';
import { Navbar } from '../../components/Navbar';
import {
  ProjectDescription,
  ProjectDiv,
  ProjectImage,
  ProjectInnerDiv,
  ProjectTitle,
} from '../../components/ProjectS';

const client = require('contentful').createClient({
  space: process.env.NEXT_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_CONTENTFUL_ACCESS_TOKEN,
});

export default function Post({ post }) {
  if (!post) return <Error />;

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
      <ProjectDiv>
        <ProjectTitle>
          {post.fields.title}{' '}
          <span style={{ color: `#6a6a6b32` }}>{post.fields.subtitle}</span>.
        </ProjectTitle>
        <ProjectInnerDiv>
          {documentToReactComponents(post.fields.content, {
            renderNode: {
              [BLOCKS.EMBEDDED_ASSET]: (node) => (
                <ProjectImage
                  src={'https:' + node.data.target.fields.file.url}
                  width={node.data.target.fields.file.details.image.width}
                  height={node.data.target.fields.file.details.image.height}
                />
              ),
            },
          })}

          {/* <ProjectDescription>
            {documentToReactComponents(post.fields.content.content[0])}
          </ProjectDescription>
          {documentToReactComponents(post.fields.content.content[1], {
            renderNode: {
              [BLOCKS.EMBEDDED_ASSET]: (node) => (
                <ProjectImage
                  src={'https:' + node.data.target.fields.file.url}
                  width={node.data.target.fields.file.details.image.width}
                  height={node.data.target.fields.file.details.image.height}
                />
              ),
            },
          })} */}
        </ProjectInnerDiv>
      </ProjectDiv>
    </>
  );
}

export async function getStaticPaths() {
  let data = await client.getEntries({
    content_type: 'title',
  });

  return {
    paths: data.items.map((item) => ({
      params: { slug: item.fields.slug },
    })),
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  let data = await client.getEntries({
    content_type: 'title',
    'fields.slug': params.slug,
  });

  return {
    props: {
      post: data.items[0],
    },
    // revalidate: 60,
  };
}
