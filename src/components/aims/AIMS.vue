<template>
  <div>
    <AIMSPosition></AIMSPosition>
    <a-divider></a-divider>
    <AIMSSellings></AIMSSellings>
  </div>
</template>

<script>
import AIMSPosition from "./AIMSPosition";
import AIMSSellings from "./AIMSSellings";
export default {
  name: "AIMS",
  components: {
    AIMSPosition,
    AIMSSellings,
  },
};
</script>

<style>
</style>