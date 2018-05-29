<template>
  <div class="container">
    <div class="row pb-5">
      <div class="col">
        <h1>เพิ่มวิชาเรียน</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-default">รหัสวิชา</span>
          </div>
          <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" v-model="subject.id">
        </div>
      </div>
      <div class="col-8">
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-default">ชื่อวิชา</span>
          </div>
          <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" v-model="subject.name">
        </div>
      </div>
      <div class="col-4">
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-default">หน่วยกิต</span>
          </div>
          <input type="number" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" v-model="subject.credit">
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-8">
        <button type="button" class="btn btn-primary btn-block" @click="addSubject()">เพิ่มวิชาเรียน</button>
      </div>
      <div class="col-4">
        <button type="button" class="btn btn-danger btn-block" @click="cancelSubject()">ยกเลิก</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'addSubject',
  data () {
    return {
      subject: {
        id: '',
        name: '',
        credit: ''
      }
    }
  },
  computed: {
  },
  methods: {
    ...mapActions([
      'inputSubject'
    ]),
    addSubject () {
      this.inputSubject(this.subject)
      this.$router.push({path: '/Dashboard'})
    },
    cancelSubject () {
      this.$router.push({path: '/Dashboard'})
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
