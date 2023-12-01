import './assets/main.css'
// 创建应用
import { createApp } from 'vue'
// 创建 Pinia 应用
import { createPinia } from 'pinia'
// 引入 App 组件
import App from './App.vue'
// 引入路由
import router from './router'
//全局引用
import ElementPlus from 'element-plus'// ElementPlus 框架
import 'element-plus/theme-chalk/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'; // 引用 ElementPlus 的 ico 图标
import './assets/gloable.css'//设置全局css

// 创建一个应用实例
const app = createApp(App)
// 使用ElementPlus插件
app.use(ElementPlus)
// 使用Pinia插件
app.use(createPinia())
// 使用路由
app.use(router).mount('#app')
// 将ElementPlusIconsVue中的每一个组件都添加到应用实例中
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}