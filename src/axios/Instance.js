import axios from "axios";

const instance = axios.create({
    baseURL:'https://dummyjson.com/',
    timeout:10000,
    headers:{"Content-Type":'application/json'}
}
)
instance.interceptors.request.use((config)=>{
    // console.log(config)  
    return config
},
(error)=>{
    return Promise.reject(error) 
},
)
instance.interceptors.response.use((response)=>{
    console.log(response)
return response
},
(error)=>{
    return Promise.reject(error) 
}
)

export default instance