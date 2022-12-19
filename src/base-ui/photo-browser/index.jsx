import IconClose from "@/assets/svg/IconClose";
import PropTypes from "prop-types";
import React, { memo, useEffect } from "react";
import { PhotoBrowserWrapper } from "./style";

const PhotoBrowser = memo((props) => {
  const { onClose } = props;
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <PhotoBrowserWrapper>
      <section className="close" onClick={onClose}>
        <IconClose />
      </section>
    </PhotoBrowserWrapper>
  );
});

PhotoBrowser.propTypes = {
  onClose: PropTypes.func,
};

export default PhotoBrowser;
