import styled from 'styled-components'

export type Props = {
  text?: string
  size?: 'small' | 'large'
}

const Button = ({ text, size = 'small' }: Props) => (
  <Link size={size}>{text}</Link>
)

export default Button

const Link = styled.button<Props>`
  background-color: #ea1d2c;
  color: #fff;
  border-radius: 6px;
  text-transform: none;
  font-size: ${(props) => (props.size === 'large' ? '18px' : '16px')};
  width: ${(props) => (props.size === 'large' ? '136px' : '104px')};
  height: ${(props) => (props.size === 'large' ? '48px' : '44px')};
  border: none;
  cursor: pointer;
`
