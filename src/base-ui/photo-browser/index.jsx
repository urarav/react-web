import IconClose from "@/assets/svg/IconClose";
import IconLeftArrow from "@/assets/svg/IconLeftArrow";
import IconRightArrow from "@/assets/svg/IconRightArrow";
import PropTypes from "prop-types";
import React, { memo, useEffect, useRef, useState } from "react";
import { PhotoBrowserWrapper } from "./style";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import IconArrowBottom from "@/assets/svg/IconArrowBottom";
import Indicator from "../indicate";
import classNames from "classnames";
import IconArrowTop from "@/assets/svg/IconArrowTop";

const PhotoBrowser = memo((props) => {
  const { onClose, photoList } = props;
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const nodeRef = useRef();
  const [activeIdx, setActiveIdx] = useState(0);
  const [isNext, setIsNext] = useState(false);
  const [isDisplay, setIsDisplay] = useState(true);
  function handleToogleImg(isNext = true) {
    return () => {
      let newIdx = activeIdx + (isNext ? 1 : -1),
        length = photoList.length;
      if (newIdx < 0) newIdx = length - 1;
      else if (newIdx > length - 1) newIdx = 0;
      setActiveIdx(newIdx);
      setIsNext(isNext);
    };
  }
  function handleClickImgItem(idx) {
    return () => {
      setActiveIdx(idx);
      setIsNext(idx > activeIdx);
    };
  }
  return (
    <PhotoBrowserWrapper isNext={isNext}>
      <section className="close" onClick={onClose}>
        <IconClose />
      </section>
      <section className="preview">
        <div className="preview-btn" onClick={handleToogleImg(false)}>
          <IconLeftArrow width="77" height="77" />
        </div>
        <SwitchTransition mode="out-in">
          <CSSTransition
            key={photoList[activeIdx]}
            classNames="pic"
            timeout={250}
            nodeRef={nodeRef}
          >
            <img
              ref={nodeRef}
              className="preview-img"
              src={photoList[activeIdx]}
              alt=""
            />
          </CSSTransition>
        </SwitchTransition>
        <div className="preview-btn" onClick={handleToogleImg(true)}>
          <IconRightArrow width="77" height="77" />
        </div>
      </section>
      <section className="gallery">
        <div className="gallery-desc">
          <h4>
            {activeIdx}/{photoList.length}：Here is the image
            {`[${activeIdx}]'s`} description
          </h4>
          <p onClick={(e) => setIsDisplay(!isDisplay)}>
            <span>{isDisplay ? "隐藏" : "显示"}照片列表</span>
            {isDisplay ? <IconArrowBottom /> : <IconArrowTop />}
          </p>
        </div>
        <div
          className="gallery-list"
          style={{ height: isDisplay ? "67px" : "0" }}
        >
          <Indicator activeIdx={activeIdx}>
            {photoList.map((li, idx) => (
              <li
                key={li}
                onClick={handleClickImgItem(idx)}
                className={classNames("gallery-list__item", {
                  "is-active": idx === activeIdx,
                })}
              >
                <img src={li} alt="" />
              </li>
            ))}
          </Indicator>
        </div>
      </section>
    </PhotoBrowserWrapper>
  );
});

PhotoBrowser.propTypes = {
  onClose: PropTypes.func,
  photoList: PropTypes.array,
};

export default PhotoBrowser;
