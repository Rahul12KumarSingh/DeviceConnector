const BASE_URL = "http://192.168.137.1:4000/api/v1" ;


export const authEndPoint = {
    LOGIN_API : BASE_URL + "/auth/login" ,
    REGISTER_API : BASE_URL +  "/auth/signup" ,
    SENDOTP_API : BASE_URL +  "/auth/generate-otp" ,
}

