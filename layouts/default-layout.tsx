import { ReactNode } from 'react'
import Header from 'components/header'
import Footer from 'components/footer'

interface Props {
  children: ReactNode;
}

const DefaultLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default DefaultLayout
