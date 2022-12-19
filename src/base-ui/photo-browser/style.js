import styled from "styled-components";

export const PhotoBrowserWrapper = styled.div`
  position: fixed;
  inset: 0;
  background-color: #222;
  display: flex;
  flex-direction: column;

  .close {
    margin: 16px 28px;
    align-self: flex-end;
    cursor: pointer;
  }
`;
