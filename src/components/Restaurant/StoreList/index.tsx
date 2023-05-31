import Store from '../../Store'
import macdonalds from '../../../assets/images/McDonald.jpg'
import star from '../../../assets/images/star.svg'
import { Link } from 'react-router-dom'

const StoreList = () => (
  <>
    <Link to={'/Restaurant/Store'}>
      <Store
        name="MacDonalds"
        logo={macdonalds}
        star={star}
        nota={4.6}
        distance={4.8}
        categorie="Lanches"
        frete={15.99}
        estimativa={40}
      />
    </Link>
    <Link to={'/Restaurant/Store'}>
      <Store
        name="MacDonalds"
        logo={macdonalds}
        star={star}
        nota={4.6}
        distance={4.8}
        categorie="Lanches"
        frete={15.99}
        estimativa={40}
      />
    </Link>
    <Link to={'/Restaurant/Store'}>
      <Store
        name="MacDonalds"
        logo={macdonalds}
        star={star}
        nota={4.6}
        distance={4.8}
        categorie="Lanches"
        frete={15.99}
        estimativa={40}
      />
    </Link>
    <Link to={'/Restaurant/Store'}>
      <Store
        name="MacDonalds"
        logo={macdonalds}
        star={star}
        nota={4.6}
        distance={4.8}
        categorie="Lanches"
        frete={15.99}
        estimativa={40}
      />
    </Link>
    <Link to={'/Restaurant/Store'}>
      <Store
        name="MacDonalds"
        logo={macdonalds}
        star={star}
        nota={4.6}
        distance={4.8}
        categorie="Lanches"
        frete={15.99}
        estimativa={40}
      />
    </Link>
  </>
)

export default StoreList
