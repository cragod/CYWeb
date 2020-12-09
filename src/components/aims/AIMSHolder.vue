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
      <template slot="title">
        <div class="title">
          <span> 乘客信息 </span>
          <a-button :style="{ fontWeight: '500' }" type="link" @click="toShowEvents">
            资金日志
          </a-button>
        </div>
      </template>
      <template slot="footer"> </template>
    </a-table>
    <RecordsView
      :showRecords="showRecords"
      :name="holderName"
      :holderID="holderID"
      @dismissModal="dismissRecords"
    ></RecordsView>
    <EventsView :showRecords="showEvents" @dismissModal="dismissEvents"></EventsView>
  </div>
</template>

<script>
import axios from "axios";
import RecordsView from "./sub/RecordsView";
import EventsView from "./sub/EventsView";
export default {
  name: "AIMSHolder",
  components: {
    RecordsView,
    EventsView,
  },
  data() {
    return {
      loading: false,
      resultData: [],
      showRecords: false,
      showEvents: false,
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
          customRender: (text) => this.roundedFloat(text, 1e2),
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
            this.holderID = record["_id"];
            this.holderName = record["name"];
            this.showRecords = true;
          },
        },
      };
    },
    dismissRecords: function () {
      this.showRecords = false;
    },
    toShowEvents: function () {
      this.showEvents = true;
    },
    dismissEvents: function () {
      this.showEvents = false;
    },
  },
  mounted() {
    this.fetchHolders();
  },
};
</script>

<style>
.title {
  display: flex;
  justify-content: space-between;
}
</style>
