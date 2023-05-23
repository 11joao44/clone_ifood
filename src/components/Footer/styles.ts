import styled from 'styled-components'
import { cores } from '../../styles'

export const FooterContainer = styled.footer`
  background-color: ${cores.corSecundaria};
  padding: 0 20px;
  margin-top: 30px;

  section {
    padding: 40px 0 10px;
  }

  a {
    font-weight: 400;
    font-size: 14px;
    color: ${cores.corText2};
    text-decoration: none;
  }
`

export const Faixa = styled.div`
  width: 100vw;
  margin-left: calc((100vw - 1278px) / 2 * -1);
  margin-top: 32px;
  padding: 32px 0;
  background-color: ${cores.corPrincipal};
`

export const ExploreCity = styled.section`
  h2 {
    font-size: 16px;
    color: ${cores.corText3};
    margin-bottom: 30px;
    font-weight: 600;
  }

  ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin-bottom: 30px;
    grid-gap: 30px;
  }
`
export const About = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin-bottom: 30px;
  grid-gap: 30px;
  border-top: 1px solid #dcdcdc;

  h3 {
    margin-bottom: 30px;
    font-weight: 500;
    font-size: 16px;
    color: ${cores.corText3};
  }
`

export const AboutList = styled.ul`
  li {
    margin-bottom: 30px;
  }
`

export const Social = styled.ul`
  display: flex;

  a {
    margin-right: 20px;

    img {
      width: 30px;
      opacity: 50%;
    }
  }
`

export const Copy = styled.section`
  text-align: center;
  margin-bottom: 32px;
  border-top: 1px solid #dcdcdc;

  ul {
    display: flex;
    justify-content: center;
    gap: 32px;
    margin: 8px 0;
  }
  img {
    width: 100px;
  }
`
