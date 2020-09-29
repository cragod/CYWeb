<template>
  <a-table
    :loading="!hasData"
    :columns="columns"
    :data-source="resultData"
    :pagination="false"
    :scroll="{ x: 600 }"
    bordered
  >
    <template slot="title">AIMS 策略历史卖出记录</template>
    <template slot="footer">
      <a-row :style="{ fontWeight: 'bold' }">
        Total profit:
        <span :style="{ fontWeight: '400' }"> {{ totalProfit }} USDT</span>
      </a-row>
    </template>
  </a-table>
</template>

<script>
import axios from "axios";
export default {
  name: "AIMSSellings",
  data() {
    return {
      resultData: [],
      columns: [
        {
          title: "CoinPair",
          dataIndex: "coin_pair",
          sorter: (a, b) => (a.coin_pair > b.coin_pair ? 1 : -1),
          sortDirections: ["descend", "ascend"],
          key: "coinPair",
          fixed: this.isMobile(),
          width: this.isMobile() ? 115 : 150,
        },
        {
          title: "Exchange",
          dataIndex: "exchange_name",
          key: "exchangeName",
          width: 100,
        },
        {
          title: "Cost",
          dataIndex: "cost",
          key: "cost",
          sorter: (a, b) => a.cost - b.cost,
          width: 100,
          customRender: (text, record) => this.roundedFloat(record.cost, 1e6),
        },
        {
          title: "Hold",
          dataIndex: "hold",
          key: "hold",
          width: 120,
          customRender: (text, record) => this.roundedFloat(record.hold, 1e6),
        },
        {
          title: "Close Price",
          dataIndex: "close_price",
          width: 100,
          customRender: (text, record) =>
            this.roundedFloat(record.close_price, 1e6),
        },
        {
          title: "Profit",
          dataIndex: "profit_amount",
          width: 100,
          customRender: (text, record) =>
            this.roundedFloat(record.profit_amount),
        },
        {
          title: "Date",
          dataIndex: "date",
          width: 120,
          customRender: this.formatISO8081Date,
        },
      ],
    };
  },
  computed: {
    hasData() {
      return this.resultData.length > 0;
    },
    totalProfit() {
      if (!this.hasData) {
        return 0;
      }
      return this.roundedFloat(
        this.resultData.reduce(
          (total, record) => total + record.profit_amount,
          0
        )
      );
    },
  },
  created() {
    axios.get("/aims_sellings").then((response) => {
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
};
</script>

<style>
</style>