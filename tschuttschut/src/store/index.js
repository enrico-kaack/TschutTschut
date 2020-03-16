import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

      admin: {
        amIAdmin: false,
        admin: null
      },
      peer: {
        id: null,
        ready: false,
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
      },
      isPeerReady: state => {
        return state.peer.ready
      }
  },
  mutations: {
    PEER_OPEN(state, id) {
      state.peer.id = id.args[0];
      state.peer.ready = true
    },
    PEER_ERROR(state, error) {
      state.error = error;
    },
    PEER_CONNECTION(state, data) {
      let conn = data.args[0]
      console.log("Cand", conn)
      
    },
    add_Member(state, peer) {
      state.room.members.push(peer)
    },
    makeMeAdmin(state) {
      state.admin.amIAdmin = true
      state.admin.peer = null
      state.room.members.push({
        name: "Host",
        id: state.peer.id
      })
    },
    set_Admin(state, id){
      state.admin.admin = id
    }
  },
  actions: {
    connect_to_Admin(context){
      console.log("peerStatus", context.state.peer.ready)
      let conn = this._vm.$peer.connect(context.state.admin.admin, {metadata: {
        name: "NewName"
      }})
      conn.on("open", function() {
        console.log("opened")
        conn.send("hi")
      })
    },
    peer_connection(context, data){
      let conn = data.args[0]
      console.log("Cand", conn)
      context.commit("add_Member", {name: conn.metadata.name, id: conn.peer, conn: conn})
    },
    peer_data(context, args){
      console.log("Received data", args)
    }
  },
  modules: {
  }
})
