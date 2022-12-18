import { getEntireRoomInfo } from "@/services/modules/entire";
import * as actionTypes from "./constants";

const changeCurrentPageAction = (currentPage) => ({
  type: actionTypes.CHANGE_CURRENT_PAGE,
  currentPage,
});

const changePageSizeAction = (pageSize) => ({
  type: actionTypes.CHANGE_PAGE_SIZE,
  pageSize,
});

const changeTotalCountAction = (totalCount) => ({
  type: actionTypes.CHANGE_TOTAL_COUNT,
  totalCount,
});

const changeRoomListAction = (roomList) => ({
  type: actionTypes.CHANGE_ROOM_LIST,
  roomList,
});

const changeIsLoadingAction = (isLoading) => ({
  type: actionTypes.CHNAGE_IS_LOADING,
  isLoading,
});

const fetchEntireDataAction = (currentPage = 0) => {
  return async function (dispatch, getState) {
    dispatch(changeIsLoadingAction(true));
    try {
      const {
        entire: { pageSize },
      } = getState();
      const { list: roomList, totalCount } = await getEntireRoomInfo(
        currentPage * pageSize,
        pageSize
      );
      dispatch(changeTotalCountAction(totalCount));
      dispatch(changeRoomListAction(roomList));
    } finally {
      dispatch(changeIsLoadingAction(false));
    }
  };
};

export {
  changeCurrentPageAction,
  changePageSizeAction,
  changeTotalCountAction,
  changeRoomListAction,
  fetchEntireDataAction,
};
