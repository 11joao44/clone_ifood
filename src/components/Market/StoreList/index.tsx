import Store from '../../Store'
import assai from '../../../assets/images/logo-assai-centro.png'
import star from '../../../assets/images/star.svg'
import { Link } from 'react-router-dom'

const StoreList = () => (
  <>
    <Link to={'/Market/Store'}>
      <Store
        name="Assai Atacadista"
        logo={assai}
        star={star}
        nota={4.8}
        distance={4.2}
        categorie="Mercado"
        frete={5.99}
        estimativa={80}
      />
    </Link>
    <Link to={'/Market/Store'}>
      <Store
        name="Assai Atacadista"
        logo={assai}
        star={star}
        nota={4.8}
        distance={4.2}
        categorie="Mercado"
        frete={5.99}
        estimativa={80}
      />
    </Link>
    <Link to={'/Market/Store'}>
      <Store
        name="Assai Atacadista"
        logo={assai}
        star={star}
        nota={4.8}
        distance={4.2}
        categorie="Mercado"
        frete={5.99}
        estimativa={80}
      />
    </Link>
    <Link to={'/Market/Store'}>
      <Store
        name="Assai Atacadista"
        logo={assai}
        star={star}
        nota={4.8}
        distance={4.2}
        categorie="Mercado"
        frete={5.99}
        estimativa={80}
      />
    </Link>
  </>
)

export default StoreList
