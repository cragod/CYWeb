<template>
  <a-row type="flex" justify="center">
    <div id="pos">
      <AIMSPosition></AIMSPosition>
      <a-divider></a-divider>
      <AIMSSellings></AIMSSellings>
    </div>
  </a-row>
</template>

<script>
import AIMSPosition from "./components/AIMSPosition";
import AIMSSellings from "./components/AIMSSellings";
export default {
  name: "App",
  components: {
    AIMSPosition,
    AIMSSellings,
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
