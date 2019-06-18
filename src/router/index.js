import Vue from 'vue'
import Router from 'vue-router'
import api from '@/core/api/index'
// console.log(global.getParam())


Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: '/',
      component: resolve => require(['@/components/home'], resolve),
      redirect:"appCom",
      children: [
        {
          path: '/appCom',
          name: 'appCom',
          meta:{
              keepAlive:true,
              title:'贝思客蛋糕'
          },
          component: resolve => require(['@/components/main/appCom'], resolve),
         
        },
        { 
          path: '/show',
          name: 'show',
          component: resolve => require(['@/components/main/show'], resolve),
        },
        {
          path: '/list',
          name: 'list',
          component: resolve => require(['@/components/main/list'], resolve),
          redirect:"/list/zy",
          children:[
            {
              path: 'zy',
              name: 'zy',
              component: resolve => require(['@/components/child/list-zy'], resolve),
              redirect:"/list/zy/jd",
              children:[
                {
                  path: 'jd',
                  name: 'jd',
                  component: resolve => require(['@/components/child/list-zy-jd'], resolve),
                },
                {
                  path: 'ns',
                  name: 'ns',
                  component: resolve => require(['@/components/child/list-zy-ns'], resolve),
                },
                {
                  path: 'bsl',
                  name: 'bsl',
                  component: resolve => require(['@/components/child/list-zy-bsl'], resolve),
                }
              ]
            },
            {
              path: 'bs',
              name: 'bs',
              component: resolve => require(['@/components/child/list-bs'], resolve),
              redirect:"/list/bs/rp",
              children:[
                {               
                    path: 'rp',
                    name: 'rp',
                    component: resolve => require(['@/components/child/list-bs-rp'], resolve),
                }
              ]
            }
          ]
        },
        {
          path: '/cart',
          name: 'cart',
          component: resolve => require(['@/components/main/cart'], resolve)
        },
        {
          path: '/userinfo',
          name: 'userinfo',
          component: resolve => require(['@/components/main/userinfo'], resolve)
        },
        {
          path: '/edit',
          name: 'edit',
          component: resolve => require(['@/components/main/edit'], resolve)
        },
        {
          path: '/user-info',
          name: 'user-info',
          component: resolve => require(['@/components/main/user-info'], resolve)
        },
        
        
      ]
    }
    
  ]
    
})
export default router;
