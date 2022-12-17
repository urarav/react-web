import styled from "styled-components";

export const EntireFilterWrapper = styled.ul`
  display: flex;
  gap: 12px;
  border-bottom: 1px solid #f2f2f2;
  padding: 8px 24px;

  .item {
    text-align: center;
    border-radius: 3px;
    padding: 6px 12px;
    white-space: nowrap;
    cursor: pointer;
    border: 1px solid #dce0e0;
    transition: all 250ms ease;

    &:hover {
      background-color: #f2f2f2;
    }

    &.is-active {
      color: #fff;
      background-color: ${(props) => props.theme.color.secondaryColor};
    }
  }
`;
