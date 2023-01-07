import styled from "styled-components";

export const LongingItemWrapper = styled.li`
  flex-shrink: 0;
  overflow: hidden;
  border-radius: 4px;
  position: relative;
  width: calc((100% - 16 * 4px) / 5);

  @media screen and (max-width: 768px) {
    width: calc((100% - 16px) / 2);
  }

  .img {
    width: 100%;
  }

  .mask {
    height: 60%;
    left: 0;
    right: 0;
    bottom: 0;
    position: absolute;
    background-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.5) 3%,
      rgba(0, 0, 0, 0) 100%
    );
  }

  .desc {
    left: 0;
    right: 0;
    color: #fff;
    bottom: 32px;
    text-align: center;
    position: absolute;

    h4 {
      font-size: 18px;
    }

    p {
      margin-top: 5px;
    }
  }
`;
