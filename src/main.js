import Vue from 'vue';
import App from './App';
import axios from 'axios';
import {
  Base,
  Table,
  Divider,
} from 'ant-design-vue';
Vue.config.productionTip = false;

axios.defaults.baseURL = '/quant/api';
axios.defaults.headers.common['Content-Type'] = "application/json";

Vue.use(Base);
Vue.use(Table);
Vue.use(Divider);

new Vue({
  render: h => h(App),
}).$mount('#app')
