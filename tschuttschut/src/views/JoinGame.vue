<template>
  <v-container>
    <div v-if="masterID !== null">Connecting to Host {{masterID}}</div>
    <div v-else>You did not specify a Host adress. Please ask your host to share a link.</div>
  </v-container>
</template>

<script>
export default {
  name: "JoinGame",
  computed: {
    masterID: function() {
      return this.$route.query.master;
    },
    peerStatus: function() {
      return this.$store.getters.isPeerReady;
    }
  },
  watch: {
    peerStatus(newValue) {
      console.log(newValue);
      if (newValue) {
        if (this.masterID !== null) {
          this.$store.commit("set_Admin", this.masterID);
          this.$store.dispatch("connect_to_Admin");
        }
      }
    }
  },
  created: function() {}
};
</script>

<style>
</style>