import React, { memo, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import HeaderCenter from "./c-cpns/header-center";
import HeaderLeft from "./c-cpns/header-left";
import HeaderRight from "./c-cpns/header-right";
import { HeaderWrapper, ContentWrapper } from "./style";
import headerData from "@/assets/mock/header.json";
import { changeIsSearchAction } from "@/store/modules/main";
import HeaderInfo from "./c-cpns/header-info";

const AppHeader = memo(() => {
  const { isFixed, isSearch } = useSelector(
    (state) => ({
      isFixed: state.main.isFixed,
      isSearch: state.main.isSearch,
    }),
    shallowEqual
  );
  const dispatch = useDispatch();
  function handleClickMask() {
    dispatch(changeIsSearchAction(false));
  }

  const [tabIdx, setTabIdx] = useState("tab1");
  return (
    <HeaderWrapper>
      <ContentWrapper isSearch={isSearch} isFixed={isFixed}>
        <HeaderLeft />
        <HeaderCenter onTabChange={setTabIdx} />
        <HeaderRight />
        {isSearch && <HeaderInfo tabInfo={headerData[tabIdx]} />}
      </ContentWrapper>
      {isSearch && <div className="mask" onClick={handleClickMask}></div>}
    </HeaderWrapper>
  );
});

export default AppHeader;
