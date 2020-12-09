<template>
  <a-modal
    centered
    title="资金日志"
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
            <span :style="{ color: 'darkcyan', fontWeight: '500' }">{{
              item["content"] == "profit"
                ? item["note"]
                : item["content"] == "withdraw"
                ? "资金出场"
                : "资金进场"
            }}</span>
          </div>
          <table>
            <tr class='holder-info' v-for="(rec, key) in item['records']" :key="key">
                <td style="font-weight: bold">{{rec['holder']}}:</td>
                <td>{{roundedFloat(rec['balance_after'] - rec['balance_before'], 4)}} USDT</td>
            </tr>
          </table>
        </a-timeline-item>
      </a-timeline>
    </div>
  </a-modal>
</template>

<script>
import axios from "axios";
import moment from "moment";
export default {
  name: "EventsView",
  props: {
    showRecords: Boolean,
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
      if (this.showRecords) {
        this.fetchRecords();
      }
    },
  },
  methods: {
    moment,
    handleOk: function () {
      this.visible = false;
      this.$emit("dismissModal");
    },
    fetchRecords: function () {
        this.loading = true;
        axios.get("/aims_events").then((response) => {
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
  height: 330px;
  padding: 10px;
}
.event-item {
  color: darkslategray;
}
.holder-info {
  font-family: monospace;
}
</style>