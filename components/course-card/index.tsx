import React from 'react'
import {
  Box,
  Heading,
  OrderedList,
  ListItem,
  Link,
  Text
} from '@chakra-ui/react'

interface Props {
  heading: string,
  description: string,
  list: {
    title: string,
    slug: string
  }[]
}

const CourseCard = ({ heading, description, list }: Props) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      width="100%"
      overflow="hidden"
      p="8"
      borderColor="gray.300"
    >
      <Heading as="h2" size="lg" mb="7">{heading}</Heading>
      <Text opacity={0.7} mb="7" fontSize="lg">{description}</Text>

      <OrderedList spacing="3">
        {list.map((item, index) => (
          <ListItem
            key={index}
            fontSize="xl"
            fontWeight="500"
            color="blue.500"
          >
            <Link href={item.slug}>{item.title}</Link>
          </ListItem>
        ))}
      </OrderedList>
    </Box>
  )
}

export default CourseCard