import styled, { css, keyframes } from 'styled-components'

import { Button } from '../../theme'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  } to {
    transform: rotate(360deg);
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 30px 0 30px 0;

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

      span {
        font-size: 34px;
        font-weight: bold;
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

export const Buttonn = styled.button.attrs(props => ({
  disabled: props.reloading
}))`
  background: ${Button.background};
  color: ${Button.color};
  font-size: 16px;
  border-radius: 8px;
  border: none;
  width: 100px;
  padding: 10px 0 10px 0;
  margin-top: 10px;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  ${props =>
    props.reloading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`

export const DivButtons = styled.div`
  display: flex;
  flex-direction: row !important;
  justify-content: space-evenly;
  width: 300px;
`

export const Master = styled.div`
  ${props =>
    !props.showLyric &&
    css`
      height: 100%;
    `}
`

export const LyricButton = styled.a`
  background: ${Button.background};
  color: ${Button.color};
  font-size: 16px;
  border-radius: 8px;
  border: none;
  width: 100px;
  padding: 10px 0 10px 0;
  margin-top: 10px;
  text-decoration: none;
`

export const LyricNotFound = styled.div`
  background: ${Button.background};
  color: ${Button.color};
  font-size: 16px;
  border-radius: 8px;
  border: none;
  width: 100px;
  padding: 10px 0 10px 0;
  margin-top: 10px;
  text-decoration: none;
  cursor: not-allowed;
  opacity: 0.6;
`
