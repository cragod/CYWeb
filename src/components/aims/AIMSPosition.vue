<template>
  <a-table
    :loading="!hasData"
    :columns="columns"
    :data-source="resultData"
    :pagination="false"
    :scroll="{ x: 600 }"
    bordered
  >
    <template slot="title">AIMS 策略当前持仓信息</template>
    <template slot="footer">
      <a-row :style="{ fontWeight: 'bold' }">
        当前总成本:
        <span :style="{ fontWeight: '400' }"> {{ totalCost }} USDT</span>
      </a-row>
      <a-divider orientation="left"></a-divider>
      <div v-for="(item, key) in balanceData" :key="key">
        <span :style="{ fontWeight: 'bold' }">{{ key }} 余额:</span>
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
          title: "币对",
          dataIndex: "coin_pair",
          sorter: (a, b) => (a.coin_pair > b.coin_pair ? 1 : -1),
          sortDirections: ["descend", "ascend"],
          key: "coinPair",
          fixed: this.isMobile(),
          width: this.isMobile() ? 115 : 150,
        },
        {
          title: "交易所",
          dataIndex: "exchange_name",
          key: "exchangeName",
          width: 100,
        },
        {
          title: "成本",
          dataIndex: "cost",
          key: "cost",
          sorter: (a, b) => a.cost - b.cost,
          width: 120,
          customRender: (text) => this.roundedFloat(text, 1e6),
        },
        {
          title: "持仓",
          dataIndex: "hold",
          key: "hold",
          width: 120,
          customRender: (text) => this.roundedFloat(text),
        },
        {
          title: "均价",
          dataIndex: "average_costing",
          key: "average",
          width: 140,
          customRender: (text) => this.roundedFloat(text, 1e6),
        },
        {
          title: "当前价",
          dataIndex: "current_price",
          key: "current_price",
          width: 120,
        },
        {
          title: "浮盈",
          dataIndex: "profit",
          key: "profit",
          width: 105,
          customRender: function (text, record) {
            if (record.hold == 0) {
              return "/";
            }
            return Math.round(record.profit * 10000) / 100.0 + "%";
          },
        },
        {
          title: "最后买入",
          dataIndex: "update_date",
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
  created() {
    axios.get("/aims_position").then((response) => {
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
    axios.get("/aims_balance").then((response) => {
      var result = response.data["data"];
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