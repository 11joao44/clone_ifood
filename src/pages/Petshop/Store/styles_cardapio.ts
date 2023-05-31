import styled from 'styled-components'
import { cores } from '../../../styles'

export const Cardapio = styled.div`
  margin: 40px 0;
  width: 100%;

  h4 {
    margin: 32px 0;
    font-weight: 500;
    font-size: 16px;
  }
`

export const Desconto = styled.div`
  display: flex;
  gap: 12px;
`
export const MaisVendido = styled.div`
  display: flex;
  gap: 12px;
`
export const Medicamento = styled.div`
  display: flex;
  gap: 12px;
`

export const DestaqueItem = styled.div`
  width: 122px;
  height: 278px;
  padding: 16px;
  position: relative;
  cursor: pointer;

  img {
    display: flex;
    justify-content: center;
    width: 90px;
    height: 90px;
    object-fit: contain;
    margin-bottom: 8px;
  }

  h5 {
    margin: 8px 0;
    font-size: 12px;
    font-weight: 300;
  }

  p {
    color: ${cores.corText2};
    margin: 8px 0;
    font-size: 12px;
    font-weight: 400;
  }

  span {
    color: ${cores.corText1};
    font-size: 14px;
    font-weight: 400;
  }
`
export const Modal = styled.div`
  position: fixed;
  display: none;
  align-items: center;
  justify-content: center;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);

  &.visivel {
    display: flex;
  }
`
export const ModalContent = styled.div`
  padding: 64px;
  width: 50%;
  height: 55%;
  background-color: ${cores.corPrincipal};
  color: ${cores.corText2};
  display: flex;
  align-items: center;
  gap: 24px;
  position: relative;

  h3 {
      text-align: center;
      font-size: 14px;
      font-weight: bold;
    }

    p {
      width: 100%;
      margin-top: 16px;
      margin-bottom: 8px;
      font-size: 14px;
      font-weight: 300;
      line-height: 22px;
    }

    a {
      text-decoration: none;
      padding: 4px 8px;
      background-color: ${cores.corSecundaria};
      color: ${cores.corText2};
      font-size: 14px;
      font-weight: bold;
    }
  }
`
export const ModalImage = styled.img`
  width: 516px;
  height: 516px;
  object-fit: contain;
`

export const DescriptionModal = styled.div`
  p {
    margin: 56px 0;
  }

  a {
    position: absolute;
    right: 16px;
    bottom: 16px;
    background-color: ${cores.corTerceira};
    padding: 16px;
    display: flex;
    gap: 64px;
    align-items: center;
    justify-content: space-between;
    opacity: 0.5;
    trasition: ease-in-out 0.5s;

    span {
      color: ${cores.corPrincipal};
      font-size: 14px;
      font-weight: 500;
    }

    &:hover {
      opacity: 1;
      trasition: ease-in-out 0.5s;
    }
  }
`
export const Close = styled.span`
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
  font-weight: bold;
  font-size: 18px;
  color: #000;
`
