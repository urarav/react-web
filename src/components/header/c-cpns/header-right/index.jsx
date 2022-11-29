import IconAvatar from "@/assets/svg/IconAvatar";
import IconGlobal from "@/assets/svg/IconGlobal";
import IconMenu from "@/assets/svg/IconMenu";
import React, { memo } from "react";
import { RightWrapper } from "./style";

const HeaderRight = memo(() => {
  return (
    <RightWrapper>
      <ul className="list">
        <li className="list-btn">
          <span>登录</span>
        </li>
        <li className="list-btn">
          <span>注册</span>
        </li>
        <li className="list-btn">
          <IconGlobal />
        </li>
        <li className="list-profile">
          <IconMenu />
          <div className="list-profile__avatar">
            <IconAvatar />
          </div>
        </li>
      </ul>
    </RightWrapper>
  );
});

export default HeaderRight;
