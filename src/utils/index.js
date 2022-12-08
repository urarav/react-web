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

export function isEmpty(source = {}) {
  return Object.keys(source).length === 0;
}
