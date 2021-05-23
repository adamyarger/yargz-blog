import { ReactNode } from 'react'
import Header from 'components/header'
import Footer from 'components/footer'
import Container from 'components/container'

interface Props {
  children: ReactNode;
}

const InfoLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <Container minHeight="calc(100vh - 196px)" pt="14" maxW="850px">
        {children}
      </Container>
      <Footer />
    </>
  )
}

export default InfoLayout
