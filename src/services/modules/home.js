import request from "../request";

export function getGoodPriceInfo() {
  return request.get({
    url: '/home/goodprice',
  });
}
