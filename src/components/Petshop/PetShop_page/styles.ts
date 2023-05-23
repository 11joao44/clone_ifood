import styled from 'styled-components'
import { cores } from '../../../styles'

export const Section = styled.section`
  margin-top: 96px;
`

export const CardCategorie = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
`

export const Promo = styled.div`
  display: flex;
  justify-content: center;
  gap: 32px;
  padding: 40px 0;

  img {
    border-radius: 12px;
    width: 642px;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0, 0, 0.5, 1);

    &:hover {
      transform: scale(105%);
    }
  }
`
export const FamousiFood = styled.div`
  margin: 56px 0;
`
export const Titulo = styled.div`
  display: flex;
  justify-content: space-between;

  h2 {
    font-size: 24px;
    font-weight: 500;
  }

  span {
    font-weight: 400;
    font-size: 14px;
    cursor: pointer;
    color: ${cores.corTerceira};
  }
`

export const Carrousel = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px 0;
  gap: 16px;
`

export const Store = styled.div`
  margin: 40px 0;

  button {
    width: 100%;
    background-color: #fff;
    color: ${cores.corTerceira};
    font-size: 14px;
    font-weight: 500;
    margin: 40px 0;

    &:hover {
      background-color: ${cores.corTerceira};
      color: #fff;
    }
  }

  h2 {
    font-size: 24px;
    font-weight: 500;
    margin: 24px 0;
  }
`

export const Template = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 416px);
  grid-gap: 16px;
`
