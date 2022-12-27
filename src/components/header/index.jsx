import React, { memo, useState } from "react";
import { useSelector } from "react-redux";
import HeaderCenter from "./c-cpns/header-center";
import HeaderLeft from "./c-cpns/header-left";
import HeaderRight from "./c-cpns/header-right";
import { HeaderWrapper } from "./style";
import headerData from "@/assets/mock/header.json";

const AppHeader = memo(() => {
  const { isFixed } = useSelector((state) => ({
    isFixed: state.main.isFixed,
  }));

  const [isSearch, setIsSearch] = useState(false);
  function handleSearch(isSearch) {
    setIsSearch(isSearch);
  }

  const [tabIdx, setTabIdx] = useState("tab1");
  function handleTabChange(idx) {
    setTabIdx(idx);
  }
  return (
    <HeaderWrapper isSearch={isSearch} isFixed={isFixed}>
      <HeaderLeft />
      <HeaderCenter onSearch={handleSearch} onTabChange={handleTabChange} />
      <HeaderRight />
      {isSearch && (
        <ul className="search">
          {headerData[tabIdx].map((item) => {
            const { h, p } = item;
            return (
              <li className="search-item">
                <h5>{h}</h5>
                <p>{p}</p>
              </li>
            );
          })}
        </ul>
      )}
    </HeaderWrapper>
  );
});

export default AppHeader;
