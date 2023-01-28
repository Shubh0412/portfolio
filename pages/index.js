import NextLink from 'next/link'
import {
  Button,
  Container,
  Box,
  Heading,
  Image,
  Link,
  SimpleGrid,
  List,
  ListItem,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import Section from '@/components/section'
import Layout from '@/components/layout/article'
import Paragraph from '@/components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '@/components/bio'
import { GridItem } from '@/components/grid-item'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mb={6}
          textAlign="center"
          css={{ backdropFilter: 'blur(10px)' }}
        >
          Hello, I&apos;m a front end developer
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Shubham Sahu
            </Heading>
            <p>Developer (Blockchain / Front-End)</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100"
              display="inline-block"
              borderRadius="full"
              src="/images/shubham.jpeg"
              alt="Profile Image"
            />
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            Too much to write
            <Link as={NextLink} href="/works/inkdrop" passHref>
              Inkdrop
            </Link>
          </Paragraph>
          <Box align="center" my={4}>
            <Button
              as={NextLink}
              href="/works"
              scroll={false}
              rightIcon={<ChevronRightIcon />}
              colorScheme="teal"
            >
              My Portfolio
            </Button>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1997</BioYear>
            Born in Prayagraj, India.
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Completed the Bachelor's Programme from JK Institute of Applied
            Physics & Technology.
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            Worked as a Software Developer Intern at OSFD.
          </BioSection>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            I ♥
          </Heading>
          <Paragraph>Novels, Blogging, Photography</Paragraph>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            On the Web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/Shubh0412" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  Github
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://twitter.com/Shaping_Myself" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoTwitter} />}
                >
                  Twitter
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoInstagram} />}
                >
                  Instagram
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
