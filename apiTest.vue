<template>
  <div>
    <obg-list style="height:69px;" :hideDummyItem="true">
      <obg-list-item class="header">
        <div class="text category">Category</div>
        <div class="text">API</div>
        <div class="text">Actual Data</div>
        <div class="text">Expected Data</div>
        <div class="text result">Result</div>
      </obg-list-item>
    </obg-list>

    <obg-list>
      <obg-list-item v-for="object in AnswerSheet">
        <div class="text category">{{object.category}}</div> <!--Category-->
        <div class="text">{{object.api}}</div>  <!--API-->
        <div class="text">{{ActualResult(object.category, object.api)}}</div> <!--Actual-->
        <div class="text">{{object.expected}}</div> <!--expected-->
       <div v-if="compare(ActualResult(object.category, object.api),object.expected)==true" class="text result" style="color:deepskyblue;">Pass</div> 
        <div v-else class="text result" style="color:deeppink;">Fail</div>
      </obg-list-item>
    </obg-list>
  </div>
</template>

<script>
import doAPITest from '../store/apis.js'
import answers from '../assets/resources/answers.json'
import {list, listItem} from 'obigo-js-ui-rnbs/components/list'
var Total = 0
var Pass = 0
var Fail = 0
export default {
  computed: {
    AnswerSheet: function () {
      let arr = []
      let answersObject = Object(answers)
      for (let key in answersObject) {
        for (let childKey in answersObject[key]) {
          let obj = {}
          obj.category = key
          obj.api = childKey
          obj.expected = answersObject[key][childKey]
          arr.push(obj)
        }
      }
      return arr
    }
  },
  components: {
    'obg-list': list,
    'obg-list-item': listItem
  },
  methods: {
    compare: function (a, b) {
      Total = Total + 1
      console.log('Total: ', Total)
      if (a === b) {
        Pass = Pass + 1
        console.log('Pass: ', Pass)
        return true
      } else {
        Fail = Fail + 1
        console.log('Fail: ', Fail)
        return false
      }
    },
    ActualResult: function (key, keys) {
      if (doAPITest[key]) {
        return doAPITest[key][keys]
      } else {
        var NoAPI = 'NoAPI'
        return NoAPI
      }
    },
    getTotal: function () {
      return Total
    },
    getPass: function () {
      return Pass
    },
    getFail: function () {
      return Fail
    }
  }
}
</script>
<style lang='scss' scoped>
  .pop-contents{
    padding:20px 20px;
    p{
      text-align:center;
      font-size:20px;
    }
  }
  .obg-list{
    height: 354px;
    .obg-list-item{
      &.header{
        pointer-events: none;
      }
      .text{
        font-size:17px;
        margin: auto 0 auto 22px;
        width: 160px;
        text-align: center;
      }
      .category{
        width: 100px;
        margin-right: 10px;
        color: #ffffff;
      }
      .result{
        float: right;
        width: 100px;
        text-align: center;
      }
    }
  }
</style>
