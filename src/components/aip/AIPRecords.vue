<template>
  <a-table
    :loading="!hasData"
    :columns="columns"
    :data-source="records"
    :pagination="false"
    :scroll="{ x: 600, y: isMobile() ? 500 : 800 }"
    bordered
  >
    <template slot="title">定投记录</template>
    <template slot="footer">
      <a-row :style="{ fontWeight: 'bold' }">
        当前价格:
        <span :style="{ fontWeight: '400' }"> {{ current_price }} USDT </span>
      </a-row>
      <a-divider orientation="left"></a-divider>
      <a-row :style="{ fontWeight: 'bold' }">
        浮盈:
        <span :style="{ fontWeight: '400' }">
          {{ roundedFloat(profit) }} USDT ({{
            Math.round(profit_ratio * 10000) / 100
          }}%)
        </span>
      </a-row>
      <a-divider orientation="left"></a-divider>
      <a-row :style="{ fontWeight: 'bold' }">
        总价值:
        <span :style="{ fontWeight: '400' }">
          {{ roundedFloat(total_value) }} USDT
        </span>
      </a-row>
    </template>
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
      current_price: 0,
      profit: 0,
      profit_ratio: 0,
      total_value: 0,
      columns: [
        {
          title: "日期",
          dataIndex: "date",
          fixed: this.isMobile(),
          width: this.isMobile() ? 120 : 150,
          customRender: this.formatISO8081Date,
        },
        {
          title: "成本",
          dataIndex: "cost",
          width: 80,
          customRender: (text) => this.roundedFloat(text, 1e2),
        },
        {
          title: "买入量",
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
          title: "总成本",
          dataIndex: "total_cost",
          width: 110,
          customRender: (text) => this.roundedFloat(text, 1e2),
        },
        {
          title: "总持仓",
          dataIndex: "total_hold",
          width: 115,
          customRender: (text) => this.roundedFloat(text, 1e6),
        },
        {
          title: "平均价格",
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
        var resultData = resp.data["data"];
        if (resultData != null) {
          this.records = resultData["list"];
          this.current_price = resultData["current_price"];
          this.profit = resultData["profit"];
          this.profit_ratio = resultData["profit_ratio"];
          this.total_value = resultData["total_worth"];
        } else {
          alert("request failed");
        }
      });
  },
};
</script>

<style>
</style>