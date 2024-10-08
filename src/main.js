import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import vuetifyOptions from './plugins/vuetify' // 引入 vuetify.js 配置

import './api/index.js'

// lucky-canvas
import VueLuckyCanvas from '@lucky-canvas/vue'

// 获取应用实例
const app = createApp(App)

// 引入路由
app.use(router)

// 引入 Pinia
const pinia = createPinia()
app.use(pinia)

// 引入 Vuetify
const vuetify = createVuetify({
    vuetifyOptions, // 使用 vuetify.js 中的配置
    components,
    directives,
})
app.use(vuetify)

app.use(VueLuckyCanvas)

// 将应用实例挂载到 DOM
app.mount('#app')

