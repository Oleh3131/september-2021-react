import axiosServise from "./axios.servise";
import {urls} from "../config";

const carService = {

    getAll: () => axiosServise.get(urls.cars).then(value => value.data),

    updateById: (id,car) => axiosServise.patch(`${urls.cars}/{id}`, car).then(value => value.data)

}

export default carService;