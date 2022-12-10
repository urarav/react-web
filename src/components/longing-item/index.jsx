import PropTypes from "prop-types";
import React, { memo } from "react";
import { LongingItemWrapper } from "./style";

const LongingItem = memo((props) => {
  const {
    itemInfo: { city, price, picture_url },
  } = props;
  return (
    <LongingItemWrapper>
      <img className="img" src={picture_url} alt="" />
      <section className="mask"></section>
      <section className="desc">
        <h4>{city}</h4>
        <p>{price}</p>
      </section>
    </LongingItemWrapper>
  );
});

LongingItem.propTypes = {
  itemInfo: PropTypes.object,
};

export default LongingItem;
