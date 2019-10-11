import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  h1 {
    font-size: 26px;
  }

  .equilizer {
    height: 200px;
    width: 200px;
    transform: rotate(180deg);
  }

  .bar {
    fill: white;
    width: 18px;
    animation: equalize 1.25s steps(25, end) 0s infinite;
  }

  .bar:nth-child(1) {
    animation-duration: 1.9s;
  }

  .bar:nth-child(2) {
    animation-duration: 2s;
  }

  .bar:nth-child(3) {
    animation-duration: 2.3s;
  }

  .bar:nth-child(4) {
    animation-duration: 2.4s;
  }

  .bar:nth-child(5) {
    animation-duration: 2.1s;
  }

  @keyframes equalize {
    0% {
      height: 60px;
    }
    4% {
      height: 50px;
    }
    8% {
      height: 40px;
    }
    12% {
      height: 30px;
    }
    16% {
      height: 20px;
    }
    20% {
      height: 30px;
    }
    24% {
      height: 40px;
    }
    28% {
      height: 10px;
    }
    32% {
      height: 40px;
    }
    36% {
      height: 60px;
    }
    40% {
      height: 20px;
    }
    44% {
      height: 40px;
    }
    48% {
      height: 70px;
    }
    52% {
      height: 30px;
    }
    56% {
      height: 10px;
    }
    60% {
      height: 30px;
    }
    64% {
      height: 50px;
    }
    68% {
      height: 60px;
    }
    72% {
      height: 70px;
    }
    76% {
      height: 80px;
    }
    80% {
      height: 70px;
    }
    84% {
      height: 60px;
    }
    88% {
      height: 50px;
    }
    92% {
      height: 60px;
    }
    96% {
      height: 70px;
    }
    100% {
      height: 80px;
    }
  }
`
