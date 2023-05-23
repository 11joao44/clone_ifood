import * as S from './styles'
import * as I from './images'

const Footer = () => (
  <S.FooterContainer>
    <S.Faixa></S.Faixa>
    <S.ExploreCity>
      <h2>Explore por cidades</h2>
      <div>
        <ul>
          <li>
            <a href="#">Belo Horizonte</a>
          </li>
          <li>
            <a href="#">Brasília</a>
          </li>
          <li>
            <a href="#">Campinas</a>
          </li>
          <li>
            <a href="#">Curitiba</a>
          </li>
          <li>
            <a href="#">Goiânia</a>
          </li>
          <li>
            <a href="#">Guarulhos</a>
          </li>
          <li>
            <a href="#">João Pessoa</a>
          </li>
          <li>
            <a href="#">Natal</a>
          </li>
          <li>
            <a href="#">Niterói</a>
          </li>
          <li>
            <a href="#">Porto Alegre</a>
          </li>
          <li>
            <a href="#">Ribeirão Preto</a>
          </li>
          <li>
            <a href="#">Rio de Janeiro</a>
          </li>
          <li>
            <a href="#">Salvador</a>
          </li>
          <li>
            <a href="#">Santo André</a>
          </li>
          <li>
            <a href="#">Santos</a>
          </li>
          <li>
            <a href="#">São Bernardo do Campo</a>
          </li>
          <li>
            <a href="#">São Caetano do Sul</a>
          </li>
          <li>
            <a href="#">São Paulo</a>
          </li>
        </ul>
      </div>
    </S.ExploreCity>
    <S.About>
      <div>
        <h3>iFood</h3>
        <S.AboutList>
          <li>
            <a href="#">Site Institucional</a>
          </li>
          <li>
            <a href="#">Fale conosco</a>
          </li>
          <li>
            <a href="#">Carreiras</a>
          </li>
          <li>
            <a href="#">iFood Colômbia</a>
          </li>
        </S.AboutList>
      </div>
      <div>
        <h3>Descubra</h3>
        <S.AboutList>
          <li>
            <a href="#">Cadastre seu Restaurante ou Mercado</a>
          </li>
          <li>
            <a href="#">iFood Shop</a>
          </li>
          <li>
            <a href="#">iFood Card</a>
          </li>
          <li>
            <a href="#">Blog iFood Empresas</a>
          </li>
        </S.AboutList>
      </div>
      <div>
        <h3>Social</h3>
        <S.Social>
          <li>
            <a href="#">
              <img src={I.face} alt="Facebook" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={I.twitter} alt="Twitter" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={I.youtube} alt="Youtube" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={I.insta} alt="Instagram" />
            </a>
          </li>
        </S.Social>
      </div>
    </S.About>
    <S.Copy>
      <div>
        <img src={I.iFoodGif} alt="iFood" />
        <p>
          © Copyright 2023 - iFood - Todos os direitos reservados iFood com
          Agência de Restaurantes Online S.A.
        </p>
        <p>
          CNPJ 14.380.200/0001-21 / Avenida dos Autonomistas, nº 1496, Vila
          Yara, Osasco/SP - CEP 06.020-902
        </p>
      </div>
      <div>
        <ul>
          <li>
            <a>Termos e condições de uso</a>
          </li>
          <li>
            <a>Código de conduta</a>
          </li>
          <li>
            <a>Privacidade</a>
          </li>
          <li>
            <a>Dicas de segurança</a>
          </li>
        </ul>
      </div>
    </S.Copy>
  </S.FooterContainer>
)

export default Footer
