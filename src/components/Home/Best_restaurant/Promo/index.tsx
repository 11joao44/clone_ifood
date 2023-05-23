import styled from 'styled-components'

import banner1 from '../../../../assets/images/landing-banner-1.png'
import banner2 from '../../../../assets/images/landing-banner-2.png'
import banner3 from '../../../../assets/images/landing-banner-3.png'

const Promo = () => (
  <div>
    <Banners>
      <img src={banner1} alt="Almoço 10" />
      <img src={banner2} alt="Pratos 70%" />
      <img src={banner3} alt="Super Restaurantes" />
    </Banners>
  </div>
)

export default Promo

const Banners = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  gap: 20px;
  cursor: pointer;
`
