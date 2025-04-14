import axios from 'axios';

const axiosInstance = axios.create({});
    
export const request = async (method , url , payload , headers , params) => {
    return axiosInstance({
        method : `${method}` ,
        url : `${url}` ,
        data : payload ? payload : {},
        headers : headers ? headers : null,
        params : params ? params : null
    }) ;
}

