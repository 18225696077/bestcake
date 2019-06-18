import axios from 'axios'

import MockAdapter from 'axios-mock-adapter';
import {usersList} from './data/userinfo' 
import Store from 'storejs'

let mock = new MockAdapter(axios);

mock.onPost('/login').reply(config => {
	console.log(config)
	// console.log(usersList);
	// 做一个数据效验
	var reqdata=JSON.parse(config.data).data;
	console.log(reqdata)
	var bool=true;
	for(var i=0;i<usersList.length;i++){
		if(usersList[i].username==reqdata.uname){
			if(usersList[i].password==reqdata.upwd){
				return [200,{code:1,data:usersList[i],msg:"success"}]
			}else{
				return [-200,{code:2,msg:"密码错误"}]
			}
		}
	}
	return [200,{code:0,msg:"账号不存在"}];			  
});
mock.onPost('/test').reply(config=>{
	var reqdata=JSON.parse(config.data).data;
	usersList.push(reqdata);
	Store.set("usersList",usersList);
	return [200,{code:1,msg:"注册成功"}];

})

export default axios;	




