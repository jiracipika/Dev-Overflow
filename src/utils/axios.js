import axios from "axios"
const BASE_URL = "https://your-render-backend-url.onrender.com/api/"

export default axios.create({
    baseURL: BASE_URL
})
export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: {"Content-Type": "Application/json"},
    withCredentials: true
})