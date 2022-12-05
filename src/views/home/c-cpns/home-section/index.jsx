import PropTypes from "prop-types";
import React, { memo } from "react";
import { HomeSectionWrapper } from "./style";
import SectionHeader from "@/components/section-header";
import SectionRoom from "@/components/section-room";

const HomeSection = memo((props) => {
  const {
    sectionInfo: { title, subtitle, list: listInfo = [] },
  } = props;
  return (
    <HomeSectionWrapper>
      <SectionHeader title={title} subtitle={subtitle} />
      <SectionRoom listInfo={listInfo} />
    </HomeSectionWrapper>
  );
});

HomeSection.propTypes = {
  sectionInfo: PropTypes.object.isRequired,
};

export default HomeSection;
