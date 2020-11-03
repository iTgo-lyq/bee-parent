import { BASE_URL } from "./config";
import {Toast} from 'antd-mobile'
import axios from "axios";

const service = axios.create({
  baseURL: BASE_URL
});

/**
 * 请求前headers添加token
 */
service.interceptors.request.use(
  config => {
    config.headers["Authorization"] = localStorage.getItem("token");
    return config;
  },
  err => {
    console.log("请求出错了", err);
    return Promise.reject(err);
  }
);

/**
 * 响应状态初步判断
 */
service.interceptors.response.use(
  response => {
    const res = response.data;
    const status = response.status;

    /** 请求成功 */
    if (status === 200) {
        // 需要增加普遍出错情况！！
      return res;
    }

    console.log("接口调用失败", response);

    /** 跳转重新登陆 */
    // if (status === 403) {
    //   MessageBox.confirm("您的登录已经失效，即将前往重新登录", "无效的身份", {
    //     confirmButtonText: "重新登录",
    //     showCancelButton: false,
    //     type: "warning"
    //   }).then(() => {
    //     localStorage.removeItem("token");
    //     location.reload();
    //   });
    //   return Promise.reject(response, "非法请求");
    // }

    /** 随便报个错 */
    // Message({
    //   message: "网络开小差了...",
    //   type: "error",
    //   duration: 1000
    // });
    // console.log('这里要报个错')


    if (res.status && res.status == 404) {
      return Promise.reject(response, "资源路径不存在");
    }

    return Promise.reject(response, "未知错误");
  },
  err => {
    console.log("响应出错了" + err);
    return Promise.reject(err);
  }
);

export default service;
