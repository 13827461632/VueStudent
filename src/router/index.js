import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import itsHome from '@/views/testHome/childrenpg/tsHome.vue'
//首页    ############ '../views/HomeView.vue' 和 '@/views/HomeView.vue'  作用是一样的
// vue路径写法：./和@/的区别？
// 这里的@就代表是 src，所以就在 src 路径下找文件，也可以自己配置，这也是常见的路径写法！ . /指当前文件目录 . ./指当前文件目录的上一层目录
import childrenV01 from  '@/views/testHome/childrenpg/childrenV01.vue'//子页面01
import childrenV02 from  '@/views/testHome/childrenpg/childrenV02.vue'//子页面02
import itsDf from  '@/views/testHome/tsDf.vue'//转发
import itsTz from  '@/views/testHome/tsTz.vue'//跳转
import itsZd from  '@/views/testHome/tsZd.vue'//指定
import NotFound from '@/views/NotFound.vue'



const routes = [
  {
    path: '/home',  // 这个是主页的设置 "/"  如果输入的是不存在的地址也会跳转到当前主页
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/tsHome',
    name: 'tsHome',
    component:itsHome,  //(引用自定义写法 上面有进行引用)
    //  单前页面嵌套子页面写法  <router-view></router-view> <!--嵌套子页面的标签-->
    children:[

      {
        path:"childrenV01",  // path:"childrenV01" 和 path:"/tsHome/childrenV01" 嵌套子页面这两种写法都可以
        name:childrenV01,
        component:childrenV01
      },
      {
        path:"/tsHome/childrenV02",
        name:childrenV02,
        component:childrenV02
      }/*,
      {
        path: "/:pathMatch(.*)",  // 正则表达式匹配输入的错误路径 重定向子页面错误 也默认跳到子页面主业
        redirect: {name:childrenV01} // 重定向到含子页面childrenV01的 tsHome页面
      }*/,
      {
        path: "",                 //输入父页面地址http://localhost:9001/#/tsHome  默认重定向到http://localhost:9001/#/tsHome/childrenV02  设置默认子主页可以用
        redirect: {name:childrenV02} // 重定向到含子页面childrenV02的 tsHome页面
      }
    ]
  }
  ,
  {
    path: '/tsDf',
    name: 'tsDf',
    component:itsDf   //(引用自定义写法 上面有进行引用)
    // component: () => import('../views/testHome/tsDf.vue')//转发  (这种写法也是对的 上面就不用进行引用写法的操作了)
  },
  {
    path: '/tsTz',
    name: 'tsTz',
    component:itsTz   //(引用自定义写法 上面有进行引用)
    //  component: () => import('../views/testHome/tsTz.vue')//跳转  (这种写法也是对的 上面就不用进行引用写法的操作了)
  },
  {
    path: '/tsZd',
    name: 'tsZd',
    component:itsZd   //(引用自定义写法 上面有进行引用)
    // component: () => import('../views/testHome/tsZd.vue')///指定  (这种写法也是对的 上面就不用进行引用写法的操作了)
  },
  { //输入访问路径错误  自动进入404页面
    path: '/:catchAll(.*)',
    name: 'not-found',
    component: NotFound,
  }

]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
})

export default router
