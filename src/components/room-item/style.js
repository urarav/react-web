import styled from "styled-components";

export const RoomItemWrapper = styled.li`
  width: ${(props) =>
    props.isGallery
      ? `calc((100% - ${props.col - 1} * 16px) / ${props.col})`
      : `${100 / props.col}%`};
  padding: ${(props) => (props.isGallery ? 0 : 8)}px;
  flex-shrink: 0;

  @media screen and (max-width: 768px) {
    width: 100%;
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: 50%;
  }

  .item {
    height: 100%;

    &-img {
      position: relative;
      border-radius: 4px;
      overflow: hidden;

      &:hover .item-img__ctrl {
        opacity: 1;
        visibility: visible;
      }

      &__box {
        position: relative;
        padding: 66.6% 0 0;

        img {
          position: absolute;
          top: 0;
          width: 100%;
          height: 100%;
          transition: all 0.5s;
          object-fit: cover;

          &:hover {
            transform: scale(1.1);
            filter: brightness(1.1) contrast(1.1);
          }
        }
      }

      &__ctrl {
        inset: 0;
        opacity: 0;
        visibility: hidden;
        z-index: 1;
        display: flex;
        position: absolute;
        transition: all 1s ease;
        justify-content: space-between;

        .btn {
          width: 83px;
          color: #fff;
          display: flex;
          cursor: pointer;
          justify-content: center;
          align-items: center;

          &.left {
            background: linear-gradient(
              to left,
              transparent,
              rgba(0, 0, 0, 0.25)
            );
          }

          &.right {
            background: linear-gradient(
              to right,
              transparent,
              rgba(0, 0, 0, 0.25)
            );
          }
        }
      }

      &__slider {
        position: absolute;
        bottom: 10px;
        width: 30%;
        margin: 0 auto;
        left: 0;
        right: 0;
        z-index: 2;

        .dot-box {
          width: ${100 / 5}%;

          .dot {
            display: block;
            margin: auto;
            border-radius: 50%;
            background-color: #ffffffcc;

            &.is-active {
              height: 8px;
              width: 8px;
              background-color: #fff;
            }

            &:not(.is-active) {
              height: 6px;
              width: 6px;
            }
          }
        }
      }
    }

    &-desc {
      margin: 10px 0 5px;
      font-weight: 700;
      font-size: 12px;
      color: ${(props) => props.verifyColor};
    }

    &-name {
      font-size: 16px;
      font-weight: 700;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    &-price {
      margin: 8px 0 0;
    }

    &-rate {
      font-size: 12px;
      display: flex;
      align-items: center;
      font-weight: 600;
      margin: 8px 0 0;

      &__count {
        margin: 0 2px 0 4px;
      }

      .MuiRating-icon {
        margin-right: -2px;
      }
    }
  }
`;
