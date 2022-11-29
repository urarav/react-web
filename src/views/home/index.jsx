import request from "@/services";
import React, { memo, useEffect, useState } from "react";

const Home = memo(() => {
  const [infoList, setInfoList] = useState({});
  useEffect(() => {
    request
      .get({
        url: "/home/highScore",
      })
      .then((res) => {
        setInfoList(res);
      });
  }, []);

  return (
    <div>
      <h1>{infoList.title}</h1>
      <h3>{infoList.subtitle}</h3>
      <ul>
        {infoList.list?.map((item, idx) => (
          <li key={idx}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
});

export default Home;
