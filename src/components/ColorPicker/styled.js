import styled from 'styled-components'

export const Button = styled.button`
  border-radius: 50%;
  width: 34px;
  height: 34px;
  background: ${({ color }) => (color ? color : '#282828')};
  border: 2px solid #fff;
  box-shadow: 0px 0px 0px 2px
    ${({ active }) => (active ? '#282828' : '#B5B5B5')};
`
