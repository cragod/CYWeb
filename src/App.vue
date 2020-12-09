<template>
  <a-layout id="layout">
    <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
      <div class="logo">
        <span class="title">CYQuant</span>
      </div>
      <a-menu
        theme="dark"
        mode="horizontal"
        :selectedKeys="[this.$route.path]"
        :style="{ lineHeight: '64px' }"
        @select="selected"
      >
        <a-menu-item key="/aims">
          <router-link to="/aims"> AIMS 策略 </router-link>
        </a-menu-item>
        <a-menu-item key="/aip">
          <router-link to="/aip"> 定投记录 </router-link>
        </a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content :style="{ marginTop: '64px', background: white }">
      <router-view class="content"></router-view>
    </a-layout-content>
  </a-layout>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      selectedMenuKey: this.$route.path,
    };
  },
  created() {
    document.title = "Gatro Quant";
  },
  methods: {
    selected: function (item) {
      this.selectedMenuKey = item.key;
    },
  },
};
</script>

<style scoped>
#layout .logo {
  width: 120px;
  height: 31px;
  margin: 16px 28px 16px -15px;
  float: left;
}
.content {
  padding: 0px 5px;
  min-height: "380px";
  background: white;
}
.title {
  line-height: 1;
  font-size: 200%;
  font-weight: 900;
  font-style: oblique;
  text-decoration: underline white;
  color: ghostwhite;
  user-select: none;
}
</style>
