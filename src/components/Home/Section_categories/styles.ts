import styled from 'styled-components'
import { cores } from '../../../styles'

export const Categories = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
`
export const Categorie = styled.div`
  width: 404px;
  height: 214px;
  border-radius: 20px;
  position: relative;
  cursor: pointer;
  color: ${cores.corSecundaria};
  transition: all 0.3s cubic-bezier(0, 0, 0.5, 1);

  &:hover {
    transform: scale(102%);
  }

  h2 {
    position: absolute;
    top: 32px;
    left: 24px;
    font-weight: 600;
    font-size: 32px;
  }

  a {
    position: absolute;
    bottom: 32px;
    left: 24px;
    font-size: 16px;
    text-decoration: none;
    color: ${cores.corSecundaria};
    padding: 8px 24px;
    background-color: rgb(0, 0, 0, 0.15);
    border-radius: 16px;
  }

  img {
    position: absolute;
    bottom: 0;
    right: 8px;
  }
`

export const Restaurant = styled(Categorie)`
  background-color: ${cores.corTerceira};
`
export const Market = styled(Categorie)`
  background-color: #b6d048;
`
export const MultiCategories = styled.div`
  position: relative;
  justify-content: center;
  display: flex;
  margin-top: 80px;
  gap: 140px;

  a {
    text-decoration: none;
  }

  h3 {
    margin-top: 8px;
    margin-left: 8px;
    text-align: center;
    font-size: 16px;
    color: ${cores.corText1};
    font-weight: 600;
  }
`
export const Drinks = styled(Categorie)`
  background-color: #f6d553;
  border-radius: 8px;
  width: 188px;
  height: 48px;

  img {
    margin-right: 16px;
  }
`
export const Pharmacy = styled(Categorie)`
  background-color: #f9879c;
  border-radius: 8px;
  width: 188px;
  height: 48px;

  img {
    margin-right: 35px;
  }
`
export const Petshop = styled(Categorie)`
  background-color: #8c60c5;
  border-radius: 8px;
  width: 188px;
  height: 48px;

  img {
    margin-right: 16px;
  }
`
