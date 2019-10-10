import styled from 'styled-components'

import { Button } from '../../theme'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  .display-enter,
  .display-appear {
    opacity: 0;
    height: 0px;
  }
  .display-enter-active,
  .display-appear-active {
    opacity: 1;
    height: 100%;
    transition: opacity 200ms;
  }
  .display-exit {
    opacity: 1;
  }
  .display-exit-active {
    opacity: 0;
    transition: opacity 200ms;
  }
`

export const Row = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    display: flex;
    text-align: center;
    max-width: 400px;

    div {
      display: flex;
      flex-direction: column;
      align-items: center;

      h1 {
        font-size: 34px;
      }

      button {
        background: ${Button.background};
        color: ${Button.color};
        font-size: 16px;
        border-radius: 8px;
        border: none;
        width: 100px;
        padding: 10px 0 10px 0;
        margin-top: 10px;
      }
    }

    p {
      font-size: 28px;
    }
  }
`

export const HvrBox = styled.div`
  max-height: 200px;
  position: relative;
  display: inline-block;
  overflow: hidden;
  max-width: 100%;
  height: auto;

  img {
    height: auto;
    max-width: 100%;
    width: 100%;
  }

  div {
    justify-content: center;
    align-items: center;
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    color: #fff;
    padding: 15px;
    -moz-transition: all 0.4s ease-in-out 0s;
    -webkit-transition: all 0.4s ease-in-out 0s;
    -ms-transition: all 0.4s ease-in-out 0s;
    transition: all 0.4s ease-in-out 0s;

    &:hover {
      opacity: 1;
    }

    p {
      font-family: sans-serif;
      font-size: 20px;
    }
  }
`
