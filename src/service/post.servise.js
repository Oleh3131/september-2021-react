import axiosInstance from "./axios.servise2";
import {urlsSecond} from "../config";


export const postService={

    getAll: () => axiosInstance.get(urlsSecond.posts).then(value => value.data)

}

export default postService;