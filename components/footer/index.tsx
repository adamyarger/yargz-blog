import {
  Box,
  Stack,
  ButtonGroup,
  IconButton
} from '@chakra-ui/react'
import { RiGithubFill, RiTwitterFill } from "react-icons/ri"
import Link from 'next/link'
import Logo from 'components/logo'

const Footer = () => {
  return (
    <Box
      as="footer"
      role="contentinfo"
      mx="auto"
      py="12"
      px={{ base: '4', md: '8' }}
      borderTop="1px"
      borderColor="gray.300"
    >
      <Stack>
        <Stack direction="row" spacing="4" align="center" justify="space-between">
          <Link href={'/'} passHref>
            <Stack
              as={'a'}
              direction={'row'}
              alignItems={'center'}
              spacing={{ base: 2, sm: 4 }}
            >
              <Logo />
            </Stack>
          </Link>

          <ButtonGroup variant="ghost" color="gray.600">
            <IconButton as="a" href="https://github.com/adamyarger" aria-label="GitHub" icon={<RiGithubFill fontSize="20px" />} />
            <IconButton as="a" href="#" aria-label="Twitter" icon={<RiTwitterFill fontSize="20px" />} />
          </ButtonGroup>
        </Stack>
      </Stack>
    </Box>
  )
}

export default Footer