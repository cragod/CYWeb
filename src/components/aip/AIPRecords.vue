<template>
  <a-table
    :loading="!hasData"
    :columns="columns"
    :data-source="records"
    :pagination="false"
    :scroll="{ x: 800 }"
    bordered
  >
    <template slot="title">{{ exchange }} - {{ coin_pair }} 定投记录</template>
  </a-table>
</template>

<script>
import axios from "axios";
export default {
  props: {
    exchange: String,
    coin_pair: String,
  },
  data() {
    return {
      columns: [
        {
          title: "日期",
          dataIndex: "date",
          fixed: this.isMobile(),
          width: this.isMobile() ? 120 : 150,
          customRender: function (text) {
            if (text != null) {
              return new Date(Date.parse(text)).toLocaleDateString();
            } else {
              return "/";
            }
          },
        },
        {
          title: "花费",
          dataIndex: "cost",
          width: 150,
          customRender: (text) => this.roundedFloat(text, 1e6),
        },
        {
          title: "数量",
          dataIndex: "amount",
          width: 150,
          customRender: (text) => this.roundedFloat(text, 1e6),
        },
        {
          title: "价格",
          dataIndex: "price",
          width: 150,
          customRender: (text) => this.roundedFloat(text, 1e6),
        },
        {
          title: "总花费(截止当天)",
          dataIndex: "total_cost",
          width: 150,
          customRender: (text) => this.roundedFloat(text, 1e6),
        },
        {
          title: "总数量(截止当天)",
          dataIndex: "total_hold",
          width: 150,
          customRender: (text) => this.roundedFloat(text, 1e6),
        },
        {
          title: "天数",
          dataIndex: "days",
          width: 150,
        },
      ],
      records: [],
    };
  },
  computed: {
    hasData() {
      return this.records.length > 0;
    },
  },
  mounted() {
    axios
      .get("/aip_records", {
        params: {
          exchange: this.exchange,
          coin_pair: this.coin_pair,
        },
      })
      .then((resp) => {
        this.records = resp.data["data"];
      });
  },
};
</script>

<style>
</style>