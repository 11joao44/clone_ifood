import * as S from './styles'
import Button from '../../Button'
import StoreList from '../StoreList'
import { Container } from '../../../styles'
import * as I from '../image/image'
import Card from '../CarrouselItem'
import ProductList from '../CategorieList'

const Cards = () => (
  <Container size="large">
    <S.Section>
      <S.CardCategorie>
        <ProductList />
      </S.CardCategorie>

      <S.FamousiFood>
        <S.Titulo>
          <h2>Petshop com Entrega Rápida</h2>
          <span>Ver mais</span>
        </S.Titulo>
        <S.Carrousel>
          <Card />
        </S.Carrousel>
      </S.FamousiFood>

      <S.Promo>
        <img src={I.pet30} alt="Desconto 50%" />
        <img src={I.animais40} alt="Farmacinha 30%" />
        <img src={I.fretegratis} alt="Tylenol 15%" />
      </S.Promo>

      <S.Store>
        <h2>Mais pedidos</h2>
        <S.Template>
          <StoreList />
          <StoreList />
          <StoreList />
          <StoreList />
        </S.Template>
        <Button size="large" text="Ver mais" />
      </S.Store>
    </S.Section>
  </Container>
)

export default Cards
