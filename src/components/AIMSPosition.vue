<template>
  <a-table
    :loading="!hasData"
    :columns="columns"
    :data-source="resultData"
    :pagination="false"
    :scroll="{ x: 800 }"
    bordered
  >
    <template slot="title">AIMS 策略当前持仓信息</template>
    <template slot="footer">
      <a-row :style="{ fontWeight: 'bold' }">
        Total cost:
        <span :style="{ fontWeight: '400' }"> {{ totalCost }} USDT</span>
      </a-row>
      <a-divider orientation="left"></a-divider>
      <div v-for="(item, key) in balanceData" :key="key">
        <span :style="{ fontWeight: 'bold' }">{{ key }} balance:</span>
        <span> {{ Math.round(item * 100) / 100 }} USDT</span>
      </div>
    </template>
  </a-table>
</template>
<script>
import axios from "axios";
export default {
  name: "AIMSPosition",
  data: function () {
    return {
      resultData: [],
      balanceData: [],
      columns: [
        {
          title: "CoinPair",
          dataIndex: "coin_pair",
          sorter: (a, b) => (a.coin_pair > b.coin_pair ? 1 : -1),
          sortDirections: ["descend", "ascend"],
          key: "coinPair",
          fixed: this.isMobile(),
          width: 150,
        },
        {
          title: "Exchange",
          dataIndex: "exchange_name",
          key: "exchangeName",
          width: 150,
        },
        {
          title: "Cost",
          dataIndex: "cost",
          key: "cost",
          sorter: (a, b) => a.cost - b.cost,
          width: 150,
        },
        {
          title: "Hold",
          dataIndex: "hold",
          key: "hold",
          width: 150,
        },
        {
          title: "Average Cost",
          dataIndex: "average_costing",
          key: "average",
          width: 150,
        },
        {
          title: "Current Price",
          dataIndex: "current_price",
          key: "current_price",
          width: 150,
        },
        {
          title: "Profit/Loss",
          dataIndex: "profit",
          key: "profit",
          width: 150,
          customRender: function (text, record) {
            return Math.round(record.profit * 10000) / 100.0 + "%";
          },
        },
      ],
    };
  },
  computed: {
    hasData() {
      return this.resultData.length > 0;
    },
    hasBalance() {
      return this.balanceData.length > 0;
    },
    totalCost() {
      if (!this.hasData) {
        return 0;
      }
      return this.resultData.reduce(
        (total, current) => Math.round((total + current.cost) * 100) / 100,
        0
      );
    },
  },
  mounted() {
    axios.get("/aims_position").then((response) => {
      var result = response.data["data"];
      result.forEach((resultDict) => {
        resultDict["key"] = Math.random();
      });
      this.resultData = result;
    });
    axios.get("/aims_balance").then((response) => {
      var result = response.data["data"];
      console.log(result);
      this.balanceData = result;
    });
  },
};
</script>
<style scoped>
#abc {
  font-weight: bold;
}
</style>