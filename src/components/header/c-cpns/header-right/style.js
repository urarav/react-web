import styled from "styled-components";
export const RightWrapper = styled.div`
  justify-self: right;

  .list {
    display: flex;

    &-btn {
      padding: 12px;
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
      cursor: pointer;
      margin-left: 8px;
      position: relative;
      border-radius: 21px;
      align-items: center;
      border: 1px solid #ddd;
      padding: 5px 5px 5px 12px;
      ${(props) => props.theme.mixins.boxShadow}

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

      &__droplist {
        position: absolute;
        right: 0;
        background-color: #fff;
        top: 130%;
        width: 240px;
        border-radius: 10px;
        box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.08),
          -4px -2px 8px rgba(0, 0, 0, 0.08);

        .top,
        .bottom {
          padding: 10px 0;
        }

        .top {
          border-bottom: 1px solid #eee;

          li:first-child {
            font-weight: 600;
          }
        }

        li {
          padding: 12px;
          transition: all 0.25s ease;
          
          &:hover {
            background-color: #f5f5f5;
          }
        }
      }
    }
  }
`;
