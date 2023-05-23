import styled from 'styled-components'
import { cores } from '../../../styles'

export const Cabecalho = styled.div`
  background-color: ${cores.corPrincipal};
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 999;
`

export const Container = styled.div`
  background-color: ${cores.corPrincipal};
  padding: 40px 32px;
  margin: 0 auto;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 320px;
`

export const Head = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 88px;
    height: 48px;
    margin-right: 20px;
  }
`

export const Lista = styled.ul`
  display: flex;

  a {
    color: ${cores.corText3};
    text-decoration: none;
    padding: 0 20px;
    font-size: 14px;
    font-weight: 400;
  }
`

export const Login = styled.p`
  font-weight: 700;
`

export const Register = styled.a`
  color: ${cores.corTerceira};
  text-decoration: none;
  padding: 0 32px;
  font-size: 14px;
  font-weight: 500;
`
