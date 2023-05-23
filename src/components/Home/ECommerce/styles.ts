import styled from 'styled-components'
import { cores } from '../../../styles'

export const SectionLink = styled.section`
  display: flex;
  justify-content: space-evenly;
  margin: 70px 0;
`

export const Box = styled.div`
  position: relative;
  width: 516px;
  height: 450px;

  img {
    width: 380px;
  }
`

export const Background = styled.img`
  position: absolute;
  bottom: 28px;
`

export const Mensagem = styled.div`
  position: absolute;
  top: 62px;
  right: 16px;
`

export const Images = styled.div`
  position: absolute;
  bottom: 0;
  left: 12px;

  img {
    width: 205px;
  }
`

export const Paragrafo1 = styled.p`
  font-size: 36px;
  color: #1a1a1a;
  font-weight: 500;
`

export const Paragrafo2 = styled.p`
  font-size: 16px;
  color: ${cores.corText2};
  margin: 25px 24px 16px 0;
`
