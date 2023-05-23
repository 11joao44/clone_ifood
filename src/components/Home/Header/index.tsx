import logo from '../../../assets/images/ifood-logo.svg'
import Button from '../../Button'
import { Login, Head, Container, Lista, Register, Cabecalho } from './styles'

const Header = () => (
  <Cabecalho>
    <Container>
      <Head>
        <img src={logo} alt="iFood" />
        <nav>
          <Lista>
            <li>
              <a href="">Entregador</a>
            </li>
            <li>
              <a href="">Restaurante e Mercado</a>
            </li>
            <li>
              <a href="">Carreiras</a>
            </li>
            <li>
              <a href="">iFood Card</a>
            </li>
          </Lista>
        </nav>
      </Head>
      <Login>
        <Register>criar conta</Register>
        <Button text={'Entrar'} size="small" />
      </Login>
    </Container>
  </Cabecalho>
)

export default Header
