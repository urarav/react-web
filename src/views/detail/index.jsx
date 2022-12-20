import PhotoBrowser from "@/base-ui/photo-browser";
import React, { memo, useState } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { DetailWrapper } from "./style";

const Detail = memo(() => {
  const { roomInfo } = useSelector(
    (state) => ({
      roomInfo: state.detail.roomInfo,
    }),
    shallowEqual
  );

  const [IsDisplayPhotoBrowser, setIsDisplayPhotoBrowser] = useState(false);

  function handleClickItem() {
    setIsDisplayPhotoBrowser(true);
  }

  function handleClose() {
    setIsDisplayPhotoBrowser(false);
  }
  return (
    <DetailWrapper>
      <section className="grid">
        {roomInfo.picture_urls?.slice(0, 5)?.map((li) => (
          <li onClick={handleClickItem} className="item" key={li}>
            <img className="item-img" src={li} alt=""></img>
            <div className="item-mask"></div>
          </li>
        ))}
      </section>
      {IsDisplayPhotoBrowser && (
        <PhotoBrowser onClose={handleClose} photoList={roomInfo.picture_urls} />
      )}
    </DetailWrapper>
  );
});

export default Detail;
