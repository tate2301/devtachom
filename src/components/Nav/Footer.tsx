import {
    Box,
    chakra,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    VisuallyHidden,
    Input,
    IconButton,
    useColorModeValue,
    Divider,
  } from '@chakra-ui/react';
  import { ReactNode } from 'react';
  import { FaGithub, FaTwitter, FaYoutube } from 'react-icons/fa';
  import { BiMailSend } from 'react-icons/bi';
import Logo from '../Logo';
  
  
const SocialButton = ({
    children,
    label,
    href,
}: {
    children: ReactNode;
    label: string;
    href: string;
  }) => {
    return (
      <chakra.button
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  
  const ListHeader = ({ children }: { children: ReactNode }) => {
    return (
      <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
        {children}
      </Text>
    );
  };
  
export default function Footer() {
    return (
      <Box>
        <Container as={Stack} maxW={'6xl'} py={16}>
          <SimpleGrid
            templateColumns={{ base: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }}
            spacing={12}>
            <Stack spacing={6}>
              <Box>
                <Logo />
              </Box>
              <Text fontSize={'sm'}>
                © {new Date().getFullYear()} Tachom Private Limited. All rights reserved
              </Text>
              <Stack direction={'row'} spacing={6}>
                <SocialButton label={'Twitter'} href={'#'}>
                  <FaTwitter />
                </SocialButton>
                <SocialButton label={'YouTube'} href={'#'}>
                  <FaYoutube />
                </SocialButton>
                <SocialButton label={'Instagram'} href={'#'}>
                  <FaGithub />
                </SocialButton>
              </Stack>
            </Stack>
            <Stack align={'flex-start'}>
              <Link href={'/'}>Home</Link>
              <Link href={'/blog'}>Blog</Link>
              <Link href={'/services'}>Services</Link>
              <Link href={'/terms'}>Terms</Link>
            </Stack>
            <Stack align={'flex-start'}>
              {false && <><Link href={'/expo'}>Expo</Link>
              <Link href={'/jamstack'}>JAMStack</Link>
              <Link href={'/declarative'}>Declarative UI</Link>
              <Link href={'/terms'}>Terms</Link></>}
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Sign up for our newsletter</ListHeader>
              <Stack direction={'row'}>
                <Input
                  placeholder={'Your email address'}
                  bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
                  border={0}
                  _focus={{
                    bg: 'whiteAlpha.300',
                  }}
                />
                <IconButton
                  colorScheme="green"
                  aria-label="Subscribe"
                  icon={<BiMailSend />}
                />
              </Stack>
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>
    );
}