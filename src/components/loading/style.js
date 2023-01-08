import styled from "styled-components";

export const LoadingWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  place-content: center;

  .list {
    gap: 5px;
    height: 90px;
    display: flex;
    will-change: transform;
    transform: rotate(0.5turn);

    &-item {
      width: 50px;
      border-radius: 4px;
      animation: animate 2s ease-out var(--delay) infinite;
    }

    @keyframes animate {
      from,
      to {
        height: 10px;
        background: #ffd166;
      }
      25% {
        height: 90px;
        background: #06d6a0;
      }
      50% {
        height: 40px;
        background: #118ab2;
      }
      75% {
        height: 90px;
        background: #ef476f;
      }
    }
  }
`;
