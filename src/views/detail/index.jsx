import PhotoBrowser from "@/base-ui/photo-browser";
import {
  changeIsFixedAction,
  changeIsTopAlphaAction,
} from "@/store/modules/main";
import React, { memo, useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { DetailWrapper } from "./style";

const Detail = memo(() => {
  const { roomInfo } = useSelector(
    (state) => ({
      roomInfo: state.detail.roomInfo,
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  const [IsDisplayPhotoBrowser, setIsDisplayPhotoBrowser] = useState(false);
  useEffect(() => {
    dispatch(changeIsFixedAction(false));
    dispatch(changeIsTopAlphaAction(false));
  }, [dispatch]);

  function handleClickItem() {
    setIsDisplayPhotoBrowser(true);
  }

  function handleClose() {
    setIsDisplayPhotoBrowser(false);
  }
  return (
    <DetailWrapper>
      <ul className="grid">
        {roomInfo.picture_urls?.slice(0, 5)?.map((li) => (
          <li onClick={handleClickItem} className="item" key={li}>
            <img className="item-img" src={li} alt=""></img>
            <div className="item-mask"></div>
          </li>
        ))}
      </ul>
      {IsDisplayPhotoBrowser && (
        <PhotoBrowser onClose={handleClose} photoList={roomInfo.picture_urls} />
      )}
    </DetailWrapper>
  );
});

export default Detail;
