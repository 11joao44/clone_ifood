import styled from 'styled-components'

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
export const Logo = styled.img`
  width: 72px;
`
