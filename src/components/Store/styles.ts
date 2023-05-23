import styled from 'styled-components'

export const verificado =
  'https://img.icons8.com/material-sharp/14/verified-account.png'

export const Card = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  border: 1px solid #f2f2f2;
  border-radius: 12px;
  transition: all 0.2s linear;
  cursor: pointer;

  &:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    transform: scale(1.02);
  }

  h3 {
    margin-top: 4px;
    margin-left: 12px;
    font-size: 14px;
    font-weight: 500;
  }
`

export const Item = styled(Card)`
  display: flex;
  position: relative;
`
export const Logo = styled.img`
  width: 100px;
`

export const NomeRest = styled.h3`
  font-weight: 500;
  font-size: 16px;
`
export const Selo = styled.img`
  width: 13px;
`
export const Merchant = styled.div`
  display: block;
  margin-left: 8px;

  span {
    font-size: 14px;
    font-weight: 400;
    margin-left: 8px;
  }
`
export const TituloMer = styled.div`
  display: flex;
  align-items: center;

  h3 {
    font-weight: 600;
    margin-right: 8px;
  }
`
