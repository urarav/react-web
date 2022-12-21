import styled from "styled-components";

export const PhotoBrowserWrapper = styled.div`
  inset: 0;
  display: flex;
  position: fixed;
  background-color: #222;
  flex-direction: column;
  user-select: none;

  .close {
    cursor: pointer;
    margin: 16px 28px;
    align-self: flex-end;
  }

  .preview {
    flex: 1;
    height: 0;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .preview-img {
      height: 100%;
    }

    .preview-btn {
      cursor: pointer;
    }
  }

  .gallery {
    max-width: 105vh;
    align-self: center;
    margin-bottom: 20px;

    &-desc {
      display: flex;
      justify-content: space-between;
      margin: 12px 0;
      color: #fff;

      h4 {
        font-weight: 400;
      }

      p {
        cursor: pointer;

        > svg {
          margin-left: 8px;
        }
      }
    }

    &-list {
      transition: all 250ms ease;
      overflow: hidden;

      &__item {
        & + .gallery-list__item {
          margin-left: 12px;
        }

        img {
          height: 67px;
          opacity: 0.5;
          transition: all 250ms ease;
          cursor: pointer;
        }

        &.is-active > img {
          opacity: 1;
        }
      }
    }
  }

  .pic-enter {
    opacity: 0;
    transform: translateX(${(props) => (props.isNext ? "100" : "-100")}%);
  }

  .pic-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: all 0.25s ease-in-out;
  }

  .pic-exit {
    opacity: 1;
  }

  .pic-exit-active {
    opacity: 0;
    transition: all 0.25s ease-in-out;
  }
`;
