import { useEffect } from 'react'
import { Container } from '../../../styles'

type Stores = {
  id: number
  titulo: string
  tipo: string
  avaliacao: number
  capa: string
  cardapio: {
    id: number
    preco: number
    nome: string
    foto: string
    descricao: string
    porcao?: string
  }
  lancamentos?: {
    id: number
    preco: number
    nome: string
    descricao: string
    foto: string
  }
}

const Store = () => {
  //   useEffect(() => {
  //     fetch('http://localhost:3001/Restaurant')
  //       .then((res) => res.json())
  //       .then((res) => set)
  //   }, [])

  return (
    <Container>
      <div>
        <img src="" alt="Banner" />
      </div>
    </Container>
  )
}

export default Store
