import styled from "styled-components";

export const ContentWrapper = styled.header`
  width: 100%;
  z-index: 3;
  position: ${(props) => (props.isFixed ? "fixed" : "relative")};
  height: ${(props) => (props.isSearch ? "160" : "80")}px;
  transition: all ease 0.25s;
  background-color: ${(props) =>
    props.theme.isAlpha ? "transparent" : "#fff"};
  border-bottom: 1px solid
    ${(props) => (props.theme.isAlpha ? "transparent" : "#eee")};
  padding: 0 24px;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr max-content 1fr;

  @media screen and (max-width: 768px) {
    grid-template-columns: max-content 1fr max-content;
    column-gap: 8px;
  }

  .search {
    display: flex;
    align-items: center;
    border-radius: 33px;
    grid-column: 1 / span 3;
    justify-self: center;
    height: 66px;
    width: 56.6vw;
    background-color: #f7f7f7;

    &-item {
      flex: 1;
      padding: 0 32px;
      & + .search-item {
        border-left: 1px solid #ddd;
      }
      p {
        color: #717171;
      }
    }

    @media screen and (max-width: 768px) {
      height: 44px;
      &-item {
        padding: 0 16px;
      }
    }
  }
`;

export const HeaderWrapper = styled.div`
  .mask {
    position: fixed;
    inset: 0;
    z-index: 2;
    background-color: rgba(0, 0, 0, 0.3);
  }
`;
