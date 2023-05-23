import * as S from './styles'

import Button from '../../Button'
import ProductList from '../../CategorieList'
import StoreList from '../StoreList'
import { Container } from '../../../styles'
import Card from '../CarrouselList'

const Cards = () => (
  <Container size="large">
    <S.Section>
      <S.CardCategorie>
        <ProductList />
      </S.CardCategorie>

      <S.FamousiFood>
        <S.Titulo>
          <h2>Famosos no iFood</h2>
          <span>Ver mais</span>
        </S.Titulo>
        <S.Carrousel>
          <Card />
        </S.Carrousel>
      </S.FamousiFood>

      <S.Store>
        <h2>Lojas</h2>
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
