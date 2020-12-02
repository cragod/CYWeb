<template>
  <div>
    <a-table
      :loading="showLoading"
      :columns="columns"
      :data-source="resultData"
      :pagination="false"
      :scroll="{ x: 600, y: isMobile() ? 500 : 700 }"
      bordered
      :customRow="customRow"
    >
      <template slot="title"> 乘客信息 </template>
      <template slot="footer"> </template>
    </a-table>
    <RecordsView
      :showRecords="showRecords"
      :name="holderName"
      :holderID="holderID"
      @dismissModal="dismissModal"
    ></RecordsView>
  </div>
</template>

<script>
import axios from "axios";
import RecordsView from "./sub/RecordsView";
export default {
  name: "AIMSHolder",
  components: {
    RecordsView,
  },
  data() {
    return {
      loading: false,
      resultData: [],
      showRecords: false,
      holderName: "",
      holderID: -1,
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
    customRow: function (record) {
      return {
        on: {
          click: (event) => {
            console.log(event, record);
            this.holderID = record["_id"];
            this.holderName = record["name"];
            this.showRecords = true;
          },
        },
      };
    },
    dismissModal: function () {
      this.showRecords = false;
    },
  },
  mounted() {
    this.fetchHolders();
  },
};
</script>

<style>
</style>