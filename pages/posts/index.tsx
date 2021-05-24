import DefaultLayout from 'layouts/default-layout'
import Head from 'next/head'
import Container from 'components/container'
import {
  Box,
  Heading
} from '@chakra-ui/react'

interface Props {
  data: {
    posts: any[]
  }
}

const Posts = ({ data }: Props) => {
  return (
    <>
      <DefaultLayout>
        <Head>
          <title>🧠 Posts</title>
        </Head>

        <Box
          as="section"
          pt={{ base: "6rem", md: "8rem" }}
          pb={{ base: "0", md: "5rem" }}
        >
          <Container maxW="760px">
            <Heading as="h2" size="lg" mb="7">Posts</Heading>
            Dude
          </Container>
        </Box>
      </DefaultLayout>
    </>
  )
}

export default Posts