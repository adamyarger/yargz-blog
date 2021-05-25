import Head from 'next/head'
import { NextSeo } from 'next-seo'
import DefaultLayout from 'layouts/default-layout'
import Container from 'components/container'
import PageHeader from 'components/page-header'
import ColorBar from 'components/color-bar'
import { Box } from '@chakra-ui/react'
import PostsList from 'components/posts/posts-list'
import { PostMetadata, PostUtil } from 'utils/md-utils'

interface Props {
  posts: PostMetadata[]
}

export default function Posts({ posts }: Props) {
  return (
    <>
      <DefaultLayout>
        <Head>
          <title>Posts</title>
        </Head>

        <NextSeo
          title="Posts"
          description="Posts about software, blockchain, self-learning"
        />

        <Box
          as="section"
          pt={{ base: "4rem", md: "6rem" }}
          pb={{ base: "0", md: "5rem" }}
        >
          <Container maxW="760px">
            <PageHeader title="Posts" subtitle="Me typing into the void" />
            <ColorBar />
            <Box mt="6">
              <PostsList posts={posts} />
            </Box>
          </Container>
        </Box>
      </DefaultLayout>
    </>
  )
}

export async function getStaticProps({ params }) {
  const postData = PostUtil.getAllPostData()
  return {
    props: {
      posts: postData
    }
  }
}