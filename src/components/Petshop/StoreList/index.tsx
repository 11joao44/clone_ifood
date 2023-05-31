import Store from '../../Store'
import { mercePet } from '../image/image'
import star from '../../../assets/images/star.svg'
import { Link } from 'react-router-dom'

const StoreList = () => (
  <>
    <Link to={'/Petshop/Store'}>
      <Store
        name="Mercearia Pet"
        logo={mercePet}
        star={star}
        nota={4.7}
        distance={5.2}
        categorie="Mercado"
        frete={14.99}
        estimativa={70}
      />
    </Link>
    <Link to={'/Petshop/Store'}>
      <Store
        name="Mercearia Pet"
        logo={mercePet}
        star={star}
        nota={4.7}
        distance={5.2}
        categorie="Mercado"
        frete={14.99}
        estimativa={70}
      />
    </Link>
    <Link to={'/Petshop/Store'}>
      <Store
        name="Mercearia Pet"
        logo={mercePet}
        star={star}
        nota={4.7}
        distance={5.2}
        categorie="Mercado"
        frete={14.99}
        estimativa={70}
      />
    </Link>
    <Link to={'/Petshop/Store'}>
      <Store
        name="Mercearia Pet"
        logo={mercePet}
        star={star}
        nota={4.7}
        distance={5.2}
        categorie="Mercado"
        frete={14.99}
        estimativa={70}
      />
    </Link>
  </>
)

export default StoreList
