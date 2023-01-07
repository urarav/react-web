import styled from "styled-components";

export const ScrollViewWrapper = styled.div`
  position: relative;
  width: 100%;

  .btn {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: absolute;
    top: 50%;
    z-index: 1;
    background-color: #fff;
    box-shadow: rgb(0 0 0 / 14%) 0px 1px 1px 1px !important;

    &.left {
      left: 0;
      transform: translate(-50%, -50%);
    }

    &.right {
      right: 0;
      transform: translate(50%, -50%);
    }

    &:hover svg {
      transform: scale(1.1);
      color: ${(props) => props.theme.color.secondaryColor};
    }
  }

  .content {
    overflow: hidden;

    &-list {
      gap: 16px;
      display: flex;
      position: relative;
      transition: all 0.5s ease;
    }
  }
`;
