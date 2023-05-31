import styled from 'styled-components'
import { cores } from '../../../styles'

export const Lojas = styled.div`
  display: flex;
  gap: 64px;
  padding-top: 100px;
  padding-bottom: 80px;
`
export const Header = styled.div`
  padding: 30px 0;
  display: flex;
`

export const Logo = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid;
  margin-right: 16px;
`

export const Titulos = styled.div`
  h2 {
    font-size: 16px;
    line-height: 44px;
    font-weight: 400;
  }

  span {
    font-size: 12px;
    margin-right: 4px;
  }

  p {
    margin-left: 8px;
    font-size: 12px;
    color: #a6a6a5;
  }

  div {
    display: flex;
    align-items: center;
    margin: 8px 0;
  }

  h3 {
    color: #ea1d2c;
    cursor: pointer;
    font-size: 12px;
  }
`
export const SideBar = styled.div`
  margin: 32px 0;

  ul {
    display: flex;
    flex-direction: column;
    gap: 16px;
    font-weight: 400;
    color: ${cores.corText2};
    font-size: 14px;

    a {
      cursor: pointer;
    }
  }

  span {
    margin: 16px 0;
    display: block;
    width: 100%;
    height: 1px;
    background-color: ${cores.corText3};
  }
`

export const SubHeader = styled.div`
  display: flex;
  gap: 16px;
`

export const Address = styled.div`
  background-color: ${cores.corSecundaria};
  display: flex;
  width: 90%;
  height: 48px;
  border: 1px solid #a6a6a5;
  border-radius: 8px;
  padding-left: 20px;
  border-color: ${cores.corSecundaria};

  img {
    margin: 0 16px;
    width: 20px;
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
  justify-content: center;
  gap: 8px;
  border: 1px solid ${cores.corSecundaria};
  border-radius: 8px;
  width: 300px;
  height: 40px;
  font-size: 12px;

  img {
    transform: rotate(270deg);
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
