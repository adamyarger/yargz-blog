import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import DefaultLayout from 'layouts/default-layout'
import { components } from 'providers/mdx-provider'
import { GetStaticPaths } from 'next'
import { PostUtil } from 'utils/md_utils'
import { Heading, Box } from '@chakra-ui/react'
import Container from 'components/container'

export default function Post({ source, data }) {
  return (
    <DefaultLayout>
      <Container maxW="760px">
        <Box mt="5.5rem">
          <Heading as="h1" fontSize="4xl" mb="14">{data.title}</Heading>
        </Box>
        <MDXRemote {...source} components={components} />
      </Container>
    </DefaultLayout>
  )
}

export async function getStaticProps({ params }) {
  const postData = PostUtil.getPostData(params.id as string)
  const mdxSource = await serialize(postData.mdString)
  return {
    props: {
      source: mdxSource,
      data: postData
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = PostUtil.getAllPostIds()
  return {
    paths,
    fallback: false,
  }
}