import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { Header } from '../../theme'

export const Container = styled.header`
  /* @media (max-width: 740px) {
    display: flex;
    position: absolute;

    ul {
      float: right;
      justify-content: center;
      align-content: center;

      li {
        display: inline-block;
        text-align: center;
        width: 100%;
      }
    }
  } */

  display: flex;
  justify-content: center;
  align-items: center;

  background: ${Header.background};
  position: relative;
  width: 100%;

  ul {
    margin: 0;
    padding: 0;
    display: block;
    text-align: center;
    list-style: none;
    overflow: hidden;

    li {
      display: inline-block;
      padding: 20px 20px;
    }
  }
`

export const Page = styled(Link)`
  display: inline;
  text-decoration: none;
  color: ${Header.color};
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }

  div {
    display: grid;
    justify-items: center;
    align-items: center;

    strong {
      padding: 5px;
      text-transform: uppercase;
      position: relative;
    }
  }
`

export const Select = styled.select`
  float: right;
  cursor: pointer;
  overflow-y: hidden;
  padding: 2px 15px 2px 15px;
  border-radius: 0px;
  background: ${Header.optionBackground};
  color: ${Header.optionColor};
  appearance: none;
  border: none;

  option {
    background: ${Header.optionBackground};
  }
`
