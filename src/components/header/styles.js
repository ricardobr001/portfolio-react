import styled from 'styled-components'
import { Link } from 'react-router-dom'

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

  background: #4d4b4b;
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
  color: #d9d4d4;
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
