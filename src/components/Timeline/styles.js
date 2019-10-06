import styled from 'styled-components'

// import { Milestone } from '../../theme'

export const Container = styled.div`
  h1 {
    text-align: center;
    font-size: 20px;
    padding: 30px 0 30px 0;
  }

  a {
    cursor: pointer;
    text-decoration: none;
    font-weight: bold;
    font-size: 20px;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.7;
    }
  }
`
