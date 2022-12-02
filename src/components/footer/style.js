import styled from "styled-components";

export const FooterWrapper = styled.footer`
  border-top: 1px solid #ebebeb;

  .content {
    width: 1032px;
    margin: auto;
    padding: 48px 0;

    &-top {
      display: flex;

      &__item {
        flex: 1;

        > ul {
          font-weight: 600;
          margin-top: 16px;
          color: rgb(118, 118, 118);

          > li {
            cursor: pointer;
            margin-bottom: 4px;
          }
        }
      }
    }

    &-bottom {
      display: flex;
      margin-top: 16px;
      padding-top: 16px;
      color: rgb(118, 118, 118);
      border-top: 1px solid #ebebeb;
      justify-content: space-between;

      &__left {
        gap: 8px;
        display: flex;
        font-weight: 600;
        align-items: center;

        img {
          vertical-align: baseline;
        }
      }

      &__right {
        gap: 16px;
        display: flex;
      }
    }
  }
`;
