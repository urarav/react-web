import IconSearch from "@/assets/svg/IconSearch";
import React, { memo } from "react";
import { CenterWrapper } from "./style";
import PropTypes from "prop-types";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { changeIsSearchAction } from "@/store/modules/main";
import { useScroll } from "@/hooks/useScroll";
import { useRef } from "react";
import { useEffect } from "react";

const HeaderCenter = memo((props) => {
  const { isSearch } = useSelector(
    (state) => ({
      isSearch: state.main.isSearch,
    }),
    shallowEqual
  );
  const { onTabChange } = props,
    dispatch = useDispatch(),
    [, scrollY] = useScroll();

  let oldScrollX = useRef(0);
  function handleSearch() {
    dispatch(changeIsSearchAction(true));
  }

  !isSearch && (oldScrollX.current = scrollY);

  useEffect(() => {
    if (isSearch && Math.abs(scrollY - oldScrollX.current) > 30)
      dispatch(changeIsSearchAction(false));
    if (scrollY === 0) dispatch(changeIsSearchAction(true));
  }, [isSearch, scrollY, dispatch]);

  function handleClickItem(e) {
    const {
      currentTarget: parentEle,
      target: {
        dataset: { idx },
      },
    } = e;
    if (idx) {
      const children = parentEle.children;
      for (const child of children) {
        child.classList.toggle("is-active");
      }
      onTabChange(idx);
    }
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
  onTabChange: PropTypes.func,
};

export default HeaderCenter;
