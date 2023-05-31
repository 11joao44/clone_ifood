import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  corPrincipal: '#f7f7f7',
  corSecundaria: '#fff',
  corTerceira: '#ea1d2c',
  corText1: '#000',
  corText2: '#717171',
  corText3: '#3e3e3e',
  corInput: '#a6a6a6'
}

export const GlobalCss = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    box-sizing: border-box;
    list-style: none;

    a {
      text-decoration: none;
    }
  }

  body {
    background-color: ${cores.corSecundaria};
    color: ${cores.corText1}
  }

`

type Props = {
  size?: 'small' | 'large'
}

export const Container = styled.div<Props>`
  max-width: ${(props) => (props.size === 'large' ? '2000px' : '1280px')};
  width: 100%;
  margin: 0 auto;
`
