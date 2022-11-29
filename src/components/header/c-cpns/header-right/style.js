import styled from "styled-components";
export const RightWrapper = styled.div`
  justify-self: right;
  .list {
    display: flex;
    &-btn {
      padding: 12px;
      font-size: 14px;
      cursor: pointer;
      font-weight: 600;
      border-radius: 22px;
      color: ${(props) => props.theme.textColor.primaryColor};
      &:hover {
        background-color: #f7f7f7;
      }
    }
    &-profile {
      gap: 12px;
      display: flex;
      margin-left: 8px;
      border-radius: 21px;
      align-items: center;
      border: 1px solid #ddd;
      padding: 5px 5px 5px 12px;
      &__avatar {
        width: 30px;
        height: 30px;
        color: #717171;
        position: relative;

        &::before {
          top: -4px;
          content: "";
          right: -3px;
          width: 13px;
          height: 13px;
          position: absolute;
          border-radius: 50%;
          border: 2px solid #fff;
          background-color: ${(props) => props.theme.color.primaryColor};
        }
      }
    }
  }
`;
