import PropTypes from "prop-types";
import React, { memo } from "react";
import { SectionHeaderWrapper } from "./style";

const SectionHeader = memo((props) => {
  const { title, subtitle } = props;
  return (
    <SectionHeaderWrapper>
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </SectionHeaderWrapper>
  );
});

SectionHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default SectionHeader;
