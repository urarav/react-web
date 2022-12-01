import PropTypes from "prop-types";
import React, { memo } from "react";
import { SectionHeaderWrapper } from "./style";

const SectionHeader = memo((props) => {
  const { title, subTitle } = props;
  return (
    <SectionHeaderWrapper>
      <h2>{title}</h2>
      {subTitle && <p>{subTitle}</p>}
    </SectionHeaderWrapper>
  );
});

SectionHeader.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
};

export default SectionHeader;
