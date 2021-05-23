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
          <title>Blocademy</title>
        </Head>

        <Box
          as="section"
          pt={{ base: "10rem", md: "12rem" }}
          pb={{ base: "0", md: "5rem" }}
        >
          <Container>
            <Box textAlign="center">
              <Box mb="6">
                <BlockchainIcon blockSize="125px" fill="blue.500" />
              </Box>
              <chakra.h1
                maxW="18ch"
                mx="auto"
                fontSize={{ base: "2.25rem", sm: "3rem", lg: "4rem" }}
                fontFamily="heading"
                fontWeight="extrabold"
                mb="16px"
                lineHeight="1.2"
              >
                Your Career In Blockchain Starts Here
              </chakra.h1>

              <Text
                maxW="560px"
                mx="auto"
                opacity={0.7}
                fontSize={{ base: "xl", lg: "2xl" }}
                mt="6"
              >
                100% open source and FREE
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
