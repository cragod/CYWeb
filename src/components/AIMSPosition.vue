<template>
  <a-table :columns="columns" :data-source="data">
    <a slot="name" slot-scope="text">{{ text }}</a>
    <span slot="tags" slot-scope="tags">
      <a-tag
        v-for="tag in tags"
        :key="tag"
        :color="
          tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'
        "
      >
        {{ tag.toUpperCase() }}
      </a-tag>
    </span>
    <span slot="action" slot-scope="text, record">
      <a>Invite 一 {{ record.name }}</a>
      <a-divider type="vertical" />
      <a>Delete</a>
      <a-divider type="vertical" />
      <a class="ant-dropdown-link"> More actions <a-icon type="down" /> </a>
      <span>{{ testText }}</span>
    </span>
  </a-table>
</template>
<script>
const columns = [
  {
    dataIndex: "name",
    key: "name",
    slots: { title: "customTitle" },
    scopedSlots: { customRender: "name" },
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    scopedSlots: { customRender: "tags" },
  },
  {
    title: "Action",
    key: "action",
    scopedSlots: { customRender: "action" },
  },
  {
    title: "Data",
    key: "data",
    dataIndex: "data",
  },
];

var data = [
  {
    key: "1",
    name: "John Brown",
    customTitle: "hahahaha",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];
import axios from "axios";
const service = axios.create({
  baseURL: "/quant",
  headers: {
    "Content-Type": "application/json;",
  },
});
export default {
  name: "AIMSPosition",
  data() {
    return {
      data,
      columns,
    };
  },
  mounted() {
    service.get("/api/aims_position").then((response) => {
      this.data.forEach((element) => {
        element["data"] = response.data;
      });
    });
  },
};
</script>
