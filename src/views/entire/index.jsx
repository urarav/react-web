import { fetchEntireDataAction } from "@/store/entire/createActions";
import React, { memo, useEffect } from "react";
import { useDispatch } from "react-redux";
import EntireFilter from "./c-cpns/entire-filter";
import EntireMain from "./c-cpns/entire-main";
import EntirePager from "./c-cpns/entire-pager";
import { EntireWrapper } from "./style";

const Entire = memo(() => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchEntireDataAction());
  }, [dispatch]);
  return (
    <EntireWrapper>
      <EntireFilter />
      <EntireMain />
      <EntirePager />
    </EntireWrapper>
  );
});

export default Entire;
