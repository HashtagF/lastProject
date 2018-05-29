<template>
  <div class="container">
    <div class="row pb-5">
      <div class="col">
        <h1>ข้อมูลนักศึกษา</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-default">รหัสนักศึกษา</span>
          </div>
          <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" v-model="std.id">
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-default">ชื่อ</span>
          </div>
          <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" v-model="std.name">
        </div>
      </div>
      <div class="col-6">
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-default">นามสกุล</span>
          </div>
          <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" v-model="std.last">
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <button type="button" class="btn btn-primary btn-lg btn-block" @click="addStd()">Login</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Home',
  data () {
    return {
      std: {
        id: '',
        name: '',
        last: ''
      }
    }
  },
  computed: {

  },
  methods: {
    ...mapActions([
      'inputStd'
    ]),
    addStd () {
      this.inputStd(this.std)
      this.$router.push({path: '/Dashboard'})
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
