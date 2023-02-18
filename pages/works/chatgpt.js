import { Container, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layout/article'

const Work = () => (
  <Layout title="ChatGPT">
    <Container>
      <Title>ChatGPT Clone</Title>
      <P>
        Fully functional & working replica of Chatgpt which uses Google
        authentication for signing in, whose backend is supported by Firebase
        which interacts with the api of Openai, returns back the answer to
        Firebase which is displayed to the user.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://nextjs-chatgpt-clone.vercel.app/">
            https://nextjs-chatgpt-clone.vercel.app/{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Meta>Stack</Meta>
          <span>Next.Js, React, Tailwind, Firbase, Google Cloud</span>
        </ListItem>
      </List>
      <WorkImage src="/images/works/chatgpt_1.png" alt="chatgpt" />
      <WorkImage src="/images/works/chatgpt_2.png" alt="chatgpt" />
    </Container>
  </Layout>
)

export default Work
