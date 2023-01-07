const BASE_URL = process.env.NODE_ENV === "development" ? "/dev" : "/prod";
const TIMEOUT = 5000;
console.log(process.env.NODE_ENV, process.env.SOON_SEVEN, process.env);
export { BASE_URL, TIMEOUT };
