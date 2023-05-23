import Product from '../../Categorie'
import * as I from './images'

const ProductList = () => (
  <>
    <Product title="Promoções" image={I.promo} />
    <Product title="Pre Agora" image={I.praAgora} />
    <Product title="Mercados" image={I.mercados} />
    <Product title="Do Mês" image={I.doMes} />
    <Product title="Hortifruti" image={I.HortiFrut} />
    <Product title="Carnes" image={I.Carnes} />
    <Product title="Bebidas" image={I.bebidas} />
    <Product title="Limpeza" image={I.limpeza} />
  </>
)

export default ProductList
