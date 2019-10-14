import styled from 'styled-components'

import wolf from '../../assets/img/wolf.jpg'

export const Container = styled.div`
  /* iPhone 6/7/8 and samsung galaxy s9 */
  @media (max-width: 414px) {
    background-position: -175px;
  }

  /* iPhone X */
  @media screen and (max-width: 375px) and (max-height: 812px) {
    background-position: -210px;
  }

  background: url(${wolf});
  position: relative;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  div {
    color: azure;
    text-align: center;
    font-size: 22px;

    h1 {
      font-family: sans-serif;
      font-size: 75px;
      font-weight: bold;
    }

    h3 {
      margin-top: 5px;
    }
  }
`
