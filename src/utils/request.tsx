import { toast } from "react-toastify";
import axios from "axios";
const request = axios.create({ baseURL: "" });

request.interceptors.response.use(
    function (response: any) {
        if (response.data.msg != undefined) {
            if (response.data.status) {
                toast.success(response.data.msg);
            }
            if (!response.data.status) {
                toast.error(response.data.msg);
            }
        }
        return response;
    },
    function (error: any) {
        if (error.response != undefined) {
            toast.error(error.response.data.msg);
            if (error.response.status == 401) {
            }

            if (error.response.status == 302) {
                alert("yolo");
            }
        }
        return Promise.reject(error);
    }
);

export default request;
