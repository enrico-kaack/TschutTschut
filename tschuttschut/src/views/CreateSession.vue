<template>
  <v-container>
    <div>
      <h3>You started a new game. Please copy this link and share with others:</h3>
      <v-text-field append-icon="file_copy" @click:append="copyToClipboard" v-model="masterUrl"></v-text-field>
    </div>
    <PeerList></PeerList>
  </v-container>
</template>

<script>
import PeerList from "../components/PeerList";
export default {
  name: "CreateSession",
  computed: {
    masterUrl() {
      return this.$store.getters.masterUrl;
    }
  },
  methods: {
    copyToClipboard: function() {
      const el = document.createElement("textarea");
      el.value = this.masterUrl;
      el.setAttribute("readonly", "");
      el.style.position = "absolute";
      el.style.left = "-9999px";
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    }
  },
  components: {
    PeerList
  }
};
</script>

<style>
</style>