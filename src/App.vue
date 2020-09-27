<template>
  <AIMSPosition id="pos"></AIMSPosition>
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
