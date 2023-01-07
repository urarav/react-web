import styled from "styled-components";

export const HeaderInfoWrapper = styled.ul`
  li {
    overflow: hidden;
    h5,
    p {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`;
