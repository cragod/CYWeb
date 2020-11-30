<template>
  <div>
    <AIMSPosition></AIMSPosition>
    <a-divider></a-divider>
    <AIMSSellings></AIMSSellings>
    <a-divider></a-divider>
    <AIMSHolder></AIMSHolder>
  </div>
</template>

<script>
import AIMSPosition from "./AIMSPosition";
import AIMSSellings from "./AIMSSellings";
import AIMSHolder from "./AIMSHolder";
export default {
  name: "AIMS",
  components: {
    AIMSPosition,
    AIMSSellings,
    AIMSHolder,
  },
};
</script>

<style>
</style>