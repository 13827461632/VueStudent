import { fileURLToPath, URL } from 'node:url'

import { defineConfig,loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default  defineConfig(({command,mode})=>{
  console.log("默认数据："+mode);//打印信息
  console.log("进来启动环境："+mode);//打印信息
  const env = loadEnv(mode, process.cwd(), '')
  console.log("当前启动环境："+process.env.NODE_ENV);//打印信息
  console.log("环境名称："+env.VITE_APP_TITLE);//打印信息
  console.log(env.NODE_ENV);//打印信息
  console.log(env);//打印信息


  return{
    plugins: [
      vue(),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    server:{
      host:'0.0.0.0',
      port:env.VITE_APP_PORT,
      proxy: {
        'api': {
          target: env.VITE_APP_API_BASEURL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      }
    }
  }


})

