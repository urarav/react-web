import styled from "styled-components";

export const RoomItemWrapper = styled.div`
  width: 25%;
  padding: 8px;

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
  }
`;
