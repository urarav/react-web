import styled from "styled-components";

export const RoomItemWrapper = styled.li`
  width: ${(props) =>
    props.isGallery
      ? `calc((100% - ${props.col - 1} * 16px) / ${props.col})`
      : `${100 / props.col}%`};
  padding: ${(props) => (props.isGallery ? 0 : 8)}px;
  flex-shrink: 0;

  .item {
    height: 100%;

    &-img {
      position: relative;
      padding: 66.6% 0 0;
      overflow: hidden;
      border-radius: 4px;

      > img {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        transition: all 0.5s;

        &:hover {
          transform: scale(1.1);
          filter: brightness(1.1) contrast(1.1);
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
