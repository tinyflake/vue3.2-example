import { createApp } from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue'
import router from './router'
import store from './store'
import 'ant-design-vue/dist/antd.css'
import 'element-plus/theme-chalk/index.css'
import ElementPlus from 'element-plus'
import locale from 'element-plus/lib/locale/lang/zh-cn' // 中文语言
createApp(App)
  .use(ElementPlus, {
    locale: locale,
    size: 'default',
  })
  .use(Antd)
  .use(store)
  .use(router)
  .mount('#app')
