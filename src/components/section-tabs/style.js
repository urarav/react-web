import styled from "styled-components";

export const SectionTabsWrapper = styled.div`
  .item {
    flex-shrink: 0;
    font-size: 17px;
    font-weight: 700;
    flex-basis: 120px;
    text-align: center;
    border-radius: 3px;
    padding: 14px 16px;
    white-space: nowrap;
    border: 0.5px solid #d8d8d8;
    ${(props) => props.theme.mixins.boxShadow}

    &.is-active {
      color: #fff;
      background-color: ${(props) => props.theme.color.secondaryColor};
    }
  }
`;
