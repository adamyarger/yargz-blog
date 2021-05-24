import { Box, BoxProps } from '@chakra-ui/react'



export default function ColorBar(props: BoxProps) {
  return (
    <Box
      backgroundImage={
        `linear-gradient(
        54.14deg, rgb(230, 69, 131) 0.21%,
        rgb(255, 110, 35) 18.92%,
        rgb(255, 252, 0) 37.63%,
        rgb(18, 174, 140) 61.54%,
        rgb(25, 172, 239) 81.81%,
        rgb(179, 66, 255) 100%)`
      }
      backgroundPosition="left top"
      backgroundRepeat="no-repeat"
      backgroundSize="100% 4px"
      width="100%"
      height="1px"
      {...props}
    ></Box>
  )
}