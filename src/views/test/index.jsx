import Indicator from "@/base-ui/indicator";
import React, { memo } from "react";
import { useState } from "react";
import { TestWrapper } from "./style";

const TestIndicator = memo(() => {
  const [activeIdx, setActiveIdx] = useState(0);
  const length = 10;
  function handleClick(isNext = true) {
    let newIdx = activeIdx + (isNext ? 1 : -1);
    if (newIdx < 0) {
      newIdx = length - 1;
    } else if (newIdx > length - 1) {
      newIdx = 0;
    }
    setActiveIdx(newIdx);
  }
  return (
    <TestWrapper>
      <button onClick={() => handleClick(false)}>prev</button>
      <button onClick={() => handleClick(true)}>next</button>
      <Indicator activeIdx={activeIdx}>
        {Array.from({ length }, (v, i) => `item${i}`).map((item) => (
          <li key={item}>
            <button>{item}</button>
          </li>
        ))}
      </Indicator>
    </TestWrapper>
  );
});

export default TestIndicator;
