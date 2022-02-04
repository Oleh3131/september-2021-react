import baseURL from "../config/urls";
import axios from 'axios'


const axiosServise = axios.create({baseURL});


export default axiosServise;