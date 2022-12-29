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
`;
