import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '@/components/section'
import { WorkGridItem } from '@/components/grid-item'
import thumbInkdrop from '../public/images/works/nftdrop.png'
import thumbAirbnb_1 from '../public/images/works/Airbnb_1.png'
import Layout from '@/components/layout/article'

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>

        <SimpleGrid columns={[1, 1, 1]} gap={6}>
          <Section>
            <WorkGridItem
              id="nftdrop"
              title="NFT Club"
              thumbnail={thumbInkdrop}
            >
              Wanna buy NFT? Head right here
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem
              id="airbnb"
              title="Airbnb Clone"
              thumbnail={thumbAirbnb_1}
            >
              A Place to book your stay
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
