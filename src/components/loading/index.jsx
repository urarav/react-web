import React, { memo } from "react";
import { LoadingWrapper } from "./style";

const Loading = memo(() => {
  return (
    <LoadingWrapper>
      <ul className="list">
        <li className="list-item" style={{ "--delay": "0.2s" }}></li>
        <li className="list-item" style={{ "--delay": "0.4s" }}></li>
        <li className="list-item" style={{ "--delay": "0.6s" }}></li>
        <li className="list-item" style={{ "--delay": "0.8s" }}></li>
        <li className="list-item" style={{ "--delay": "1s" }}></li>
      </ul>
    </LoadingWrapper>
  );
});

export default Loading;
