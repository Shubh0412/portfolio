import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '@/components/section'
import { WorkGridItem } from '@/components/grid-item'
import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import Layout from '@/components/layout/article'

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem id="inkdrop" title="Inkdrop" thumbnail={thumbInkdrop}>
              A markdown note-take app
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
