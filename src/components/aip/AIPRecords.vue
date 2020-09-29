<template>
  <a-table
    :loading="!hasData"
    :columns="columns"
    :data-source="records"
    :pagination="false"
    :scroll="{ x: 600 }"
    bordered
  >
    <template slot="title">定投记录</template>
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
          customRender: this.formatISO8081Date,
        },
        {
          title: "花费",
          dataIndex: "cost",
          width: 120,
          customRender: (text) => this.roundedFloat(text, 1e2),
        },
        {
          title: "数量",
          dataIndex: "amount",
          width: 120,
          customRender: (text) => this.roundedFloat(text, 1e6),
        },
        {
          title: "价格",
          dataIndex: "price",
          width: 140,
          customRender: (text) => this.roundedFloat(text, 1e6),
        },
        {
          title: "总花费",
          dataIndex: "total_cost",
          width: 90,
          customRender: (text) => this.roundedFloat(text, 1e2),
        },
        {
          title: "总数量",
          dataIndex: "total_hold",
          width: 115,
          customRender: (text) => this.roundedFloat(text, 1e6),
        },
        {
          title: "平均成本",
          dataIndex: "position",
          width: 140,
          customRender: (text) => this.roundedFloat(text, 1e6),
        },
        {
          title: "天数",
          dataIndex: "days",
          width: 80,
          align: "center",
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