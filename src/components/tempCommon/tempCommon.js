import { Button } from 'mint-ui'; 

import { Swipe, SwipeItem } from 'mint-ui'; //轮播图

import { Navbar, TabItem } from 'mint-ui';  //tab栏切换

import gonggao from '@/components/tempCommon/jg-gonggao' //全局广告

export default (Vue)=>{
	// console.log(Vue);
	// 定义全局组件
	// <jg-gonggao></jg-gonggao>
	Vue.component(Button.name, Button);

	Vue.component(Swipe.name, Swipe);
	Vue.component(SwipeItem.name, SwipeItem);

	Vue.component(Navbar.name, Navbar);
	Vue.component(TabItem.name, TabItem);

	Vue.component("test",{
		template:"<h1>hello Vue</h1>"
	})

	Vue.component("jg-gonggao",gonggao)
}