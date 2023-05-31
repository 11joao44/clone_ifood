import styled from 'styled-components'
import { cores } from '../../../styles'

export const Lojas = styled.div`
  padding-top: 100px;
  padding-bottom: 80px;
`

export const Banner = styled.img`
  width: 100%;
  height: 256px;
  object-fit: auto;
`
export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 0;
`

export const Titulos = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  h2 {
    font-size: 32px;
    line-height: 44px;
    font-weight: 400;
  }

  img {
    width: 75px;
  }

  div {
    color: #fcbb00;
    font-size: 14px;
    margin-top: 8px;

    span {
      img {
        margin-right: 8px;
        width: 12px;
      }
    }
  }
`
export const End = styled.div`
  display: flex;
  align-items: center;

  h4 {
    color: #ea1d2c;
    margin-right: 16px;
    cursor: pointer;
  }

  p {
    margin-left: 16px;
    font-size: 12px;
    color: #a6a6a5;
  }

  span {
    color: #fff;
    background-color: #a6a6a5;
    padding: 0 4px;
    border-radius: 20px;
  }
`

export const SubHeader = styled.div`
  display: flex;
  gap: 16px;
`

export const Address = styled.div`
  background-color: ${cores.corSecundaria};
  display: flex;
  width: 946px;
  height: 62px;
  border: 1px solid #a6a6a5;

  img {
    margin: 0 16px;
    width: 25px;
  }

  input {
    color: ${cores.corInput};
    font-weight: 300;
    width: 100%;
    height: 100%;
    background-color: transparent;
    border: none;
    outline: none;
  }
`
export const Entrega = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: 1px solid #a6a6a5;
  width: 140px;
  height: 62px;
  font-size: 14px;

  img {
    margin-top: 2px;
  }
`
export const Time = styled.div`
  border: 1px solid #a6a6a5;
  width: 188px;
  height: 62px;
  padding: 8px 16px;

  p {
    font-size: 14px;
  }

  span {
    font-size: 12px;
  }
`
