import styled from "styled-components";
export const LeftWrapper = styled.div`
  display: flex;
  color: ${(props) => props.theme.color.primaryColor};

  svg {
    cursor: pointer;
  }
`;
