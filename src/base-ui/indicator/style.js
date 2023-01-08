import styled from "styled-components";

export const IndicatorWrapper = styled.div`
  overflow: hidden;

  .content-list {
    transition: transform 0.5s ease;
    display: flex;
    align-items: center;
    position: relative;

    > * {
      flex-shrink: 0;
    }
  }
`;
