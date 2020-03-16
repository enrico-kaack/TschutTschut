<template>
  <div>
    <v-simple-table>
      <thead>
        <tr>
          <th class="text-left">Name</th>
          <th class="text-left">ID</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="member in room.members" :key="member.id">
          <td>{{ member.name }}</td>
          <td>{{ member.id }}</td>
        </tr>
      </tbody>
    </v-simple-table>
    <div>
      <v-btn id="startBtnDiv" depressed x-large color="success">Start Game</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: "PeerList",
  computed: {
    room() {
      return this.$store.getters.roomInformation;
    }
  }
};
</script>

<style scoped>
#startBtnDiv {
  width: 100%;
}
</style>