import request from "../request";

export function getGoodPriceInfo() {
  return request.get({
    url: "/home/goodprice",
  });
}

export function getHighScoreInfo() {
  return request.get({
    url: "/home/highscore",
  });
}
