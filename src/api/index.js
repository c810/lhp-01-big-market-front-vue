import axios from "axios";

axios.interceptors.request.use((config) => {
    // 拦截请求，做需要的处理，比如：
    // 1. 添加 token
    // 2. 添加全局 loading
    // 3. 添加全局错误处理
    // 4. ...
    return config;
}, (error) => {
    // 拦截http code为非200的请求，可以做提示或者其他处理
    // ...
})

axios.interceptors.response.use((response) => {
    // 拦截响应，做需要的处理，比如根据后端返回的code做全局提示处理，封装返回值等
    return response;
}, (error) => {
    // 拦截http code为非200的请求，可以做提示或者其他处理
    // ...
})

export default axios;