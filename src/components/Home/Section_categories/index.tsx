import restaurant from '../../../assets/images/restaurant.png'
import market from '../../../assets/images/market.png'
import drinks from '../../../assets/images/drinks.png'
import pharmacy from '../../../assets/images/pharmacy.png'
import petshop from '../../../assets/images/petshop.png'
import * as S from './styles'
import { Link } from 'react-router-dom'

const Categories = () => (
  <section>
    <S.Categories>
      <Link to={'/Restaurant'}>
        <S.Restaurant>
          <h2>Restaurante</h2>
          <Link to={'/Restaurant'}>Ver opções &gt;</Link>
          <img src={restaurant} alt="Restaurante" />
        </S.Restaurant>
      </Link>
      <Link to={'/Market'}>
        <S.Market>
          <h2>Mercado</h2>
          <Link to={'/Market'}>Buscar lojas &gt;</Link>
          <img src={market} alt="Mercado" />
        </S.Market>
      </Link>
    </S.Categories>

    <S.MultiCategories>
      <Link to={'/Drinks'}>
        <S.Drinks>
          <img src={drinks} alt="Bebidas" />
        </S.Drinks>
        <h3>Bebidas &gt;</h3>
      </Link>
      <Link to={'/Pharmacy'}>
        <S.Pharmacy>
          <img src={pharmacy} alt="Farmácia" />
        </S.Pharmacy>
        <h3>Farmácia &gt;</h3>
      </Link>
      <Link to={'/Petshop'}>
        <S.Petshop>
          <img src={petshop} alt="Pet Shop" />
        </S.Petshop>
        <h3>Pet Shop &gt;</h3>
      </Link>
    </S.MultiCategories>
  </section>
)

export default Categories
