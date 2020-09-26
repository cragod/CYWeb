<template>
  <a-row type="flex" justify="center">
    <a-col :span="8">
      <AIMSPosition id="pos"></AIMSPosition>
    </a-col>
  </a-row>
</template>

<script>
import AIMSPosition from "./components/AIMSPosition";
export default {
  name: "App",
  components: {
    AIMSPosition,
  },
};
</script>

<style scoped>
#pos {
  margin: 10px;
  widows: 80%;
}
</style>
