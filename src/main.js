import Vue from 'vue';
import App from './App';
import axios from 'axios';
import VueRouter from 'vue-router'
import routes from './routers'
import {
  Base,
  Table,
  Divider,
  Layout,
  Menu,
  Cascader,
  Spin,
  DatePicker,
  ConfigProvider,
  Modal,
  Timeline,
  Button,
} from 'ant-design-vue';
import moment from "moment";
import 'moment/locale/zh-cn';
moment.locale('zh-cn');

Vue.config.productionTip = false;

axios.defaults.baseURL = '/quant/api';
axios.defaults.headers.common['Content-Type'] = "application/json";

Vue.use(Base);
Vue.use(VueRouter);

Vue.use(Table);
Vue.use(Divider);
Vue.use(Layout);
Vue.use(Menu);
Vue.use(Cascader);
Vue.use(Spin);
Vue.use(DatePicker);
Vue.use(ConfigProvider);
Vue.use(Modal);
Vue.use(Timeline);
Vue.use(Button);

Vue.mixin({
  methods: {
    moment,
    isMobile() {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        return true;
      } else {
        return false;
      }
    },
    roundedFloat: function (value, digits = 100) {
      return Math.round(value * digits) / digits;
    },
    formatISO8081Date(text) {
      if (text != null) {
        return new Date(Date.parse(text)).toLocaleDateString('zh-Hans-CN', { year: "numeric", month: "2-digit", day: "2-digit" });
      } else {
        return "/";
      }
    },
  },
})

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
