import IconAvatar from "@/assets/svg/IconAvatar";
import IconGlobal from "@/assets/svg/IconGlobal";
import IconMenu from "@/assets/svg/IconMenu";
import React, { memo, useState, useEffect } from "react";
import { RightWrapper } from "./style";

const HeaderRight = memo(() => {
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    function handleClickWindow() {
      setIsShow(false);
    }
    window.addEventListener("click", handleClickWindow, true);
    return () => window.removeEventListener("click", handleClickWindow, true);
  }, []);

  function handleClickProfile() {
    setIsShow(true);
  }

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
        <li className="list-profile" onClick={handleClickProfile}>
          <IconMenu />
          <div className="list-profile__avatar">
            <IconAvatar />
          </div>
          {isShow && (
            <ul className="list-profile__droplist">
              <section className="top">
                <li>注册</li>
                <li>登录</li>
              </section>
              <section className="bottom">
                <li>来爱彼迎发布房源</li>
                <li>开展体验</li>
                <li>帮助</li>
              </section>
            </ul>
          )}
        </li>
      </ul>
    </RightWrapper>
  );
});

export default HeaderRight;
