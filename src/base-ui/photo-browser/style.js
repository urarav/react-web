import styled from "styled-components";

export const PhotoBrowserWrapper = styled.div`
  inset: 0;
  display: flex;
  position: fixed;
  background-color: #222;
  flex-direction: column;

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
