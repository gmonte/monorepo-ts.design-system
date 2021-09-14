import styled from 'styled-components'

export const ButtonStyled = styled.button`
  border: 1px solid black;
  border-radius: 4px;
  padding: 5px 10px;
  background: rgba(92,147,242,0.7);
  cursor: pointer;

  transition: background .1s ease-in;

  &:active {
    background: rgba(92,147,242,1);
  }
`
