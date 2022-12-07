import PropTypes from "prop-types";
import React, { memo } from "react";
import { Rating } from "@mui/material";
import { RoomItemWrapper } from "./style";

const RoomItem = memo((props) => {
  const {
    roomInfo: {
      verify_info,
      picture_url,
      name,
      price,
      star_rating,
      star_rating_color,
      reviews_count,
      bottom_info,
    },
    col = 4,
  } = props;
  return (
    <RoomItemWrapper
      verifyColor={verify_info?.text_color ?? "#4e4e4e"}
      col={col}
    >
      <ul className="item">
        <li className="item-img">
          <img src={picture_url} alt=""></img>
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
};

export default RoomItem;
