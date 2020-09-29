<template>
  <div id="content">
    <div>
      <a-cascader
        :disabled="loadingMenu"
        :options="options"
        :allowClear="false"
        :defaultValue="defaultValue"
        :key="menuKey"
        expandTrigger="hover"
        placeholder="选择币种"
        @change="onChange"
      />
      <a-spin v-show="loadingMenu" :style="{ paddingLeft: 10 + 'px' }"></a-spin>
    </div>
    <AIPRecords
      v-if="showRecords"
      :key="exchange + coin_pair"
      :exchange="exchange"
      :coin_pair="coin_pair"
    />
  </div>
</template>
<script>
import axios from "axios";
import AIPRecords from "./AIPRecords";
export default {
  components: {
    AIPRecords,
  },
  data() {
    return {
      options: [],
      exchange: "",
      coin_pair: "",
      defaultValue: [],
      menuKey: 1,
    };
  },
  computed: {
    loadingMenu() {
      return this.options.length == 0;
    },
    showRecords() {
      return this.exchange.length > 0 && this.coin_pair.length > 0;
    },
  },
  mounted() {
    axios.get("/aip_summary").then((response) => {
      var result = response.data["data"];
      var defaultExg, defaultCp;
      if (result != null) {
        var opts = [];
        for (const [key, value] of Object.entries(result)) {
          var opt = new Object();
          if (defaultExg == null) {
            defaultExg = key;
          }
          opt["label"] = key;
          opt["value"] = key;
          var children = new Array();
          value.forEach((cp) => {
            if (defaultCp == null) {
              defaultCp = cp;
            }
            var copt = {};
            copt["label"] = cp.replace("/", "-");
            copt["value"] = cp;
            children.push(copt);
          });
          opt["children"] = children;
          opts.push(opt);
        }
        this.options = opts;
        this.defaultValue = [defaultExg, defaultCp];
        this.onChange(this.defaultValue);
        this.menuKey += 1;
      } else {
        alert(response.data["msg"]);
      }
    });
  },
  methods: {
    onChange(value) {
      if (value.length > 1) {
        this.exchange = value[0];
        this.coin_pair = value[1];
      }
    },
  },
};
</script>

<style scoped>
#content {
  padding: 10px 5px;
}
</style>