import Button from '../Button'
import banner from '../../assets/images/food-lover-banner.jpg'
import banner2 from '../../assets/images/ifood-benefits-desktop.png'
import { Banner, Banner2, Paragrafo1, Paragrafo2 } from './styles'

const FoodBanner = () => (
  <section>
    <Banner>
      <div>
        <Paragrafo1>
          Você tem
          <br />
          fome do
          <br />
          que?
        </Paragrafo1>
        <Paragrafo2>
          Descubra como é ser um FoodLover e
          <br />
          faça parte da nossa revolução!
        </Paragrafo2>
        <Button text="Saiba mais" size="large" />
      </div>
      <img src={banner} alt="" />
    </Banner>
    <Banner2 src={banner2} alt="" />
  </section>
)

export default FoodBanner
