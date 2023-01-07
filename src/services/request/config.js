const BASE_URL = process.env.NODE_ENV === "development" ? "/dev" : "/prod";
const TIMEOUT = 5000;
export { BASE_URL, TIMEOUT };
