import styled from "styled-components";

export const SectionFooterWrapper = styled.div`
  width: fit-content;
  margin-top: 10px;

  .more {
    display: flex;
    font-size: 17px;
    cursor: pointer;
    font-weight: 700;
    align-items: center;
    color: ${(props) => props.textColor};

    &:hover {
      text-decoration: underline;
    }

    .text {
      margin-right: 6px;
    }
  }
`;
