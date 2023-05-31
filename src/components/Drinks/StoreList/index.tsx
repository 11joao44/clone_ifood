import Store from '../../Store'
import star from '../../../assets/images/star.svg'
import { distHeineken } from '../CategorieList/images'
import { Link } from 'react-router-dom'

const StoreList = () => (
  <>
    <Link to={'/Drinks/Store'}>
      <Store
        name="Heineken"
        logo={distHeineken}
        star={star}
        nota={4.9}
        distance={2.8}
        categorie="Bebidas"
        frete={1.99}
        estimativa={10}
      />
    </Link>
    <Link to={'/Drinks/Store'}>
      <Store
        name="Heineken"
        logo={distHeineken}
        star={star}
        nota={4.9}
        distance={2.8}
        categorie="Bebidas"
        frete={1.99}
        estimativa={10}
      />
    </Link>
    <Link to={'/Drinks/Store'}>
      <Store
        name="Heineken"
        logo={distHeineken}
        star={star}
        nota={4.9}
        distance={2.8}
        categorie="Bebidas"
        frete={1.99}
        estimativa={10}
      />
    </Link>
    <Link to={'/Drinks/Store'}>
      <Store
        name="Heineken"
        logo={distHeineken}
        star={star}
        nota={4.9}
        distance={2.8}
        categorie="Bebidas"
        frete={1.99}
        estimativa={10}
      />
    </Link>
    <Link to={'/Drinks/Store'}>
      <Store
        name="Heineken"
        logo={distHeineken}
        star={star}
        nota={4.9}
        distance={2.8}
        categorie="Bebidas"
        frete={1.99}
        estimativa={10}
      />
    </Link>
  </>
)

export default StoreList
