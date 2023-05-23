import delivery from '../../../assets/images/delivery-man.svg'
import mancha from '../../../assets/images/link-background.svg'
import store from '../../../assets/images/store.svg'

import {
  SectionLink,
  Images,
  Box,
  Mensagem,
  Paragrafo1,
  Paragrafo2,
  Background
} from './styles'
import Button from '../../Button'

const Link = () => (
  <SectionLink>
    <Box>
      <Background src={mancha} alt="Background" />
      <Mensagem>
        <Paragrafo1>
          Quer fazer
          <br />
          entregas pelo
          <br />
          iFood?
        </Paragrafo1>
        <Paragrafo2>
          Faça agora o seu cadastro e
          <br />
          comece o quanto antes.
        </Paragrafo2>
        <Button text="Saiba mais" size="large" />
      </Mensagem>
      <Images>
        <img src={delivery} alt="" />
      </Images>
    </Box>
    <Box>
      <Background src={mancha} alt="Background" />
      <Mensagem>
        <Paragrafo1>
          A sua fome
          <br />
          de Crescer ta
          <br />
          no iFood
        </Paragrafo1>
        <Paragrafo2>
          Cadastre seu restaurante ou
          <br />o seu mercado.
        </Paragrafo2>
        <Button text="Saiba mais" size="large" />
      </Mensagem>
      <Images>
        <img src={store} alt="Mercados" />
      </Images>
    </Box>
  </SectionLink>
)

export default Link
