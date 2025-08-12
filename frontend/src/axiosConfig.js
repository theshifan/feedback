import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000"; // change if needed
// load token on app startup
const token = localStorage.getItem("access");
if (token) axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

export default axios;
