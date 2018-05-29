import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'

let config = {
  apiKey: 'AIzaSyDRkJQQydkBc0PZb4Qlpy2fLJ_IS',
  authDomain: 'lastproject-c8f16.firebaseapp.com',
  databaseURL: 'https://lastproject-c8f16.firebaseio.com',
  projectId: 'lastproject-c8f16',
  storageBucket: 'lastproject-c8f16.appspot.com',
  messagingSenderId: '414391414519'
}
var firebaseApp = firebase.initializeApp(config)
let provider = new firebase.auth.FacebookAuthProvider()
provider.addScope('public_profile')
provider.setCustomParameters({
  'display': 'popup'
})
var db = firebaseApp.database()
Vue.use(Vuex)
export const store = new Vuex.Store({
  state: {
    id: '',
    subject: []
  },
  getters: {
    id: state => state.id,
    subject: state => state.subject
  },
  mutations: {
    setID (state, id) {
      state.id = id
    },
    setSubject (state, subject) {
      state.subject = subject
    }
  },
  actions: {
    inputStd (context, std) {
      db.ref('Std').child(std.id + '/name').set(std.name)
      db.ref('Std').child(std.id + '/last').set(std.last)
      context.commit('setID', std.id)
    },
    inputSubject (context, subject) {
      db.ref('Std/' + context.state.id + '/Subject').child(subject.id + '/name').set(subject.name)
      db.ref('Std/' + context.state.id + '/Subject').child(subject.id + '/credit').set(subject.credit)
      db.ref('Std/' + context.state.id + '/Subject').child(subject.id + '/score').set(0)
    },
    showSubject (context) {
      var ref = db.ref('Std/' + context.state.id + '/Subject')
      ref.on('value', (snapshot) => {
        context.commit('setSubject', snapshot.val())
      })
    },
    removeSubject (context, key) {
      db.ref('Std/' + context.state.id + '/Subject').child(key).remove()
    },
    updateScore (context, subject) {
      db.ref('Std/' + context.state.id + '/Subject').child(subject.key + '/score').set(subject.score)
    }
  }
})
