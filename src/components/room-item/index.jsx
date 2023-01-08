import PropTypes from "prop-types";
import React, { Fragment, memo, useRef, useState } from "react";
import { Rating } from "@mui/material";
import { RoomItemWrapper } from "./style";
import { Carousel } from "antd";
import IconLeftArrow from "@/assets/svg/IconLeftArrow";
import IconRightArrow from "@/assets/svg/IconRightArrow";
import Indicator from "@/base-ui/indicate";
import classNames from "classnames";

const RoomItem = memo((props) => {
  const {
    roomInfo: {
      verify_info,
      picture_url,
      picture_urls,
      name,
      price,
      star_rating,
      star_rating_color,
      reviews_count,
      bottom_info,
    },
    col,
    isGallery,
    handleClick,
  } = props;

  const sliderRef = useRef();
  const [activeIdx, setActiveIdx] = useState(0);

  const length = picture_urls?.length;

  function handleBtnClick(isRight) {
    return (e) => {
      e.stopPropagation()
      const { current: slider } = sliderRef;
      isRight ? slider.next() : slider.prev();

      let newIdx = activeIdx + (isRight ? 1 : -1);
      if (newIdx < 0) {
        newIdx = length - 1;
      } else if (newIdx > length - 1) {
        newIdx = 0;
      }
      setActiveIdx(newIdx);
    };
  }
  return (
    <RoomItemWrapper
      verifyColor={verify_info?.text_color ?? "#4e4e4e"}
      col={col}
      isGallery={isGallery}
    >
      <ul
        className="item"
        onClick={() => handleClick && handleClick(props.roomInfo)}
      >
        <li className="item-img">
          {picture_urls ? (
            <Fragment>
              <section className="item-img__ctrl">
                <div className="btn left" onClick={handleBtnClick(false)}>
                  <IconLeftArrow width={24} height={24} />
                </div>
                <div className="btn right" onClick={handleBtnClick(true)}>
                  <IconRightArrow width={24} height={24} />
                </div>
              </section>

              <section className="item-img__slider">
                <Indicator activeIdx={activeIdx}>
                  {picture_urls.map((li, idx) => (
                    <li className="dot-box" key={li}>
                      <span
                        className={classNames("dot", {
                          "is-active": activeIdx === idx,
                        })}
                      ></span>
                    </li>
                  ))}
                </Indicator>
              </section>
              <Carousel ref={sliderRef} dots={false}>
                {picture_urls?.map((item) => (
                  <div key={item} className="item-img__box">
                    <img src={item} alt=""></img>
                  </div>
                ))}
              </Carousel>
            </Fragment>
          ) : (
            <div className="item-img__box">
              <img src={picture_url} alt=""></img>
            </div>
          )}
        </li>
        <li className="item-desc">{verify_info?.messages?.join("•")}</li>
        <li className="item-name">{name}</li>
        <li className="item-price">¥{price}/晚</li>
        <li className="item-rate">
          <Rating
            value={star_rating ?? 5}
            precision={0.1}
            readOnly
            sx={{ fontSize: "12px", color: star_rating_color }}
          />
          <span className="item-rate__count">{reviews_count}</span>
          {bottom_info?.content && (
            <span className="item-rate__content">• {bottom_info?.content}</span>
          )}
        </li>
      </ul>
    </RoomItemWrapper>
  );
});

RoomItem.propTypes = {
  roomInfo: PropTypes.object.isRequired,
  handleClick: PropTypes.func,
};

RoomItem.defaultProps = {
  col: 4,
  isGallery: false,
};

export default RoomItem;
