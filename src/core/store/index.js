import Vue from "vue";
import Vuex from "vuex";
import Store from 'storejs'
import apis from "@/core/api/index"
// console.log("OK");
Vue.use(Vuex);

//定义属性值  data
const state={
	shopCart:{'N':0,'list':[]}
}
//定义同步方法   调用commit
const mutations={
	vuexInit(state){
		// console.log("ok")
		state.shopCart.list=Store.get('shopCart.list')||[]
		console.log(Store.get('shopCart.list'))
	},
	add(state,data){
		// console.log(Store.get("shopCart"))
		console.log(data) //拿到数据
		// console.log(state.shopCart.list)
		if(state.shopCart.list.length>0){ // 已经有一条
			var con =true;
			state.shopCart.list.forEach(ele => {
				if(ele.Pid==data.Pid){
					ele.num++
					con=false;
					return;
				}
			});
			if(con){ //多条
				state.shopCart.list.push(data)
			}
			state.shopCart.N++
		}else{ //空 
			state.shopCart.list.push(data)
			state.shopCart.N++
		}
		console.log(state.shopCart.list);		
		
		Store.set('shopCart.list',state.shopCart.list)
	},
	add1(state,data){
		// console.log(data)
        state.shopCart.list.forEach(ele => {
            if(ele.Pid==data.Pid){
                ele.num++   
            }
            
        });
		Store.set('shopCart.list',state.shopCart.list)
	},
	del(state,data){
		state.shopCart.list.forEach(ele=>{
			if(ele.Pid==data.Pid){
				ele.num--
			}
		})
		Store.set('shopCart.list',state.shopCart.list)
	},
	//清空购物车
	empty(){
		state.shopCart.list=[] //把数组调成空才会自动刷新
		Store.set('shopCart.list',[])
	}
	
}
//定义 computed(属性计算)
const getters={
	count(state){
		return state.shopCart.num*state.shopCart.list.price;
	}
}

//定义异步方法,可以在这个里面做一些异步操作,比如调用通用数据接口
const actions={
	syFn(context){
		// context.state  可以取 state 属性
		// context.commit  可以调用 mutations 同步方法 属性
		// context.dispatch可以调用 actions 异步方法 属性
		// 在组件里面调用 也是一样,同上面的方法一直 
	},
	test(context,data){
		console.log(data)
	}	
}

export default new Vuex.Store({
	state,
	mutations,
	actions,
	getters
})
