import SectionAddress from '../../components/Home/Section_address'
import Categories from '../../components/Home/Section_categories'
import BestRestaurant from '../../components/Home/Best_restaurant'
import BestMarket from '../../components/Home/Best_market'
import ECommerce from '../../components/Home/ECommerce'
import FoodBanner from '../../components/Food_Banner'
import Header from '../../components/Home/Header'
import { Container } from '../../styles'

const Home = () => (
  <Container size="small">
    <Header />
    <SectionAddress />
    <Categories />
    <BestRestaurant />
    <BestMarket />
    <ECommerce />
    <FoodBanner />
  </Container>
)

export default Home
