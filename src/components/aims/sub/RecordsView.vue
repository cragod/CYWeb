<template>
  <a-modal
    centered
    :title="name"
    v-model="visible"
    @click="handleOk"
    @cancel="handleOk"
    @ok="handleOk"
    :closable="false"
    :destroyOnClose="true"
    footer=""
  >
    <div class="loading" v-if="loading">
      <a-spin></a-spin>
    </div>
    <div class="infinite-container" v-else>
      <a-timeline>
        <a-timeline-item v-for="(item, key) in this.records" :key="key">
          <span class="event-item">{{
            moment(item["date"]).format("YYYY-MM-DD")
          }}</span>
          <div>
            <span :style="{ color: 'darkcyan' }">{{
              item["event_content"] == "profit"
                ? item["event_note"]
                : item["event_content"] == "withdraw"
                ? "资金出场"
                : "资金进场"
            }}</span>
          </div>
          <div>
            <span class="event-item">金额：</span>
            <span
              >{{
                roundedFloat(item["balance_after"] - item["balance_before"], 2)
              }}
              USDT</span
            >
          </div>
          <div>
            <span class="event-item">余额：</span>
            <span>{{ roundedFloat(item["balance_after"], 2) }} USDT</span>
          </div>
        </a-timeline-item>
      </a-timeline>
    </div>
  </a-modal>
</template>

<script>
import axios from "axios";
import moment from "moment";
export default {
  name: "RecordsView",
  props: {
    showRecords: Boolean,
    name: String,
    holderID: Number,
  },
  computed: {},
  data() {
    return {
      loading: true,
      visible: false,
      records: [],
    };
  },
  watch: {
    showRecords() {
      this.visible = this.showRecords;
    },
    holderID() {
      this.fetchRecords();
    },
  },
  methods: {
    moment,
    handleOk: function () {
      this.visible = false;
      this.$emit("dismissModal");
    },
    fetchRecords: function () {
      if (this.holderID >= 0) {
        this.loading = true;
        axios.get("/aims_records?holder=" + this.holderID).then((response) => {
          this.loading = false;
          var result = response.data["data"];
          if (result != null) {
            result.forEach((resultDict) => {
              resultDict["key"] = Math.random();
            });
            this.records = result;
          } else {
            alert(response.data["msg"]);
          }
        });
      } else {
        return;
      }
    },
  },
};
</script>

<style scoped>
.loading {
  text-align: center;
}
.infinite-container {
  overflow: auto;
  height: 280px;
  padding: 10px;
}
.event-item {
  color: darkslategray;
}
</style>