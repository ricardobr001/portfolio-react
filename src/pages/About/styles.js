import styled from 'styled-components'

import { Page } from '../../theme'

export const Container = styled.div`
  height: 100%;

  div {
    display: flex;
    justify-content: center;
    padding: 50px 40px 0 0;

    div {
      max-width: 500px;
      display: flex;
      flex-direction: column;
      text-align: center;

      p {
        color: ${Page.text};
        font-size: 20px;
        padding: 20px 0 0 0;
      }
    }

    img {
      height: 250px;
      border-radius: 50%;
      margin-top: 100px;
    }
  }
`
