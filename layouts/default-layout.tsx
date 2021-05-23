import { ReactNode } from 'react'
import Header from 'components/header'
import Footer from 'components/footer'
import { chakra } from '@chakra-ui/react'

interface Props {
  children: ReactNode;
}

const DefaultLayout = ({ children }: Props) => {
  return (
    <>
      <chakra.div css={{
        position: "absolute",
        height: "500px",
        width: "95vw",
        maxWidth: "1800px",
        top: "0px",
        right: "0px",
        margin: "0px auto",
        left: "0px",
        pointerEvents: "none",
        backgroundImage: "url(/top-gradient-bg.png)",
        backgroundSize: "100% 350px",
        backgroundPosition: "center -200px",
        backgroundRepeat: "no-repeat",
        zIndex: 1
      }}></chakra.div>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default DefaultLayout
