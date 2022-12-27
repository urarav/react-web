import IconSearch from "@/assets/svg/IconSearch";
import React, { memo, useState } from "react";
import { CenterWrapper } from "./style";
import PropTypes from "prop-types";

const HeaderCenter = memo((props) => {
  const [isSearch, setIsSearch] = useState(false);
  const { onSearch, onTabChange } = props;
  function handleSearch() {
    setIsSearch(true);
    onSearch(true);
  }

  function handleClickItem(e) {
    const {
      currentTarget: parentEle,
      target: {
        dataset: { idx },
      },
    } = e;
    const children = parentEle.children;
    for (const child of children) {
      child.classList.toggle("is-active");
    }
    onTabChange(idx);
    // ele.classList.add("is-active");
  }
  return (
    <CenterWrapper>
      {!isSearch && (
        <section className="is-collapse" onClick={handleSearch}>
          <span className="text">搜索房源和体验</span>
          <div className="icon-wrapper">
            <IconSearch />
          </div>
        </section>
      )}
      {isSearch && (
        <section className="is-expand">
          <ul onClick={handleClickItem}>
            <li className="is-active" data-idx="tab1">
              搜索房源
            </li>
            <li data-idx="tab2">搜索体验</li>
          </ul>
        </section>
      )}
    </CenterWrapper>
  );
});

HeaderCenter.propTypes = {
  onSearch: PropTypes.func,
  onTabChange: PropTypes.func,
};

export default HeaderCenter;
