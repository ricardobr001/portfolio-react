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

      img {
        height: auto;
        width: 100%;
      }
    }

    p {
      font-size: 28px;
    }
  }
`
