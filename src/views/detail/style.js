import styled from "styled-components";

export const DetailWrapper = styled.div`
  .grid {
    display: grid;
    grid-template-rows: repeat(2, 300px);
    grid-template-columns: 2fr repeat(2, 1fr);
    &:hover {
      .item-mask {
        opacity: 1;
      }
    }

    > .item:first-child {
      grid-row: 1 / 3;
    }

    .item {
      border: 1px solid #000;
      position: relative;
      overflow: hidden;

      &:hover {
        .item-img {
          transform: scale(1.1);
        }
        .item-mask {
          opacity: 0;
        }
      }

      &-img {
        transition: all 0.5s ease;
        object-fit: cover;
        width: 100%;
        height: 100%;
      }

      &-mask {
        position: absolute;
        inset: 0;
        opacity: 0;
        transition: opacity 0.5s ease;
        background-color: rgba(0, 0, 0, 0.5);
      }
    }
  }


`;
