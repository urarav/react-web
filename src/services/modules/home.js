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

export function getDiscountInfo() {
  return request.get({
    url: "/home/discount",
  });
}

export function getHotRecommendInfo() {
  return request.get({
    url: "/home/hotrecommenddest",
  });
}
