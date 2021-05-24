import {
  Heading,
  Text,
  Box
} from '@chakra-ui/react'

interface Props {
  title: string
  subtitle?: string
}

export default function PageHeader(props: Props) {
  const { title, subtitle } = props
  return (
    <Box py="8">
      <Heading as="h1" size="2xl" mb="4">
        {title}
      </Heading>

      <Text color="gray.500" fontSize="xl">
        {subtitle}
      </Text>
    </Box>
  )
}