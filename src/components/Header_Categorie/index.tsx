import { Link } from 'react-router-dom'

import * as S from './styles'
import logo from '../../assets/images/ifood-logo.svg'
import lupa from '../../assets/images/lupa.svg'
import login from '../../assets/images/logn.svg'
import sacola from '../../assets/images/sacola-de-compras.png'

const Header = () => (
  <S.Cabecalho>
    <S.Container>
      <S.Head>
        <Link to={'/'}>
          <img src={logo} alt="iFood" />
        </Link>
        <nav>
          <S.Lista>
            <li>
              <Link to={'/'}>Inicio</Link>
            </li>
            <li>
              <Link to={'/Restaurant'}>Restaurante</Link>
            </li>
            <li>
              <Link to={'/Market'}>Mercado</Link>
            </li>
            <li>
              <Link to={'/Drinks'}>Bebidas</Link>
            </li>
            <li>
              <Link to={'/Pharmacy'}>Farmácia</Link>
            </li>
            <li>
              <Link to={'/Petshop'}>Pet Shop</Link>
            </li>
          </S.Lista>
        </nav>
      </S.Head>
      <S.Address>
        <img src={lupa} alt="Localização" />
        <input type="text" placeholder="Busque por item ou loja" />
      </S.Address>
      <S.End>
        <S.Route>
          <input type="text" placeholder="Sua Localização" />
        </S.Route>
        <img src={login} alt="Entrar" />
        <S.Sacola>
          <img src={sacola} alt="Sacola de compras" />
          <div>
            <span>R$ 0,0</span>
            <p>0 itens</p>
          </div>
        </S.Sacola>
      </S.End>
    </S.Container>
  </S.Cabecalho>
)

export default Header
