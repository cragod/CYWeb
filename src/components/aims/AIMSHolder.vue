<template>
  <a-table
    :loading="showLoading"
    :columns="columns"
    :data-source="resultData"
    :pagination="false"
    :scroll="{ x: 600, y: isMobile() ? 500 : 700 }"
    bordered
  >
    <template slot="title"> 乘客信息 </template>
    <template slot="footer"> </template>
  </a-table>
</template>

<script>
import axios from "axios";
export default {
  name: "AIMSHolder",
  data() {
    return {
      loading: false,
      resultData: [],
      columns: [
        {
          title: "昵称",
          dataIndex: "name",
          sorter: (a, b) => (a.name > b.name ? 1 : -1),
          sortDirections: ["descend", "ascend"],
          key: "name",
          fixed: this.isMobile(),
          width: 100,
        },
        {
          title: "资金(USDT)",
          dataIndex: "balance",
          sorter: (a, b) => (a.balance > b.balance ? 1 : -1),
          sortDirections: ["descend", "ascend"],
          key: "balance",
          width: 100,
        },
        {
          title: "资金占比",
          dataIndex: "percent",
          key: "percent",
          width: 120,
          customRender: (text) => this.roundedFloat(text, 1e4),
        },
        {
          title: "状态",
          dataIndex: "status",
          key: "status",
          width: 100,
          customRender: function (text) {
            if (text == 0) {
              return "正常";
            } else {
              return "下车";
            }
          },
        },
        {
          title: "最后更新",
          dataIndex: "update",
          key: "update",
          width: 120,
          customRender: this.formatISO8081Date,
        },
      ],
    };
  },
  computed: {
    showLoading() {
      return this.loading;
    },
    hasData() {
      return this.resultData.length > 0;
    },
  },
  methods: {
    fetchHolders: function () {
      this.loading = true;
      axios.get("/aims_holders").then((response) => {
        this.loading = false;
        var result = response.data["data"];
        if (result != null) {
          result.forEach((resultDict) => {
            resultDict["key"] = Math.random();
          });
          this.resultData = result;
        } else {
          alert(response.data["msg"]);
        }
      });
    },
  },
  mounted() {
    this.fetchHolders();
  },
};
</script>

<style>
</style>