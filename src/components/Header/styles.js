import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { Header, SelectLang } from '../../theme'

export const Container = styled.header`
  /* iPhone 6/7/8 and samsung galaxy s9 */
  @media (max-width: 414px) {
    /* display: flex; */
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
  /* iPhone 6/7/8 and samsung galaxy s9 */
  @media (max-width: 600px) {
    display: none;
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
  background: ${SelectLang.background};
  color: ${SelectLang.color};
  appearance: none;
  border: none;

  option {
    background: ${SelectLang.background};
  }
`
