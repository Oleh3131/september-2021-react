import axios from "axios";

import baseURL from '../config/urlsTwo'

const axiosInstance = axios.create({baseURL});

export default axiosInstance;