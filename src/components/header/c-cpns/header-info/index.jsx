import PropTypes from "prop-types";
import React, { memo } from "react";
import { HeaderInfoWrapper } from "./style";

const HeaderInfo = memo((props) => {
  const { tabInfo } = props;
  return (
    <HeaderInfoWrapper className="search">
      {tabInfo.map((item, idx) => {
        const { h, p } = item;
        return (
          <li key={idx} className="search-item">
            <h5>{h}</h5>
            <p>{p}</p>
          </li>
        );
      })}
    </HeaderInfoWrapper>
  );
});

HeaderInfo.propTypes = {
  tabInfo: PropTypes.array.isRequired,
};

export default HeaderInfo;
