import styled from 'styled-components'
import { Link } from 'react-router-dom'

import arrow from '../../assets/img/arrow.png'
import { Header, SelectLang } from '../../theme'

export const Container = styled.header`
  /* Break layout on footer */
  @media (max-width: 804px) {
    display: flex;
    flex-direction: column;
  }

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
  /* Break layout on footer */
  @media (max-width: 804px) {
    position: relative;
    top: 0;
    right: 0;
  }

  position: absolute;
  top: 50%;
  right: 30px;
  transform: translateY(-50%);
  float: right;
  cursor: pointer;
  overflow-y: hidden;
  padding: 2px 15px 2px 15px;
  border-radius: 0px;
  color: ${SelectLang.color};
  appearance: none;
  background: url(${arrow}) ${SelectLang.background} no-repeat 115%;
  border: none;

  option {
    background: ${SelectLang.background};
  }
`
