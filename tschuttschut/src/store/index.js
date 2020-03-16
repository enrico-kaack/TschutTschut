import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      peer: {
        id: null,
        error: null
      },
      room: {
        members: []
      }
    },
  getters: {
      masterUrl: state => {
        let masterUrl = window.location.origin  + "/join?master=" + state.peer.id
        return masterUrl
      },
      roomInformation: state => {
        return state.room
      }
  },
  mutations: {
    PEER_OPEN(state, id) {
      state.peer.id = id.args[0];
      state.room.members.push({
        name: "Host",
        id: id.args[0]
      })
    },
    PEER_ERROR(state, error) {
      state.error = error;
    },
    add_Member(state, peer) {
      state.room.members.push({
        name: peer.name,
        id: peer.id
      })
    }
  },
  actions: {
  },
  modules: {
  }
})
