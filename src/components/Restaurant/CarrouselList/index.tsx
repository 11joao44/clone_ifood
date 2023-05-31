import CarrouselCard from '../../Carrousel'
import macdonald from '../../../assets/images/McDonald.jpg'
import { Link } from 'react-router-dom'

const Card = () => (
  <>
    <Link to={'/Restaurant/Store'}>
      <CarrouselCard name="Mcdonald´s Shopping" logo={macdonald} />
    </Link>
    <Link to={'/Restaurant/Store'}>
      <CarrouselCard name="Mcdonald´s Shopping" logo={macdonald} />
    </Link>
    <Link to={'/Restaurant/Store'}>
      <CarrouselCard name="Mcdonald´s Shopping" logo={macdonald} />
    </Link>
    <Link to={'/Restaurant/Store'}>
      <CarrouselCard name="Mcdonald´s Shopping" logo={macdonald} />
    </Link>
    <Link to={'/Restaurant/Store'}>
      <CarrouselCard name="Mcdonald´s Shopping" logo={macdonald} />
    </Link>
    <Link to={'/Restaurant/Store'}>
      <CarrouselCard name="Mcdonald´s Shopping" logo={macdonald} />
    </Link>
    <Link to={'/Restaurant/Store'}>
      <CarrouselCard name="Mcdonald´s Shopping" logo={macdonald} />
    </Link>
  </>
)

export default Card
