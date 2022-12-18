import PropTypes from "prop-types";
import React, { memo, useRef } from "react";
import { useEffect } from "react";
import { IndicatorWrapper } from "./style";

const Indicator = memo((props) => {
  const scrollRef = useRef();
  const { activeIdx } = props;
  useEffect(() => {
    const { current: scrollEle } = scrollRef;
    const activeItem = scrollEle?.children[activeIdx];
    const scrollEleScrollWidth = scrollEle.scrollWidth;
    const scrollEleClientWidth = scrollEle.clientWidth;
    const maxScrollWidth = scrollEleScrollWidth - scrollEleClientWidth;
    let scrollDistance =
      activeItem.offsetLeft +
      activeItem.clientWidth * 0.5 -
      scrollEleClientWidth * 0.5;
    scrollDistance < 0 && (scrollDistance = 0);
    scrollDistance > maxScrollWidth && (scrollDistance = maxScrollWidth);
    scrollEle.style.transform = `translateX(${-scrollDistance}px)`;
  }, [activeIdx]);
  return (
    <IndicatorWrapper>
      <ul className="content-list" ref={scrollRef}>
        {props.children}
      </ul>
    </IndicatorWrapper>
  );
});

Indicator.propTypes = {
  activeIdx: PropTypes.number,
};

export default Indicator;
