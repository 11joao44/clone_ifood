import dia from '../../../assets/images/Dia.jpeg'
import big from '../../../assets/images/big.png'
import eat from '../../../assets/images/EAT.jpg'
import assai from '../../../assets/images/logo-assai-centro.png'
import carrefour from '../../../assets/images/logo-carrefour.png'

import * as S from './styles'

const BestMarket = () => (
  <S.SectionRest>
    <S.Linha></S.Linha>
    <S.Titulo>Os melhores mercados</S.Titulo>
    <S.Carrousel>
      <S.Item>
        <S.Logo src={dia} alt="Mercado Dia" />
        <div>
          <S.NomeMarket>Dia Supermercado</S.NomeMarket>
        </div>
      </S.Item>
      <S.Item>
        <S.Logo src={big} alt="Mercado Big" />
        <div>
          <S.NomeMarket>Big Hipermercado</S.NomeMarket>
        </div>
      </S.Item>
      <S.Item>
        <S.Logo src={eat} alt="Mercado Eataly" />
        <div>
          <S.NomeMarket>Eataly</S.NomeMarket>
        </div>
      </S.Item>
      <S.Item>
        <S.Logo src={assai} alt="Mercado Assai" />
        <div>
          <S.NomeMarket>Assai Atacadista</S.NomeMarket>
        </div>
      </S.Item>
      <S.Item>
        <S.Logo src={carrefour} alt="Mercado Carrefour" />
        <div>
          <S.NomeMarket>Carrefour</S.NomeMarket>
        </div>
      </S.Item>
    </S.Carrousel>
  </S.SectionRest>
)

export default BestMarket
