import { Link, Box, Text, Heading } from '@chakra-ui/react'
import Posts from 'pages/posts'
import { PostMetadata } from 'utils/md_utils'

interface Props {
  posts: PostMetadata[]
}

export default function PostsList({ posts }: Props) {
  if (!posts || Posts.length === 0) return null

  return (
    <>
      {posts.map((post) => {
        const date = new Date(post.published_at).toLocaleDateString('en-us', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })

        return (
          <Box py="6" key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <Heading as="h3" size="lg" pb="4">{post.title}</Heading>
            </Link>
            <Text color="gray.500" pb="4" fontSize="1.2rem">{post.subtitle}</Text>
            <Text color="gray.400">{date}</Text>
          </Box>
        )
      })}
    </>
  )
}