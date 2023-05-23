import mcdonald from '../../../assets/images/McDonald.jpg'
import cocobambu from '../../../assets/images/cocobambu.png'
import chinainbox from '../../../assets/images/chinainbox.png'
import habibs from '../../../assets/images/habibs.jpg'
import outback from '../../../assets/images/outback.png'

import Promo from './Promo/index'

import * as S from './styles'

const BestRestaurant = () => (
  <S.SectionRest>
    <S.Linha></S.Linha>
    <S.Titulo>Os melhores restaurantes</S.Titulo>
    <S.Carrousel>
      <S.Item>
        <S.Logo src={mcdonald} alt="Mc donald" />
        <div>
          <S.NomeRest>Mcdonald&apos;s</S.NomeRest>
          <p>Lanches</p>
        </div>
        <S.Selo src={S.verificado} />
      </S.Item>
      <S.Item>
        <S.Logo src={cocobambu} alt="Coco Bambu" />
        <div>
          <S.NomeRest>Coco Bambu</S.NomeRest>
          <p>Frutos Do Mar</p>
        </div>
        <S.Selo src={S.verificado} />
      </S.Item>
      <S.Item>
        <S.Logo src={chinainbox} alt="China in Box" />
        <div>
          <S.NomeRest>China in Box</S.NomeRest>
          <p>Chinesa</p>
        </div>
        <S.Selo src={S.verificado} />
      </S.Item>
      <S.Item>
        <S.Logo src={habibs} alt="Habib´s" />
        <div>
          <S.NomeRest>Habib´s</S.NomeRest>
          <p>Lanches</p>
        </div>
        <S.Selo src={S.verificado} />
      </S.Item>
      <S.Item>
        <S.Logo src={outback} alt="Outback" />
        <div>
          <S.NomeRest>Outback</S.NomeRest>
          <p>Lanches</p>
        </div>
        <S.Selo src={S.verificado} />
      </S.Item>
    </S.Carrousel>
    <Promo />
  </S.SectionRest>
)

export default BestRestaurant
