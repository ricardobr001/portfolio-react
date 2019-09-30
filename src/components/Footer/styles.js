import styled from 'styled-components'

import { Footer } from '../../theme'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background: ${Footer.background};
  color: ${Footer.color};
  font-size: 20px;
  padding: 20px 20px;

  div {
    display: block;
    justify-content: center;
    align-items: center;
    margin: auto;

    a {
      margin-right: 5px;
      color: ${Footer.linkColor};
      cursor: pointer;
      transition: opacity 0.2s;

      &:hover {
        opacity: 0.7;
      }
    }

    p {
      color: ${Footer.textColor};
      b {
        a {
          color: ${Footer.linkColor};
          cursor: pointer;
          transition: opacity 0.2s;
          text-decoration: none;

          &:hover {
            opacity: 0.7;
          }
        }
      }
    }
  }
`
