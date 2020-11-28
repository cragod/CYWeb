<template>
  <a-table
    :loading="showLoading"
    :columns="columns"
    :data-source="resultData"
    :pagination="false"
    :scroll="{ x: 600 }"
    bordered
  >
    <template slot="title"
      >AIMS 策略历史卖出记录(
      <a-range-picker
        :size="'small'"
        :defaultValue="dates"
        :allowClear="false"
        @change="dateOnChange"
      ></a-range-picker>
      )
    </template>
    <template slot="footer">
      <a-row :style="{ fontWeight: 'bold' }">
        期间盈利:
        <span :style="{ fontWeight: '400' }"> {{ totalProfit }} USDT</span>
      </a-row>
    </template>
  </a-table>
</template>

<script>
import axios from "axios";
import moment from "moment";
export default {
  name: "AIMSSellings",
  data() {
    return {
      loading: false,
      dates: [moment("2020-11-26", "YYYY-MM-DD"), moment()],
      resultData: [],
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
          customRender: (text, record) => this.roundedFloat(record.cost, 1e6),
        },
        {
          title: "持仓",
          dataIndex: "hold",
          key: "hold",
          width: 120,
          customRender: (text, record) => this.roundedFloat(record.hold, 1e6),
        },
        {
          title: "均价",
          dataIndex: "hold",
          key: "average",
          width: 120,
          customRender: (text, record) =>
            this.roundedFloat(record.cost / record.hold, 1e6),
        },
        {
          title: "平仓价格",
          dataIndex: "close_price",
          width: 140,
          customRender: (text, record) =>
            this.roundedFloat(record.close_price, 1e6),
        },
        {
          title: "盈利",
          dataIndex: "profit_amount",
          width: 130,
          customRender: (text, record) =>
            this.roundedFloat(record.profit_amount) +
            " (" +
            Math.round(
              (((record.close_price / record.cost) * record.hold - 1) * 10000) /
                100
            ) +
            "%)",
        },
        {
          title: "日期",
          dataIndex: "date",
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
  methods: {
    dateOnChange: function (dates) {
      this.dates = dates;
      this.fetchRecords();
    },
    fetchRecords: function () {
      this.loading = true;
      let begin = this.dates[0].valueOf();
      let end = this.dates[1].valueOf();
      axios
        .get("/aims_sellings?begin=" + begin + "&end=" + end)
        .then((response) => {
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
    this.fetchRecords();
  },
};
</script>

<style>
</style>