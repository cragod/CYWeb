import Vue from 'vue';
import App from './App';
import {
  Base,
  Table,
} from 'ant-design-vue';
Vue.config.productionTip = false;

Vue.use(Base);
Vue.use(Table);

new Vue({
  render: h => h(App),
}).$mount('#app')
