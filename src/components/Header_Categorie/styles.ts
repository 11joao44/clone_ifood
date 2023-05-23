import styled from 'styled-components'
import { cores } from '../../styles'

export const Cabecalho = styled.div`
  background-color: ${cores.corPrincipal};
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 999;
  margin-bottom: 60px;
`

export const Container = styled.div`
  background-color: ${cores.corPrincipal};
  padding: 16px 32px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Head = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 52px;
    height: 40px;
    margin-right: 32px;
  }
`

export const Lista = styled.ul`
  display: flex;

  a {
    color: ${cores.corText3};
    text-decoration: none;
    padding: 0 8px;
    font-size: 12px;
    font-weight: 300;
  }
`

export const End = styled.div`
  display: flex;
  align-items: center;
`

export const Route = styled.div`
  input {
    color: ${cores.corInput};
    font-weight: 500;
    font-size: 12px;
    padding: 8px;
    background-color: transparent;
    border: none;
    outline: none;
  }
`

export const Sacola = styled.div`
  display: flex;
  align-items: center;

  div {
    font-weight: 300;

    span {
      font-size: 10px;
    }
    p {
      font-size: 9px;
    }
  }
  img {
    width: 26px;
    margin-left: 24px;
    margin-right: 16px;
  }
`

export const Register = styled.a`
  color: ${cores.corTerceira};
  text-decoration: none;
  padding: 0 32px;
  font-size: 14px;
  font-weight: 500;
`
export const Address = styled.div`
  background-color: ${cores.corSecundaria};
  display: flex;
  width: 700px;
  height: 48px;
  border-radius: 8px;

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
