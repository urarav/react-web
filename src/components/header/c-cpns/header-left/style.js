import styled from "styled-components";
export const LeftWrapper = styled.div`
  color: ${(props) => props.theme.color.primaryColor};
  display: flex;
  svg {
    cursor: pointer;
  }
`;
