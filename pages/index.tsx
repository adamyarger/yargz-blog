import Head from 'next/head'
import Header from 'components/header'
import {
  Box,
  chakra,
  Text
} from '@chakra-ui/react';
import Container from 'components/container'
import CourseDirectory from 'components/course-directory'
import DefaultLayout from 'layouts/default-layout'
import BlockchainIcon from 'components/icons/blockchain-icon'

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <Head>
          <title>yargz</title>
        </Head>

        <Box
          as="section"
          pt={{ base: "6rem", md: "8rem" }}
          pb={{ base: "0", md: "5rem" }}
        >
          <Container>
            <Box>
              <Text
                maxW="560px"
                mx="auto"
                opacity={0.7}
                fontSize={{ base: "xl", lg: "2xl" }}
                mt="6"
              >
                Hey, I'm Adam. I'm a software tinkerer who loves good design. I'm currently cutting my teeth with blockchain and sharing with the world what I've learned.
              </Text>

              <Text
                maxW="560px"
                mx="auto"
                opacity={0.7}
                fontSize={{ base: "xl", lg: "2xl" }}
                mt="6"
              >
                In the past I was an early employee at Total Expert, a CRM for the finance world. Im what you call an autodidact, which is just a fancy way of saying I'm a self taught software engineer.
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
            <CourseDirectory />
          </Container>
        </Box>
      </DefaultLayout>
    </>
  )
}
