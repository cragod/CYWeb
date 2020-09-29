<template>
  <a-layout id="components-layout-demo-fixed">
    <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
      <!-- <div class="logo" /> -->
      <a-menu
        theme="dark"
        mode="horizontal"
        :default-selected-keys="[selectedMenuKey]"
        :style="{ lineHeight: '64px' }"
        @select="selected"
      >
        <a-menu-item key="aip"> 定投 </a-menu-item>
        <a-menu-item key="aims"> AIMS </a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content :style="{ marginTop: '64px', background: white }">
      <keep-alive>
        <div v-if="selectedMenuKey == 'aims'" class="content">
          <AIMS />
        </div>
        <div v-else class="content">
          <AIP />
        </div>
      </keep-alive>
    </a-layout-content>
  </a-layout>
</template>

<script>
import AIMS from "./components/aims/AIMS";
import AIP from "./components/aip/AIP";
export default {
  name: "App",
  components: {
    AIMS,
    AIP,
  },
  data() {
    return {
      selectedMenuKey: "aip",
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
.content {
  padding: 0px 5px;
  min-height: "380px";
  background: white;
}
#components-layout-demo-fixed .logo {
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: white;
  float: left;
}
</style>
