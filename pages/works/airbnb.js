import { Container, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layout/article'

const Work = () => (
  <Layout title="Airbnb">
    <Container>
      <Title>Airbnb Clone</Title>
      <P>
        A front end clone of Airbnb with date picker options to choose the
        duration & no. of guests that a user would use while deciding their
        stay.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://nextjs-airbnbclone.vercel.app/">
            https://nextjs-airbnbclone.vercel.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Meta>Stack</Meta>
          <span>Next.Js, React, Tailwind, Framer Motion</span>
        </ListItem>
      </List>
      <WorkImage src="/images/works/Airbnb_1.png" alt="Airbnb" />
      <WorkImage src="/images/works/Airbnb_2.png" alt="Airbnb" />
    </Container>
  </Layout>
)

export default Work
