import Head from 'next/head'
import { NextSeo } from 'next-seo'
import {
  Box,
  Text
} from '@chakra-ui/react';
import Container from 'components/container'
import DefaultLayout from 'layouts/default-layout'

export default function Home() {
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
                In the past I was an early engineer at Total Expert, a CRM for the finance world. I'm an autodidact, which is just a fancy way of saying I taught myself how to code.
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
            Dude
          </Container>
        </Box>
      </DefaultLayout>
    </>
  )
}
