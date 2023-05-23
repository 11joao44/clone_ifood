import styled from 'styled-components'
import { cores } from '../../../styles'

export const Section = styled.section`
  margin: 175px auto 50px;
  width: 100%;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 842px;
`

export const Texto = styled.div`
  text-align: center;

  h1 {
    font-weight: 600;
    margin: 15px;
    font-size: 32px;
  }

  p {
    font-size: 16px;
    margin-bottom: 40px;
    font-weight: 300;
  }
`

export const Form = styled.form`
  display: flex;
  text-align: center;
  justify-content: center;
  width: 100%;
  background: ${cores.corPrincipal};
`

export const Address = styled.div`
  background-color: ${cores.corSecundaria};
  display: flex;
  width: 85%;
  margin-right: 16px;

  img {
    margin: 0 16px;
    width: 25px;
  }

  input {
    color: ${cores.corInput};
    font-weight: 100;
    width: 100%;
    height: 100%;
    background-color: transparent;
    border: none;
    outline: none;
  }
`
