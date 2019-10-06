import styled from 'styled-components'

import { Link } from '../../theme'

export const Container = styled.a`
  font-weight: bold;
  text-decoration: none;
  color: ${Link.text};
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }
`
