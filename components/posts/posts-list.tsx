import { Link, Box, Text, Heading } from '@chakra-ui/react'
import Posts from 'pages/posts'

interface Props {
  posts: {
    title: string,
    subtitle: string,
    published_at: string
  }[]
}

export default function PostsList({ posts }: Props) {
  if (!posts || Posts.length === 0) return null

  return (
    <>
      {posts.map((post, index) => {
        const date = new Date(post.published_at).toLocaleDateString('en-us', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })

        return (
          <Box py="6" key={index}>
            <Link href="#" pb="4">
              <Heading as="h3" size="xl">{post.title}</Heading>
            </Link>

            <Text color="gray.500" pb="2">{post.subtitle}</Text>

            <Text color="gray.400">{date}</Text>
          </Box>
        )
      })}
    </>
  )
}