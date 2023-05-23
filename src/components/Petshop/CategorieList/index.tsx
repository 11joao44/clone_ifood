import Product from '../../Categorie'
import * as I from '../image/image'

const ProductList = () => (
  <>
    <Product title="Ração Cães" image={I.racaoCao} />
    <Product title="Higiene Cães" image={I.higieneCao} />
    <Product title="Ração Gatos" image={I.racaoGato} />
    <Product title="Higiene Gatos" image={I.higieneGato} />
    <Product title="Farmácia Pet" image={I.farmaPet} />
    <Product title="Antipulgas" image={I.antipulgas} />
    <Product title="Outros Pets" image={I.outrosPets} />
  </>
)

export default ProductList
