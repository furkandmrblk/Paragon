import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import Head from 'next/head';
import { Error } from '../../components/404';
import { Navbar } from '../../components/Navbar';
import {
  ProjectBottomDiv,
  ProjectContainer,
  ProjectImage,
  ProjectMainImage,
  ProjectMainText,
  ProjectText,
  ProjectTitle,
} from '../../components/ProjectS';

const client = require('contentful').createClient({
  space: process.env.NEXT_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_CONTENTFUL_ACCESS_TOKEN,
});

export default function Post({ posts, post }) {
  if (!post) return <Error />;
  const data = post.fields;

  return (
    <>
      <Head>
        <title>Paragon Design Studio | {data.title}</title>
      </Head>
      <Navbar props={posts} />
      <ProjectContainer>
        <ProjectTitle>{data.title}</ProjectTitle>
        <ProjectMainImage
          src={'https:' + data.mainImage.fields.file.url}
          alt="MainImage"
        />
        <ProjectMainText>{data.mainText}</ProjectMainText>

        {data.textOne && (
          <>
            <ProjectBottomDiv>
              <ProjectText>{data.textOne}</ProjectText>
              <ProjectImage
                src={'https:' + data.imageOne.fields.file.url}
                alt="ImageOne"
              />
            </ProjectBottomDiv>{' '}
          </>
        )}

        {data.textTwo && (
          <>
            <ProjectBottomDiv>
              <ProjectText>{data.textTwo}</ProjectText>
              <ProjectImage
                src={'https:' + data.imageTwo.fields.file.url}
                alt="ImageTwo"
              />
            </ProjectBottomDiv>{' '}
          </>
        )}

        {data.textThree && (
          <>
            <ProjectBottomDiv>
              <ProjectText>{data.textThree}</ProjectText>
              <ProjectImage
                src={'https:' + data.imageThree.fields.file.url}
                alt="ImageThree"
              />
            </ProjectBottomDiv>{' '}
          </>
        )}
      </ProjectContainer>
      {/* <ProjectDiv>
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
          })} */}

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
  let alldata = await client.getEntries({
    content_type: 'title',
  });

  return {
    props: {
      post: data.items[0],
      posts: alldata.items,
    },
    revalidate: 10,
  };
}
