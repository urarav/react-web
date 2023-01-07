import styled from "styled-components";
export const LeftWrapper = styled.div`
  color: ${(props) => {
    const {
      theme: {
        isAlpha,
        color: { primaryColor },
      },
    } = props;
    return isAlpha ? "#fff" : primaryColor;
  }};

  svg {
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    .no-text {
      display: unset;
    }
    .has-text {
      display: none;
    }
  }

  @media screen and (min-width: 768px) {
    .no-text {
      display: none;
    }
    .has-text {
      display: unset;
    }
  }
`;
