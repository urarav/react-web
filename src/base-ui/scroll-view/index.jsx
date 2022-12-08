import React, { memo, useEffect, useState } from "react";
import { useRef } from "react";
import { ScrollViewWrapper } from "./style";

const ScrollView = memo((props) => {
  const { children } = props,
    [isShowBtn_r, setIsShowBtn_r] = useState(false),
    scrollTabsRef = useRef();
  useEffect(() => {
    const { current: scrollTab } = scrollTabsRef,
      clientWidth = scrollTab.clientWidth,
      scrollWidth = scrollTab.scrollWidth,
      restOffset = scrollWidth - clientWidth;
    setIsShowBtn_r(restOffset > 0);
  }, [children]);
  return (
    <ScrollViewWrapper ref={scrollTabsRef}>
      <button>left</button>
      {isShowBtn_r && <button>right</button>}
      {children}
    </ScrollViewWrapper>
  );
});

export default ScrollView;
