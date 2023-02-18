import { Container, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layout/article'

const Work = () => (
  <Layout title="NFTdrop">
    <Container>
      <Title>Nftdrop</Title>
      <P>
        A Marketplace for buying Nfts which can be viewed at OpenSea once
        minted. Real time changes can be made using Sanity which supports the
        backend & Thirdweb manages the Nft collection on Blockchain.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://nextjs-nft-seven.vercel.app/">
            https://nextjs-nft-seven.vercel.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Meta>Stack</Meta>
          <span>Next.Js, React, Sanity, Thirdweb</span>
        </ListItem>
      </List>
      <WorkImage src="/images/works/nftdrop.png" alt="Inkdrop" />
      <WorkImage src="/images/works/nftdrop1.png" alt="Inkdrop" />
    </Container>
  </Layout>
)

export default Work
