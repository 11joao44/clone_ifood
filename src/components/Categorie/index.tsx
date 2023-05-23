import { CardCategorie } from './styles'

type Props = {
  image: string
  title: string
}

const Product = ({ image, title }: Props) => (
  <CardCategorie>
    <div>
      <img src={image} alt={title} />
      <h3>{title}</h3>
    </div>
  </CardCategorie>
)

export default Product
