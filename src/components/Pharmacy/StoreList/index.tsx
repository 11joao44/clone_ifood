import Store from '../../Store'
import { drogasil } from '../image/image'
import star from '../../../assets/images/star.svg'
import { Link } from 'react-router-dom'

const StoreList = () => (
  <>
    <Link to={'/Pharmacy/Store'}>
      <Store
        name="Drogasil"
        logo={drogasil}
        star={star}
        nota={4.5}
        distance={3.6}
        categorie="Mercado"
        frete={17.99}
        estimativa={20}
      />
    </Link>
    <Link to={'/Pharmacy/Store'}>
      <Store
        name="Drogasil"
        logo={drogasil}
        star={star}
        nota={4.5}
        distance={3.6}
        categorie="Mercado"
        frete={17.99}
        estimativa={20}
      />
    </Link>
    <Link to={'/Pharmacy/Store'}>
      <Store
        name="Drogasil"
        logo={drogasil}
        star={star}
        nota={4.5}
        distance={3.6}
        categorie="Mercado"
        frete={17.99}
        estimativa={20}
      />
    </Link>
    <Link to={'/Pharmacy/Store'}>
      <Store
        name="Drogasil"
        logo={drogasil}
        star={star}
        nota={4.5}
        distance={3.6}
        categorie="Mercado"
        frete={17.99}
        estimativa={20}
      />
    </Link>
  </>
)

export default StoreList
