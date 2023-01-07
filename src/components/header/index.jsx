import React, { memo, useRef, useState } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { HeaderWrapper, ContentWrapper } from "./style";
import { useScroll } from "@/hooks/useScroll";
import HeaderCenter from "./c-cpns/header-center";
import HeaderLeft from "./c-cpns/header-left";
import HeaderRight from "./c-cpns/header-right";
import headerData from "@/assets/mock/header.json";
import HeaderInfo from "./c-cpns/header-info";
import { ThemeProvider } from "styled-components";

const AppHeader = memo(() => {
  const { isFixed, isTopAlpha } = useSelector(
    (state) => ({
      isFixed: state.main.isFixed,
      isTopAlpha: state.main.isTopAlpha,
    }),
    shallowEqual
  );
  const [isSearch, setIsSearch] = useState(false);

  const [, scrollY] = useScroll();
  let oldScrollY = useRef(0);
  if (!isSearch) {
    oldScrollY.current = scrollY;
  }
  if (isSearch && Math.abs(scrollY - oldScrollY.current) > 30) {
    setIsSearch(false);
  }

  const isAlpha = scrollY === 0 && isTopAlpha;

  function handleClickMask() {
    setIsSearch(false);
  }

  const [tabIdx, setTabIdx] = useState("tab1");
  return (
    <ThemeProvider theme={{ isAlpha }}>
      <HeaderWrapper>
        <ContentWrapper isSearch={isAlpha || isSearch} isFixed={isFixed}>
          <HeaderLeft />
          <HeaderCenter
            isSearch={isAlpha || isSearch}
            onSearch={setIsSearch}
            onTabChange={setTabIdx}
          />
          <HeaderRight />
          {(isAlpha || isSearch) && <HeaderInfo tabInfo={headerData[tabIdx]} />}
        </ContentWrapper>
        {isSearch && <div className="mask" onClick={handleClickMask}></div>}
      </HeaderWrapper>
    </ThemeProvider>
  );
});

export default AppHeader;
