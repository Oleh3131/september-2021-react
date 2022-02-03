import {IuserTwo} from "../interface/user.interface2";
import axios, {AxiosResponse} from "axios";

export const userService={

    getAll:():Promise<AxiosResponse<IuserTwo[]>> =>axios.get('https://jsonplaceholder.typicode.com/users')

}
