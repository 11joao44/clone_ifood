import Product from '../../Categorie'
import * as I from './images'

const ProductList = () => (
  <>
    <Product title="Promoções" image={I.promo} />
    <Product title="Cervejas" image={I.cervejas} />
    <Product title="vinhos" image={I.vinhos} />
    <Product title="Destilados" image={I.destilados} />
    <Product title="Sem Alcool" image={I.semAlcool} />
    <Product title="Conveniencia" image={I.conveniencia} />
  </>
)

export default ProductList
