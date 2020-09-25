import Vue from 'vue'
import App from './App.vue'
import { Table, Tag, Divider } from "ant-design-vue"

Vue.use(Table, Tag, Divider)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
