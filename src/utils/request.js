import axios from "axios";
const instance=axios.create({
    baseURL:'http://localhost:3000'
})
//拆包
instance.interceptors.response.use((res)=>{
    return res.data
})
export default instance