import Head from 'next/head'
import { NextSeo } from 'next-seo'
import DefaultLayout from 'layouts/default-layout'
import Container from 'components/container'
import PageHeader from 'components/page-header'
import ColorBar from 'components/color-bar'
import { Box } from '@chakra-ui/react'
import PostsList from 'components/posts/posts-list'

interface Props {
  data: {
    posts: any[]
  }
}

const Posts = ({ data }: Props) => {
  const posts = [
    {
      title: "First Post",
      subtitle: "Learning algorithms is hard, but it doesnt have to be. Let's dive into how you can tackle them like a pro.",
      published_at: "2021-05-21"
    },
    {
      title: "First Post",
      subtitle: "Learning algorithms is hard, but it doesnt have to be. Let's dive into how you can tackle them like a pro.",
      published_at: "2021-05-21"
    },
    {
      title: "First Post",
      subtitle: "Learning algorithms is hard, but it doesnt have to be. Let's dive into how you can tackle them like a pro.",
      published_at: "2021-05-21"
    },
    {
      title: "First Post",
      subtitle: "Learning algorithms is hard, but it doesnt have to be. Let's dive into how you can tackle them like a pro.",
      published_at: "2021-05-21"
    },
    {
      title: "First Post",
      subtitle: "Learning algorithms is hard, but it doesnt have to be. Let's dive into how you can tackle them like a pro.",
      published_at: "2021-05-21"
    }
  ]

  return (
    <>
      <DefaultLayout>
        <Head>
          <title>🧠 Posts</title>
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
            <ColorBar height="2px" />
            <Box mt="6">
              <PostsList posts={posts} />
            </Box>
          </Container>
        </Box>
      </DefaultLayout>
    </>
  )
}

export default Posts