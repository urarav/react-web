import React, { Fragment, memo } from "react";
import { EntirePagerWrapper } from "./style";
import { Pagination } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchEntireDataAction } from "@/store/entire/createActions";

const EntirePager = memo(() => {
  const { totalCount, currentPage, pageSize, roomList } = useSelector(
    (state) => ({
      totalCount: state.entire.totalCount,
      currentPage: state.entire.currentPage,
      pageSize: state.entire.pageSize,
      roomList: state.entire.roomList,
    })
  );
  const startCount = currentPage * pageSize + 1;
  const endCount = (currentPage + 1) * pageSize;
  const pageCount = Math.ceil(totalCount / pageSize);

  const dispatch = useDispatch();
  function handlePageChange(e, page) {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    dispatch(fetchEntireDataAction(page - 1));
  }
  return (
    <EntirePagerWrapper>
      {!!roomList.length && (
        <Fragment>
          <Pagination onChange={handlePageChange} count={pageCount} />
          <p>
            第 {startCount} – {endCount} 个房源，共 {totalCount} 个
          </p>
        </Fragment>
      )}
    </EntirePagerWrapper>
  );
});

export default EntirePager;
