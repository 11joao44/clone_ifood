import styled from 'styled-components'

export const SectionRest = styled.section`
  padding: 70px 0;
`
export const Linha = styled.div`
  border-top: 2px solid #a6a09f9d;
`

export const Carrousel = styled.div`
  position: relative;
  display: flex;
  gap: 10px;
`
export const Titulo = styled.h2`
  margin: 60px 0 32px;
`

export const Item = styled.div`
  position: relative;
  width: 250px;
  height: 132px;
  padding: 20px 16px;
  display: flex;
  align-items: center;
  border: 1px solid #a6a29f;
  border-radius: 8px;
  cursor: pointer;
  trasition: ease 0.2s;

  &:hover {
    border: 1px solid #a6a09f9d;
  }
`
export const Logo = styled.img`
  border-radius: 50%;
  width: 56px;
  margin-right: 8px;
`
export const NomeMarket = styled.h3`
  width: 150px;
  font-size: 14px;
  font-weight: 400;
`
