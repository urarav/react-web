import styled from "styled-components";

export const EntireMainWrapper = styled.div`
  position: relative;

  .title {
    margin: 30px 24px;
    font-size: 22px;
    color: #222;
  }

  .list {
    display: flex;
    flex-wrap: wrap;
    padding: 0 16px;
  }

  .is-empty__mask {
    position: absolute;
    inset: 0;
    background-color: rgba(255, 255, 255, 0.8);
  }
`;
