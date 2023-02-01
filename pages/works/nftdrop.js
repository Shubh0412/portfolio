import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layout/article'

const Work = () => (
  <Layout title="Inkdrop">
    <Container>
      <Title>Nftdrop</Title>
      <P>
        A Marketplace for buying Nfts which can be viewed at OpenSea once
        minted.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://nextjs-nft-seven.vercel.app/">
            https://nextjs-nft-seven.vercel.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Next.Js, React, Sanity, Third Web</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/nftdrop.png" alt="Inkdrop" />
      <WorkImage src="/images/works/inkdrop_02.png" alt="Inkdrop" />
    </Container>
  </Layout>
)

export default Work
