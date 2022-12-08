import IconMoreArrow from "@/assets/svg/IconMoreArrow";
import PropTypes from "prop-types";
import React, { memo } from "react";
import { SectionFooterWrapper } from "./style";

const SectionFooter = memo((props) => {
  const { displayName } = props;
  const name = displayName ? `显示更多${displayName}房源` : "查看全部";
  return (
    <SectionFooterWrapper textColor={displayName ? "#00848A" : "#000"}>
      <div className="more">
        <span className="text">{name}</span>
        <IconMoreArrow />
      </div>
    </SectionFooterWrapper>
  );
});

SectionFooter.propTypes = {
  displayName: PropTypes.string,
};

export default SectionFooter;
