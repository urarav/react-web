import IconLeftArrow from "@/assets/svg/IconLeftArrow";
import IconRightArrow from "@/assets/svg/IconRightArrow";
import React, { memo, useEffect, useState } from "react";
import { useRef } from "react";
import { ScrollViewWrapper } from "./style";

const ScrollView = memo((props) => {
  const { children } = props,
    [isShowBtnR, setIsShowBtnR] = useState(false),
    [isShowBtnL, setIsShowBtnL] = useState(false),
    [activeTabIdx, setActiveTabIdx] = useState(0),
    scrollTabsRef = useRef(),
    restOffsetRef = useRef();

  useEffect(() => {
    const { current: scrollTab } = scrollTabsRef,
      clientWidth = scrollTab.clientWidth,
      scrollWidth = scrollTab.scrollWidth,
      restOffset = scrollWidth - clientWidth;
    restOffsetRef.current = restOffset;
    setIsShowBtnR(restOffset > 0);
  }, [children]);

  function handleClickControlBtn(isRight = true) {
    return () => {
      const { current: scrollTab } = scrollTabsRef,
        newIdx = activeTabIdx + (isRight ? 1 : -1),
        childAtNewIdx = scrollTab.children[newIdx],
        childOffsetAtNewIdx = childAtNewIdx.offsetLeft;
      scrollTab.style.transform = `translateX(-${childOffsetAtNewIdx}px)`;
      setActiveTabIdx(newIdx);
      setIsShowBtnR(restOffsetRef.current > childOffsetAtNewIdx);
      setIsShowBtnL(childOffsetAtNewIdx > 0);
    };
  }

  return (
    <ScrollViewWrapper>
      {isShowBtnL && (
        <button className="btn left" onClick={handleClickControlBtn(false)}>
          <IconLeftArrow />
        </button>
      )}
      {isShowBtnR && (
        <button className="btn right" onClick={handleClickControlBtn(true)}>
          <IconRightArrow />
        </button>
      )}
      <div className="content">
        <ul className="content-list" ref={scrollTabsRef}>
          {children}
        </ul>
      </div>
    </ScrollViewWrapper>
  );
});

export default ScrollView;
