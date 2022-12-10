import ScrollView from "@/base-ui/scroll-view";
import LongingItem from "@/components/longing-item";
import RoomItem from "@/components/room-item";
import SectionFooter from "@/components/section-footer";
import SectionHeader from "@/components/section-header";
import PropTypes from "prop-types";
import React, { memo } from "react";
import { HomeGalleryWrapper } from "./style";

const HomeGallery = memo((props) => {
  const {
    sectionInfo: { title, subtitle, list = [] },
    layout_flag,
  } = props;
  return (
    <HomeGalleryWrapper>
      <SectionHeader title={title} subtitle={subtitle} />
      <ScrollView>
        {list.map((li, idx) =>
          layout_flag ? (
            <LongingItem itemInfo={li} key={idx} />
          ) : (
            <RoomItem roomInfo={li} key={idx} col={5} isGallery={true} />
          )
        )}
      </ScrollView>
      {!layout_flag && <SectionFooter displayName="Plus" />}
    </HomeGalleryWrapper>
  );
});

HomeGallery.propTypes = {
  sectionInfo: PropTypes.object.isRequired,
  layout_flag: PropTypes.bool,
};

HomeGallery.defaultProps = {
  layout_flag: false,
};
export default HomeGallery;
