import { Container } from '../../../styles'
import { useAPI } from '../../../hooks/useAPI'
import * as S from './styles'
import * as C from './styles_cardapio'
import star from '../../../assets/images/star.svg'
import lupa from '../../../assets/images/lupa.svg'
import arrow from '../../../assets/images/arrowDown.svg'
import Header_Categorie from '../../../components/Header_Categorie'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export type produtos = {
  id: number
  preco: number
  nome: string
  foto: string
  descricao: string
}

export type Petshop = {
  id: number
  titulo: string
  foto: string
  tipo: string
  avaliacao: number
  capa: string
  cardapio: produtos[]
}

const StorePetshop = () => {
  const { data: Petshop } = useAPI<Petshop[]>(
    'https://currency-lc1nvif69-11joao44.vercel.app/Petshop.json'
  )

  const getDescricao = (descricao: string) => {
    if (descricao.length > 10) {
      return descricao.slice(0, 40) + '...'
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
      <Container size="large">
        {Petshop?.map((petshop) => {
          return (
            <S.Lojas key={petshop.id}>
              <div>
                <S.Header>
                  <S.Logo
                    src={
                      'https://static.ifood-static.com.br/image/upload/t_thumbnail/logosgde/5b5c7cd5-e38e-4e94-9cfa-17ffe6b1a379/202203151710_qjDn_i.png'
                    }
                    alt={petshop.titulo}
                  />
                  <S.Titulos>
                    <h2>{petshop.titulo}</h2>
                    <div>
                      <span>{petshop.avaliacao}</span>
                      <img src={star} alt="Estrela" />
                      <p>Pedido mínimo R$ 15,00</p>
                    </div>
                    <h3>Ver mais</h3>
                  </S.Titulos>
                </S.Header>
                <S.Entrega>
                  <p>Entrega Hoje</p>
                  <span>33-43 min - R$ 10,99</span>
                  <img src={arrow} alt="" />
                </S.Entrega>
                <S.SideBar>
                  <nav>
                    <span></span>
                    <ul>
                      <li>Loja toda</li>
                      <li>Promoções</li>
                      <li>Alimentos Básicos</li>
                      <li>Utilidades</li>
                      <li>Cães</li>
                      <li>Gatos</li>
                      <li>Passaros</li>
                      <li>Peixes</li>
                      <li>Outros Animais</li>
                      <li>Casa e Jardim</li>
                    </ul>
                    <span></span>
                  </nav>
                </S.SideBar>
              </div>

              <C.Cardapio>
                <S.SubHeader>
                  <S.Address>
                    <img src={lupa} alt="Localização" />
                    <input type="text" placeholder="Busque por item ou loja" />
                  </S.Address>
                </S.SubHeader>
                <h4>Grandes marcas com desconto</h4>
                <C.Desconto>
                  {petshop.cardapio.map((produtos) => (
                    <C.DestaqueItem
                      key={produtos.id}
                      onClick={() => setModalOpen(true)}
                    >
                      <img src={produtos.foto} alt={produtos.nome} />
                      <span>{formatPreco(produtos.preco)}</span>
                      <h5>{produtos.nome}</h5>
                      <p>{getDescricao(produtos.descricao)}</p>
                    </C.DestaqueItem>
                  ))}

                  {petshop.cardapio.map((produtos) => (
                    <C.Modal
                      className={modalOpen ? 'visivel' : ''}
                      key={petshop.id}
                    >
                      <C.ModalContent>
                        <C.Close onClick={() => setModalOpen(false)}>X</C.Close>
                        <C.ModalImage src={produtos.foto} alt={produtos.nome} />
                        <C.DescriptionModal>
                          <h3>{produtos.nome}</h3>
                          <p>{getDescricao(produtos.descricao)}</p>
                          <span>A partir de {formatPreco(produtos.preco)}</span>
                          <Link to={'/petshop'}>
                            <span>Adicionar</span>
                            <span>{formatPreco(produtos.preco)}</span>
                          </Link>
                        </C.DescriptionModal>
                      </C.ModalContent>
                    </C.Modal>
                  ))}
                </C.Desconto>
                <h4>Mais Vendidos</h4>
                <C.MaisVendido>
                  {petshop.cardapio.map((produtos) => (
                    <C.DestaqueItem
                      key={produtos.id}
                      onClick={() => setModalOpen(true)}
                    >
                      <img src={produtos.foto} alt={produtos.nome} />
                      <span>{formatPreco(produtos.preco)}</span>
                      <h5>{produtos.nome}</h5>
                      <p>{getDescricao(produtos.descricao)}</p>
                    </C.DestaqueItem>
                  ))}
                </C.MaisVendido>
                <h4>Promoções</h4>
                <C.Medicamento>
                  {petshop.cardapio.map((produtos) => (
                    <C.DestaqueItem
                      key={produtos.id}
                      onClick={() => setModalOpen(true)}
                    >
                      <img src={produtos.foto} alt={produtos.nome} />
                      <span>{formatPreco(produtos.preco)}</span>
                      <h5>{produtos.nome}</h5>
                      <p>{getDescricao(produtos.descricao)}</p>
                    </C.DestaqueItem>
                  ))}
                </C.Medicamento>
              </C.Cardapio>
            </S.Lojas>
          )
        })}
      </Container>
    </>
  )
}

export default StorePetshop
