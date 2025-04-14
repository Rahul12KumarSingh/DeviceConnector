import { authEndPoint } from "../utils/endPoints.js";
import { request } from "../utils/request.js";
import { authContext } from "../store/auth-context.js";

export const login = async (payload) => {
    try {
        const res = await request("POST", authEndPoint.LOGIN_API, payload);
        console.log("res : ", res.data);

    } catch (err) {
        console.log("error : ", err.message);
        alert(`${err.message}`);
    }
}


export const register = async (payload) => {
    try {
        const res = await request("POST", authEndPoint.REGISTER_API, payload);

       return res.data ;
    } catch (err) {
        console.log("err : ", err.message);
        alert(`${err.message}`);
        return null ;
    }
}


export const sendOtp = async (payload) => {
    try {
        const res = await request("POST", authEndPoint.SENDOTP_API, payload);
        console.log("res : ", res.data)
    } catch (err) {
        console.log("error : ", err.message);
        alert(`${err.message}`);
    }
}


export const logout = async () => {

}