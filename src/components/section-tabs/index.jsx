import PropTypes from "prop-types";
import React, { memo } from "react";
import classNames from "classnames";
import { useState } from "react";
import { SectionTabsWrapper } from "./style";

const SectionTabs = memo((props) => {
  const { tabsInfo, handleTabClick } = props;
  const [activeIdx, setActiveIdx] = useState(0);
  const handleClickItem = (idx, name) => () => {
    setActiveIdx(idx);
    handleTabClick(name);
  };
  return (
    <SectionTabsWrapper>
      {tabsInfo.map((li, idx) => (
        <li
          onClick={handleClickItem(idx, li)}
          className={classNames("item", { "is-active": idx === activeIdx })}
          key={idx}
        >
          {li}
        </li>
      ))}
    </SectionTabsWrapper>
  );
});

SectionTabs.propTypes = {
  tabsInfo: PropTypes.array,
  handleTabClick: PropTypes.func,
};

export default SectionTabs;
