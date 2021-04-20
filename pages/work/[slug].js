import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import Head from 'next/head';
import { useEffect } from 'react';
import { Error } from '../../components/404';
import { Navbar } from '../../components/Navbar';
import {
  ProjectBottomContainer,
  ProjectBottomDiv,
  ProjectContainer,
  ProjectImage,
  ProjectImageBGRight,
  ProjectImageBGLeft,
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
        <ProjectMainText>
          {data.mainText
            .replace(/\\n/g, ' ')
            .split('\n')
            .map((t, i) =>
              i > 0 ? (
                <span key={i}>
                  <br />
                  {t}
                </span>
              ) : (
                t
              )
            )}
        </ProjectMainText>
        <ProjectBottomContainer>
          {data.textOne && (
            <>
              <ProjectBottomDiv>
                <ProjectText>
                  {data.textOne
                    .replace(/\\n/g, ' ')
                    .split('\n')
                    .map((t, i) =>
                      i > 0 ? (
                        <span key={i}>
                          <br />
                          {t}
                        </span>
                      ) : (
                        t
                      )
                    )}
                </ProjectText>
                <ProjectImage
                  src={'https:' + data.imageOne.fields.file.url}
                  alt="ImageOne"
                />
                <ProjectImageBGRight />
              </ProjectBottomDiv>{' '}
            </>
          )}

          {data.textTwo && (
            <>
              <ProjectBottomDiv>
                <ProjectImage
                  src={'https:' + data.imageTwo.fields.file.url}
                  alt="ImageTwo"
                />
                <ProjectText>
                  {data.textTwo
                    .replace(/\\n/g, ' ')
                    .split('\n')
                    .map((t, i) =>
                      i > 0 ? (
                        <span key={i}>
                          <br />
                          {t}
                        </span>
                      ) : (
                        t
                      )
                    )}
                </ProjectText>
                <ProjectImageBGLeft />
              </ProjectBottomDiv>{' '}
            </>
          )}

          {data.textThree && (
            <>
              <ProjectBottomDiv>
                <ProjectText>
                  {data.textThree
                    .replace(/\\n/g, ' ')
                    .split('\n')
                    .map((t, i) =>
                      i > 0 ? (
                        <span key={i}>
                          <br />
                          {t}
                        </span>
                      ) : (
                        t
                      )
                    )}
                </ProjectText>
                <ProjectImage
                  src={'https:' + data.imageThree.fields.file.url}
                  alt="ImageThree"
                />
                <ProjectImageBGRight />
              </ProjectBottomDiv>{' '}
            </>
          )}
        </ProjectBottomContainer>
      </ProjectContainer>
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
    // revalidate: 10,
  };
}
