import styled from 'styled-components'

export const Container = styled.div`
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

      h1 {
        font-size: 34px;
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
