import Product from '../Categorie'
import * as I from './images'

const ProductList = () => (
  <>
    <Product title="Lanche" image={I.lanches} />
    <Product title="Pizza" image={I.pizza} />
    <Product title="Japonesa" image={I.japonesa} />
    <Product title="Brasileira" image={I.brasileira} />
    <Product title="Açai" image={I.acai} />
    <Product title="Árabe" image={I.arabe} />
    <Product title="Saudavel" image={I.saudavel} />
    <Product title="Italiana" image={I.italiana} />
    <Product title="Doces e Bolos" image={I.doces} />
    <Product title="Pastel" image={I.pastel} />
    <Product title="Chinesa" image={I.chinesa} />
    <Product title="Carnes" image={I.carnes} />
    <Product title="Salgados" image={I.salgados} />
    <Product title="Sorvetes" image={I.sorvetes} />
    <Product title="Padaria" image={I.padarias} />
    <Product title="Marmita" image={I.marmitas} />
    <Product title="Frutas" image={I.vegetariana} />
  </>
)

export default ProductList
