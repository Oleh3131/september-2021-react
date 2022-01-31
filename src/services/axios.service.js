import axios from 'axios';
import baseURl from "../constants/urls";


export const axiosService = axios.create({baseURl});



