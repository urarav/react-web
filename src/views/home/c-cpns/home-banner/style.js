import styled from "styled-components";

export const BannerWrapper = styled.div`
  width: 100vw;
  aspect-ratio: 20 / 7;
  background: url(${require("@/assets/img/cover_01.jpeg")}) no-repeat
    center/cover;

  @media screen and (max-width: 768px) {
    aspect-ratio: 5 / 3;
  }
`;
