import axiosInstance from "./axios.servise2";
import {urlsSecond} from "../config";

const commentService={

    getAll: () => axiosInstance.get(urlsSecond.comments).then(value => value.data)

}


export default commentService;