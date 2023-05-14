import instance from "@/utils/request";
export function bannerList(params){
    return instance({
        url:'/banner',
        method:'GET',
        params
    })
}