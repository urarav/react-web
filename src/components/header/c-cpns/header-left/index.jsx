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
      <div onClick={handleClickIconLogo}>
        <IconLogo />
      </div>
    </LeftWrapper>
  );
});

export default HeaderLeft;
