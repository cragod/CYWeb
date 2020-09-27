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
        <span :style="{ fontWeight: '400' }"> {{ totalCost }} </span>
      </a-row>
    </template>
  </a-table>
</template>
<script>
import axios from "axios";
const service = axios.create({
  baseURL: "/quant/api",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json;",
  },
});
export default {
  name: "AIMSPosition",
  data: function () {
    return {
      resultData: [],
      columns: [
        {
          title: "Exchange",
          dataIndex: "exchange_name",
          key: "exchangeName",
        },
        {
          title: "CoinPair",
          dataIndex: "coin_pair",
          sorter: (a, b) => (a.coin_pair > b.coin_pair ? 1 : -1),
          sortDirections: ["descend", "ascend"],
          key: "coinPair",
        },
        {
          title: "Cost",
          dataIndex: "cost",
          key: "cost",
          sorter: (a, b) => a.cost - b.cost,
        },
        {
          title: "Hold",
          dataIndex: "hold",
          key: "hold",
        },
        {
          title: "Average",
          dataIndex: "average_costing",
          key: "average",
        },
      ],
    };
  },
  computed: {
    hasData() {
      return this.resultData.length > 0;
    },
    totalCost() {
      if (!this.hasData) {
        return 0;
      }
      return this.resultData.reduce(
        (total, current) => total + current.cost,
        0
      );
    },
  },
  mounted() {
    service.get("/aims_position").then((response) => {
      var result = response.data["data"];
      result.forEach((resultDict) => {
        resultDict["key"] = Math.random();
      });
      this.resultData = result;
    });
  },
  methods: {},
};
</script>
<style scoped>
#abc {
  font-weight: bold;
}
</style>