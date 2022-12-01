import IconSearch from "@/assets/svg/IconSearch";
import React, { memo } from "react";
import { CenterWrapper } from "./style";

const HeaderCenter = memo(() => {
  return (
    <CenterWrapper>
      <span className="text">搜索房源和体验</span>
      <div className="icon-wrapper">
        <IconSearch />
      </div>
    </CenterWrapper>
  );
});

export default HeaderCenter;
