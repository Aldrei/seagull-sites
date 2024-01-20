
import {
  FooterOne,
  Header
} from '@/components/template-one'

import { IMAGES } from '@/images/template-one'
import { Container, Link, Message } from './styles'

export const NotFoundLayoutOne: React.FC = () => {
  return (
    <>
      <Header title="TEMPLATE-ONE" logo={IMAGES.LOGO} />
      <Container>
        <Message>O que você procura não foi encontrado!</Message>
        <Link href='/' title='Volar para página principal'>Voltar para página principal</Link>
      </Container>
      <FooterOne />
    </>
  )
}
