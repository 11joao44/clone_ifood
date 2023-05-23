import * as S from './styles'

import Button from '../../Button'
import { Container } from '../../../styles'
import StoreList from '../StoreList'
import ProductList from '../CategorieList'
import * as I from '../CategorieList/images'
import CardDrink from '../CarrouselDrink'
import Card from '../CarrouselItem'

const Cards = () => (
  <Container size="large">
    <S.Section>
      <S.CardCategorie>
        <ProductList />
      </S.CardCategorie>

      <S.FamousiFood>
        <S.Titulo>
          <h2>Bebidas com Entrega Rápida</h2>
          <span>Ver mais</span>
        </S.Titulo>
        <S.Carrousel>
          <Card />
        </S.Carrousel>
      </S.FamousiFood>

      <S.Promo>
        <img src={I.desconto50} alt="Desconto tim tim 50%" />
        <img src={I.promoHeineken} alt="Heineken leve 12 pague 11" />
        <img src={I.desconto40} alt="Dia Bebidas 40%" />
      </S.Promo>

      <S.FamousiFood>
        <S.Titulo>
          <h2>Bebidas com Entrega Rápida</h2>
          <span>Ver mais</span>
        </S.Titulo>
        <S.Carrousel>
          <CardDrink />
        </S.Carrousel>
      </S.FamousiFood>

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
