import Product from '../../Categorie'
import * as I from '../image/image'

const ProductList = () => (
  <>
    <Product title="Promoções" image={I.promo} />
    <Product title="Presentes" image={I.presentes} />
    <Product title="Bebê" image={I.bebe} />
    <Product title="Remédios" image={I.remedio} />
    <Product title="Gripes" image={I.gripe} />
    <Product title="Testes" image={I.testes} />
    <Product title="Vitaminas" image={I.vitaminas} />
    <Product title="Higiene" image={I.higiene} />
  </>
)

export default ProductList
