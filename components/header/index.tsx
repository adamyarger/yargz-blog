import {
  Box,
  Flex,
  Container,
  Stack,
  useDisclosure,
  IconButton,
  useColorModeValue,
  Icon,
  useColorMode,
  chakra
} from '@chakra-ui/react';
import { RiCloseFill, RiMenu2Line, RiMoonLine, RiSunLine } from 'react-icons/ri';
import Link from 'next/link';
import Logo from 'components/logo'

import { MobileNav } from './mobile-nav';
import { DesktopNav } from './desktop-nav';

const Header = () => {
  const { isOpen: isMobileNavOpen, onToggle } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box>
      <chakra.div css={{
        backgroundImage: `linear-gradient(
                            54.14deg, rgb(230, 69, 131) 0.21%,
                            rgb(255, 110, 35) 18.92%,
                            rgb(255, 252, 0) 37.63%,
                            rgb(18, 174, 140) 61.54%,
                            rgb(25, 172, 239) 81.81%,
                            rgb(179, 66, 255) 100%)`,
        backgroundPosition: "left top",
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 4px',
        height: '4px',
        width: '100%'
      }}></chakra.div>
      <Flex
        as={'header'}
        pos="static"
        top="0"
        w={'full'}
        minH={'60px'}
        zIndex="999"
        justify={'center'}
        css={{
          backdropFilter: 'saturate(180%) blur(5px)',
          backgroundColor: useColorModeValue(
            'rgba(255, 255, 255, 0.8)',
            'rgba(26, 32, 44, 0.8)'
          ),
        }}>
        <Container as={Flex} maxW={'3xl'} align={'center'}>
          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}>
            <IconButton
              onClick={onToggle}
              icon={
                isMobileNavOpen ? (
                  <Icon w={3} h={3} as={RiCloseFill} />
                ) : (
                  <Icon w={5} h={5} as={RiMenu2Line} />
                )
              }
              variant={'ghost'}
              size={'sm'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>

          <Flex
            flex={{ base: 1, md: 'auto' }}
            justify={{ base: 'center', md: 'start' }}>
            <Link href={'/'} passHref>
              <Stack
                as={'a'}
                direction={'row'}
                alignItems={'center'}
                spacing={{ base: 2, sm: 4 }}
              >
                {/* {
                  colorMode == 'light'
                    ? <Image src="/zapdart-logo-dark.svg" height="32px" />
                    : <Image src="/zapdart-logo-light.svg" height="32px" />
                } */}
                <Logo />
              </Stack>
            </Link>
          </Flex>

          <Stack
            direction={'row'}
            align={'center'}
            spacing={8}
            flex={{ base: 1, md: 'auto' }}
            justify={'flex-end'}>
            <DesktopNav display={{ base: 'none', md: 'flex' }} />
            <IconButton
              size={'sm'}
              variant={'ghost'}
              aria-label={'Toggle Color Mode'}
              onClick={toggleColorMode}
              icon={
                colorMode == 'light' ? (
                  <RiMoonLine size={18} />
                ) : (
                  <RiSunLine size={18} />
                )
              }
            />
          </Stack>
        </Container>
      </Flex>
      <MobileNav isOpen={isMobileNavOpen} />
    </Box>
  );
};

export default Header
