import IconAirbnb from "@/assets/svg/IconAirbnb";
import IconLogo from "@/assets/svg/IconLogo";
import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
import { LeftWrapper } from "./style";

const HeaderLeft = memo(() => {
  const navigate = useNavigate();
  function handleClickIconLogo() {
    navigate("/home");
  }
  return (
    <LeftWrapper>
      <div className="has-text" onClick={handleClickIconLogo}>
        <IconLogo />
      </div>
      <div className="no-text" onClick={handleClickIconLogo}>
        <IconAirbnb size="32px" />
      </div>
    </LeftWrapper>
  );
});

export default HeaderLeft;
