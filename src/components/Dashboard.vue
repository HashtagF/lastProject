<template>
  <div class="container">
    <div class="row pb-5">
      <div class="col-12">
        <h1>Dashboard</h1>
      </div>
      <div class="6">
        <h3>รหัสนักศึกษา: {{id}}</h3>
      </div>
    </div>
    <div class="row  d-flex justify-content-end">
      <div class="col-3">
        <button type="button" class="btn btn-info btn-block" @click="addSubject()">เพิ่มวิชาเรียน</button>
      </div>
      <div class="col-12">
        <h2>วิชาที่ลงทะเบียน</h2>
        <table class="table">
          <tr>
            <th>รหัสวิชา</th>
            <th>ชื่อวิชา</th>
            <th>หน่วยกิต</th>
            <th>คะแนน</th>
            <th>เกรด</th>
            <th>ถอนวิชา</th>
          </tr>
          <tr v-for="(sub, index) in subject" :key="index" >
            <td>{{index}}</td>
            <td>{{sub.name}}</td>
            <td>{{sub.credit}}</td>
            <td> <input class="form-control" type="number" :value="sub.score" @> </td>
            <td>{{ grade(sub.score) }}</td>
            <td> <a href="#" @click="delSubject(index)"> <img src="../assets/del.svg" alt=""> </a></td>
          </tr>
        </table>
      </div>
    </div>

  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'addSubject',
  data () {
    return {
      score: ''
    }
  },
  created () {
    this.showSubject()
  },
  computed: {
    ...mapGetters([
      'subject',
      'id'
    ])
  },
  methods: {
    ...mapActions([
      'showSubject',
      'removeSubject'
    ]),
    addSubject () {
      this.$router.push({path: '/addSubject'})
    },
    delSubject (key) {
      this.removeSubject(key)
    },
    grade (score) {
      if (score <= 100 && score >= 80) {
        return 'A'
      } else if (score >= 75) {
        return 'B+'
      } else if (score >= 70) {
        return 'B'
      } else if (score >= 65) {
        return 'C+'
      } else if (score >= 60) {
        return 'C'
      } else if (score >= 55) {
        return 'D+'
      } else if (score >= 50) {
        return 'D'
      } else {
        return 'F'
      }
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
