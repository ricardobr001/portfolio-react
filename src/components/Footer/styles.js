import styled from 'styled-components'

import { Footer, SelectLang } from '../../theme'

export const Container = styled.div`
  /* iPhone 6/7/8 and samsung galaxy s9 */
  @media (max-width: 414px) {
    display: flex;
    flex-direction: column;
    text-align: center;

    div {
      padding: 5px;

      select {
        justify-content: center;
        cursor: pointer;
        padding: 2px 15px 2px 15px;
        border-radius: 0px;
        background: ${SelectLang.background};
        color: ${SelectLang.color};
        appearance: none;
        border: none;

        option {
          background: ${SelectLang.background};
        }
      }
    }
  }

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

  select {
    display: none;
  }
`
