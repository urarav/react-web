import PropTypes from "prop-types";
import React, { memo, useCallback, useState } from "react";
import { HomeSectionWrapper } from "./style";
import SectionHeader from "@/components/section-header";
import SectionRoom from "@/components/section-room";
import SectionTabs from "@/components/section-tabs";
import SectionFooter from "@/components/section-footer";

const HomeSection = memo((props) => {
  const {
    sectionInfo: {
      title,
      subtitle,
      list = [],
      dest_list = [],
      dest_address = [],
    },
    layout_flag,
  } = props;

  const [initialName = ""] = Object.keys(dest_list),
    [name, setName] = useState(initialName),
    tabsInfo = dest_address.map((item) => item.name),
    handleTabClick = useCallback((name) => setName(name), []);

  let listInfo = null,
    col = 4;
  if (layout_flag) {
    listInfo = dest_list[name];
    col = 3;
  } else {
    listInfo = list;
  }
  return (
    <HomeSectionWrapper>
      <SectionHeader title={title} subtitle={subtitle} />
      {layout_flag && (
        <SectionTabs tabsInfo={tabsInfo} handleTabClick={handleTabClick} />
      )}
      <SectionRoom listInfo={listInfo} col={col} />
      <SectionFooter displayName={name} />
    </HomeSectionWrapper>
  );
});

HomeSection.propTypes = {
  sectionInfo: PropTypes.object.isRequired,
};

export default HomeSection;
