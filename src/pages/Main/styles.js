import styled from 'styled-components'

import wolf from '../../assets/wolf.jpg'

export const Container = styled.div`
  /* iPhone 6/7/8 and samsung galaxy s9 */
  @media (max-width: 414px) {
    background-position: -175px;
  }

  /* iPhone X */
  @media screen and (max-width: 375px), screen and (max-height: 812px) {
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

    h1 {
      font-size: 500%;
      font-weight: 700;
    }

    h4 {
    }
  }
`
