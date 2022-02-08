import axiosInstance from "./axios.servise2";
import {urlsSecond} from "../config";

const userService={

    getAll: () => axiosInstance.get(urlsSecond.users).then(value => value.data)

}

export default userService;