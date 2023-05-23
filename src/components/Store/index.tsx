import * as S from './styles'

type Props = {
  name: string
  logo: string
  star: string
  nota: number
  distance: number
  categorie: string
  frete: number
  estimativa: number
}

const Store = ({
  name,
  logo,
  star,
  nota,
  distance,
  categorie,
  frete,
  estimativa
}: Props) => (
  <>
    <S.Item>
      <S.Logo src={logo} alt={name} />
      <S.Merchant>
        <S.TituloMer>
          <h3>{name}</h3>
          <S.Selo src={S.verificado} />
        </S.TituloMer>
        <div>
          <span>
            <img src={star} alt="Avaliação" />
            <span>{nota}</span>
          </span>
          <span>• {categorie}</span>
          <span>• {distance} km</span>
        </div>
        <div>
          <span>
            {estimativa} min • R$&nbsp;{frete}
          </span>
        </div>
      </S.Merchant>
    </S.Item>
  </>
)

export default Store
