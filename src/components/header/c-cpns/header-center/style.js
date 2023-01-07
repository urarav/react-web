import styled from "styled-components";
export const CenterWrapper = styled.div`
  .is-collapse {
    width: 300px;
    display: flex;
    cursor: pointer;
    align-items: center;
    border-radius: 40px;
    border: 1px solid #ddd;
    justify-content: space-between;
    ${(props) => props.theme.mixins.boxShadow}

    .text {
      font-weight: 600;
      padding-left: 24px;
      color: ${(props) => (props.theme.isAlpha ? "#fff" : "unset")};
    }

    .icon-wrapper {
      color: #fff;
      margin: 7px;
      width: 32px;
      height: 32px;
      display: flex;
      border-radius: 50%;
      align-items: center;
      justify-content: center;
      background-color: ${(props) => props.theme.color.primaryColor};
    }
  }

  .is-expand {
    ul {
      display: flex;
      font-size: 16px;
      color: ${(props) => (props.theme.isAlpha ? "#fff" : "#222")};

      li {
        margin: 10px 16px;
        position: relative;
        cursor: pointer;
        transition: all 0.5s ease;
        white-space: nowrap;

        &::after {
          content: "";
          position: absolute;
          left: 0;
          top: calc(100% + 8px);
          height: 2px;
          width: 100%;
          background-color: ${(props) =>
            props.theme.isAlpha ? "#fff" : "#222"};
          transform: scale(0);
          transition: all 0.5s ease;
        }

        &:not(.is-active):hover {
          opacity: 0.5;

          &::after {
            transform: scale(1);
          }
        }

        &.is-active::after {
          transform: scale(1);
        }
      }
    }
  }
`;
