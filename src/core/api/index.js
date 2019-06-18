import request from "./http"
import params from './params'
import axios from "@/mock/mock"
import mock from '@/mock/mock'

// console.log(params);


class Apls {

  //登录
  login(data){
    return  mock.post("/login",{data})
  }

  //注册
  edit(data){
    return mock.post("/test",{data})
  }
  
  //轮播
  joke(data) {
    return request({
      method: "get",
      url: "/json1811.ashx",
      params: data
    })
  }
  //八个图标
  GetIndexCakeList(data) {
    return request({
      method: "get",
      url: "/json1811.ashx",
      params: data
    })
  }
  // 分类数据接口
  GetJdListNew(data) {
    return request({
      method: "get",
      url: "/json1811.ashx",
      params: data
    })
  }
  //宠爱少女接口
  GetNSCakeByName(data) {
    return request({
      method: "get",
      url: "/json1811.ashx",
      params: {
		    Name:data.Name,
        c: "NsCakeCenter",
        m: "GetNSCakeByName",
        v: params.v
      }
    })
  }
  //品质甄选详情接口
  GetCakeByName(data) {
    return request({
      method: "get",
      url: "/json1811.ashx",
      params: {
        City: "上海",
	    	ProName:data.ProName,
        c: "Product",
        m: "GetCakeByName",
        v: params.v
      }
    })
  }

//乳品接口
GetRuPCakeByName(data){
  return request({
    method: "get",
    url: "/json1811.ashx",
    params: {
      Name:data.Name,
      c: "NsCakeCenter",
      m: "GetRuPCakeByName",
      v: params.v
    }
  })
}
// 伴手礼接口
GetjzCakeInfo(data){
  return request({
    method: "get",
    url: "/json1811.ashx",
    params: {
      City: "上海",
      ProName:data.ProName,  //对应 Name在之前appCom传了 和show里面 data
      c: "IndexCenter",
      m: "GetjzCakeInfo",
      v: params.v
    }
  })
}
 
//购物车数据接口 和分类同一个
GetJdListNew(data){
  return request({
    method: "get",
    url: "/json1811.ashx",
    params: {
      c: "NsCakeCenter",
      m: "GetJdListNew",
      v: params.v
    }
  })
}
  // getServerStr(){
  // 	return request({
  // 		method:"post",
  // 		url:"/json.php",
  // 		data:{
  // 			uname:"Msea",
  // 			upwd:"1234565"
  // 		}

  // 	})
  // }

  

}




export default new Apls();
