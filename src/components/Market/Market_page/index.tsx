import * as S from './styles'

import Button from '../../Button'
import { Container } from '../../../styles'
import StoreList from '../StoreList'
import ProductList from '../CategorieList'
import * as I from '../CategorieList/images'

const Cards = () => (
  <Container size="large">
    <S.Section>
      <S.CardCategorie>
        <ProductList />
      </S.CardCategorie>

      <S.Promo>
        <img src={I.ofertalimpeza} alt="Festival de Limpeza" />
        <img src={I.desconto} alt="Descontões 50%" />
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
