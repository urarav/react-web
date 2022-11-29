import IconLogo from "@/assets/svg/IconLogo";
import React, { memo } from "react";
import { LeftWrapper } from "./style";

const HeaderLeft = memo(() => {
  return (
    <LeftWrapper>
      <IconLogo />
    </LeftWrapper>
  );
});

export default HeaderLeft;
