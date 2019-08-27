<template>
  <h1>Wait...</h1>
</template>
<script>
import { REGISTER_VERIFY } from "@/store/actions_type";
export default {
  beforeCreate: function() {
    let token = this.$route.params.token;
    this.$store.dispatch(REGISTER_VERIFY, token);
  }
};
</script>