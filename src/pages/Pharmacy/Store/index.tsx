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

export type Pharmacy = {
  id: number
  titulo: string
  foto: string
  tipo: string
  avaliacao: number
  capa: string
  cardapio: produtos[]
}

const StorePharmacy = () => {
  const { data: Pharmacy } = useAPI<Pharmacy[]>(
    'https://currency-lc1nvif69-11joao44.vercel.app/Pharmacy.json'
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
        {Pharmacy?.map((pharmacy) => {
          return (
            <S.Lojas key={pharmacy.id}>
              <div>
                <S.Header>
                  <S.Logo
                    src={
                      'https://static.ifood-static.com.br/image/upload/t_thumbnail/logosgde/5b5c7cd5-e38e-4e94-9cfa-17ffe6b1a379/202203151710_qjDn_i.png'
                    }
                    alt={pharmacy.titulo}
                  />
                  <S.Titulos>
                    <h2>{pharmacy.titulo}</h2>
                    <div>
                      <span>{pharmacy.avaliacao}</span>
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
                      <li>Alimentos Funcionais</li>
                      <li>Beleza e Perfumaria</li>
                      <li>Cuidados Infantis</li>
                      <li>Higiene e Cuidados</li>
                      <li>Medicamentos</li>
                      <li>Mercearia</li>
                      <li>Primeiros Socorros</li>
                      <li>Testes</li>
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
                  {pharmacy.cardapio.map((produtos) => (
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

                  {pharmacy.cardapio.map((produtos) => (
                    <C.Modal
                      className={modalOpen ? 'visivel' : ''}
                      key={pharmacy.id}
                    >
                      <C.ModalContent>
                        <C.Close onClick={() => setModalOpen(false)}>X</C.Close>
                        <C.ModalImage src={produtos.foto} alt={produtos.nome} />
                        <C.DescriptionModal>
                          <h3>{produtos.nome}</h3>
                          <p>{getDescricao(produtos.descricao)}</p>
                          <span>A partir de {formatPreco(produtos.preco)}</span>
                          <Link to={'/Pharmacy'}>
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
                  {pharmacy.cardapio.map((produtos) => (
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
                <h4>Medicamentos</h4>
                <C.Medicamento>
                  {pharmacy.cardapio.map((produtos) => (
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

export default StorePharmacy
