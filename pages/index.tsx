import Head from 'next/head'
import { NextSeo } from 'next-seo'
import {
  Box,
  Text,
  Heading
} from '@chakra-ui/react';
import Container from 'components/container'
import DefaultLayout from 'layouts/default-layout'
import { PostMetadata, PostUtil } from 'utils/md-utils'
import PostsList from 'components/posts/posts-list'
import ColorBar from 'components/color-bar'

interface Props {
  posts: PostMetadata[]
}

export default function Home({ posts }: Props) {
  return (
    <>
      <DefaultLayout>
        <Head>
          <title>yargz</title>
        </Head>

        <NextSeo
          title="yargz"
          description="Adam Yarger's personal website, software, blockchain, and good times."
        />

        <Box
          as="section"
          pt={{ base: "6rem", md: "8rem" }}
          pb={{ base: "0", md: "5rem" }}
        >
          <Container maxW="760px">
            <Box>
              <Text fontSize="6rem">
                👋 Hello ,
              </Text>
              <Text
                mx="auto"
                opacity={0.7}
                fontSize={{ base: "xl", lg: "2xl" }}
                mt="6"
              >
                I'm Adam. I'm a software tinkerer who loves good design. I'm currently cutting my teeth with blockchain and sharing with the world what I've learned.
              </Text>

              <Text
                mx="auto"
                opacity={0.7}
                fontSize={{ base: "xl", lg: "2xl" }}
                mt="6"
              >
                In the past I was an early engineer at Total Expert, a CRM for the finance world. I'm an autodidact, which is just a fancy way of saying I taught myself how to code.

                Everything I've learned in software has been from free resources on the internet, which is why I want to help pitch in.
              </Text>
            </Box>
          </Container>
        </Box>

        <Box
          as="section"
          pt={{ base: "10", md: "12" }}
          pb={{ base: "0", md: "5rem" }}
          mb={20}
        >
          <Container maxW="760px">
            <Heading as="h2" size="2xl">Recent Posts</Heading>
            <ColorBar my="6" />
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