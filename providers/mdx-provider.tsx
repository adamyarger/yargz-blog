import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import {
  Heading,
  Text,
  Link,
  UnorderedList,
  OrderedList,
  ListItem
} from '@chakra-ui/react'

export const components = {
  h1: (props) => (
    <Heading as="h1" fontSize="5xl" mb={3}>
      {props.children}
    </Heading>
  ),
  h2: (props) => (
    <Heading as="h2" fontSize="3xl" mb="1.71rem" mt="2.565rem">
      {props.children}
    </Heading>
  ),
  h3: (props) => (
    <Heading as="h3" fontSize="2xl" my={3}>
      {props.children}
    </Heading>
  ),
  h4: (props) => (
    <Heading as="h4" fontSize="xl" my={3}>
      {props.children}
    </Heading>
  ),
  h5: (props) => (
    <Heading as="h5" fontSize="xl" my={3}>
      {props.children}
    </Heading>
  ),
  h6: (props) => (
    <Heading as="h6" fontSize="lg" my={3}>
      {props.children}
    </Heading>
  ),
  ul: (props) => <UnorderedList my={2} spacing="4">{props.children}</UnorderedList>,
  li: (props) => <ListItem fontSize="lg">{props.children}</ListItem>,
  p: (props) => <Text my={2} fontSize="lg" lineHeight="1.6" mb="7" mt="0">{props.children}</Text>,
};

export default function Provider({ children }) {
  return (
    <MDXProvider components={components}>{children}</MDXProvider>
  )
}
