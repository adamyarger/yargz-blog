import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import InfoLayout from 'layouts/info-layout'
import { components } from 'providers/mdx-provider'
import { GetStaticPaths, GetStaticProps } from 'next'
import { PostData, PostUtil } from 'utils/md_utils'
import { Heading, Icon, Box } from '@chakra-ui/react'
import { RiBuilding4Line } from 'react-icons/ri'

export default function TestPage({ source, data }) {
  const courses = {
    FOUNDATIONS: {
      title: 'Foundations',
      icon: RiBuilding4Line
    }
  }

  return (
    <InfoLayout>
      <Box textAlign="center">
        <Icon as={courses[data.course].icon} boxSize="12" />
        <Heading as="h1" fontSize="3xl" mb="4" mt="4" fontWeight="300">
          {courses[data.course].title}
        </Heading>
        <Heading as="h2" fontSize="3xl" mb="14" color="blue.500">{data.title}</Heading>
      </Box>
      <MDXRemote {...source} components={components} />
    </InfoLayout>
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