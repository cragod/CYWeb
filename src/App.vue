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
};
</script>

<style scoped>
#pos {
  margin: 10px;
}
</style>
