import { Container } from '../../../styles'
import { useAPI } from '../../../hooks/useAPI'
import * as S from './styles'
import * as C from './styles_cardapio'
import star from '../../../assets/images/star.svg'
import lupa from '../../../assets/images/lupa.svg'
import moto from '../../../assets/images/iconMoto.svg'
import arrow from '../../../assets/images/arrowDown.svg'
import Header_Categorie from '../../../components/Header_Categorie'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export type Prato = {
  id: number
  preco: number
  nome: string
  foto: string
  descricao: string
  porcao: string
}

export type Restaurante = {
  id: number
  titulo: string
  foto: string
  tipo: string
  avaliacao: number
  capa: string
  cardapio: Prato[]
  lancamentos: Prato[]
}

const StoreDrinks = () => {
  const { data: restaurantes } = useAPI<Restaurante[]>(
    'https://currency-9iuk7xyto-11joao44.vercel.app/Drinks.json'
  )

  const getDescricao = (descricao: string) => {
    if (descricao.length > 112) {
      return descricao.slice(0, 160) + '...'
    }

    return descricao
  }

  const formatPreco = (preco: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <Header_Categorie />
      <Container>
        {restaurantes?.map((restaurante) => {
          return (
            <S.Lojas key={restaurante.id}>
              <S.Banner src={restaurante.capa} alt="Mesa com Lanches" />
              <S.Header>
                <S.Titulos>
                  <img src={restaurante.foto} alt={restaurante.titulo} />
                  <h2>{restaurante.titulo}</h2>
                  <div>
                    <span>
                      <img src={star} alt="Estrela" />
                      {restaurante.avaliacao}
                    </span>
                  </div>
                </S.Titulos>
                <S.End>
                  <h4>Ver mais</h4>|
                  <p>
                    <span>$</span> Pedido mínimo R$ 15,00
                  </p>
                </S.End>
              </S.Header>

              <S.SubHeader>
                <S.Address>
                  <img src={lupa} alt="Localização" />
                  <input type="text" placeholder="Busque por item ou loja" />
                </S.Address>
                <S.Entrega>
                  <img src={moto} alt="" />
                  <p>Entrega</p>
                  <img src={arrow} alt="" />
                </S.Entrega>
                <S.Time>
                  <p>Hoje</p>
                  <span>33-43 min - R$ 8,99</span>
                </S.Time>
              </S.SubHeader>

              <C.Cardapio>
                <h4>Cardápio</h4>
                <C.Destaque>
                  {restaurante.cardapio.map((prato) => (
                    <C.DestaqueItem
                      key={prato.id}
                      onClick={() => setModalOpen(true)}
                    >
                      <img src={prato.foto} alt="Foto do Lanche" />
                      <h5>{prato.nome}</h5>
                      <p>{getDescricao(prato.descricao)}</p>
                      <span>A partir de {formatPreco(prato.preco)}</span>
                    </C.DestaqueItem>
                  ))}
                </C.Destaque>
              </C.Cardapio>

              <C.Cardapio>
                <h4>Lançamentos</h4>
                <C.Destaque>
                  {restaurante.lancamentos.map((prato) => (
                    <>
                      <C.DestaqueItem
                        key={prato.id}
                        onClick={() => setModalOpen(true)}
                      >
                        <img src={prato.foto} alt="Foto do Lanche" />
                        <h5>{prato.nome}</h5>
                        <p>{getDescricao(prato.descricao)}</p>
                        <span>A partir de {formatPreco(prato.preco)}</span>
                      </C.DestaqueItem>
                      <C.Modal className={modalOpen ? 'visivel' : ''}>
                        <C.ModalContent>
                          <C.Close onClick={() => setModalOpen(false)}>
                            X
                          </C.Close>
                          <C.ModalImage src={prato.foto} alt={prato.nome} />
                          <C.DescriptionModal>
                            <h3>{prato.nome}</h3>
                            <p>{prato.descricao}</p>
                            <span>A partir de {formatPreco(prato.preco)}</span>
                            <p>{prato.porcao}</p>
                            <Link to={'/Drinks'}>
                              <span>Adicionar</span>
                              <span>{formatPreco(prato.preco)}</span>
                            </Link>
                          </C.DescriptionModal>
                        </C.ModalContent>
                      </C.Modal>
                    </>
                  ))}
                </C.Destaque>
              </C.Cardapio>
            </S.Lojas>
          )
        })}
      </Container>
    </>
  )
}

export default StoreDrinks
