import styled from "styled-components";

export const EntirePagerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  margin: 30px 0;

  .MuiPaginationItem-icon {
    font-size: 24px;
  }

  .MuiPaginationItem-page {
    margin: 0 8px;

    &:hover {
      text-decoration: underline;
    }

    &.Mui-selected {
      background-color: #222;
      color: #fff;

      &:hover {
        background-color: #000;
      }
    }
  }

  p {
    color: #222;
  }
`;
