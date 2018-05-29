<template>
  <div class="container">
    <div class="row pb-5">
      <div class="col-12">
        <h1>Dashboard</h1>
      </div>
      <div class="6">
        <h5>รหัสนักศึกษา: {{ id }}</h5>
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
            <td> <input class="form-control" type="number" v-model="sub.score" @keyup.enter="editScore(sub, index)" min=0 max=100> </td>
            <td>{{ grade(sub.score) }}</td>
            <td> <a href="#" @click="delSubject(index)"> <img src="../assets/del.svg" alt=""> </a></td>
          </tr>
        </table>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <h5>เกรดเฉลี่ย : {{avgGrade/totalCredit}}</h5>
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
      score: {
        score: '',
        key: ''
      }
    }
  },
  created () {
    this.showSubject()
  },
  computed: {
    ...mapGetters([
      'subject',
      'id'
    ]),
    avgGrade: function () {
      let total = 0
      for (var key in this.subject) {
        var score = this.subject[key].score
        var credit = parseInt(this.subject[key].credit)
        if (score <= 100 && score >= 80) {
          total += 4 * credit
        } else if (score >= 75 && score < 80) {
          total += 3.5 * credit
        } else if (score >= 70 && score < 75) {
          total += 3 * credit
        } else if (score >= 65 && score < 70) {
          total += 2.5 * credit
        } else if (score >= 60 && score < 65) {
          total += 2 * credit
        } else if (score >= 55 && score < 60) {
          total += 1.5 * credit
        } else if (score >= 50 && score < 55) {
          total += 1 * credit
        } else {
          total += 0 * credit
        }
      }
      return total
    },
    totalCredit: function () {
      let total = 0
      for (var key in this.subject) {
        var credit = parseInt(this.subject[key].credit)
        total += credit
      }
      return total
    }
  },
  methods: {
    ...mapActions([
      'showSubject',
      'removeSubject',
      'updateScore'
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
      } else if (score >= 75 && score < 80) {
        return 'B+'
      } else if (score >= 70 && score < 75) {
        return 'B'
      } else if (score >= 65 && score < 70) {
        return 'C+'
      } else if (score >= 60 && score < 65) {
        return 'C'
      } else if (score >= 55 && score < 60) {
        return 'D+'
      } else if (score >= 50 && score < 55) {
        return 'D'
      } else {
        return 'F'
      }
    },
    editScore (sub, key) {
      this.score.score = sub.score
      this.score.key = key
      this.updateScore(this.score)
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
