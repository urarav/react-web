// 样式字符串转对象
export function styleStrToObject(styleStr) {
  const obj = {};
  const kvArr = styleStr
    .toLowerCase()
    .replace(/-(.)/g, (m, p) => p.toUpperCase())
    .replace(/;\s?$/, "")
    .split(";");
  kvArr.forEach((kv) => {
    const [k, v] = kv.split(":");
    if (k && v) obj[k.trim()] = v.trim();
  });
  return obj;
}

// 判断对象是否为空对象
export function isEmpty(source = {}) {
  return Object.keys(source).length === 0;
}

// 节流函数
export function throttle(fn, interval) {
  let oldTime = Date.now(),
    newTime,
    timer = null;

  return function (...args) {
    clearTimeout(timer);
    newTime = Date.now();
    if (newTime - oldTime > interval) {
      fn.apply(this, args);
      oldTime = Date.now();
    } else {
      timer = setTimeout(() => {
        fn.apply(this, args);
      }, interval);
    }
  };
}

// 防抖函数
export function debounce(fn, wait) {
  let timer = null;
  return function (...args) {
    timer && clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    });
  };
}
