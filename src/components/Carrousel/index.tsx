import * as S from './styles'

type Props = {
  logo: string
  name: string
}

const CarrouselCard = ({ logo, name }: Props) => (
  <>
    <S.Card>
      <S.Logo src={logo} alt={name} />
      <h3>{name}</h3>
    </S.Card>
  </>
)

export default CarrouselCard
