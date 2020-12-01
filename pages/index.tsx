import Header from '@/components/header'
import Section from '@/components/section'
import Item from '@/components/item'

const Index = () => (
  <>
    <Header />

    <Section title='Projects'>
      <Item href='/rose-pine'>Rosé Pine Theme</Item>
    </Section>

    <Section title='Social'>
      <Item href='https://twitter.com/mvllow'>Twitter</Item>
      <Item href='https://github.com/mvllow'>GitHub</Item>
    </Section>
  </>
)

export default Index
