<template>
  <v-container class="home">
    <h1>Tschut Tschut</h1>
    <div>To start a new game, press the button below. To join an existing game, visit the url the host shared with you.</div>
    <router-link to="CreateSession">
      <v-btn>Start Game</v-btn>
    </router-link>
  </v-container>
</template>

<script>
export default {
  name: "Home",
  components: {}
};
</script>
