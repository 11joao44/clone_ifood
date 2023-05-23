import address from '../../../assets/images/address.svg'
import Button from '../../Button'
import { Section, Texto, Form, Address } from './styles'

const SectionAddress = () => (
  <Section>
    <Texto>
      <h1>Tudo para facilitar seu dia a dia</h1>
      <p>O que você precisa está aqui. Peça e receba onde estiver.</p>
    </Texto>
    <Form>
      <Address>
        <img src={address} alt="Localização" />
        <input type="text" placeholder="Endereço de entrega e número" />
      </Address>
      <Button text={'Buscar'} size="large" />
    </Form>
  </Section>
)

export default SectionAddress
