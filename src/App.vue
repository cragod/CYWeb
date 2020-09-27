<template>
  <a-row type="flex" justify="center">
    <AIMSPosition id="pos"></AIMSPosition>
  </a-row>
</template>

<script>
import AIMSPosition from "./components/AIMSPosition";
export default {
  name: "App",
  components: {
    AIMSPosition,
  },
  created() {
    document.title = "AIMS";
  },
};
</script>

<style scoped>
#pos {
  margin: 10px;
  widows: 80%;
}
</style>
