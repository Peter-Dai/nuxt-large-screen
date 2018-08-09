<template>
  <el-container
    class="container">
    <el-aside
      class="left-aside"
      width="30%">
        <TopFiveSummary/>
    </el-aside>
    <el-main
      class="main"
      width="40%">
      <TodayTransactionSummary/>
    </el-main>
    <el-aside
      class="right-aside"
      width="30%">
      <MonthTranscationSummary/>
    </el-aside>
  </el-container>
</template>

<script>

 import MonthTranscationSummary from '~/components/index/month-transcation-summary';
 import TodayTransactionSummary from '~/components/index/today-transaction-summary';
 import TopFiveSummary from '~/components/index/top-five-summary';


export default {
  // name: 'Index',
  components: {
    MonthTranscationSummary,
    TodayTransactionSummary,
    TopFiveSummary,
  },
  data() {
    return {
      msg: '',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


.left-aside {
  background: linear-gradient(to right, #070925, #061542);
  padding: 0.8rem;
}

.main {
  background: linear-gradient(to right, #061441, #051a51 50%, #061441);
}

.right-aside {
  background: linear-gradient(to right, #061542, #070925);
  padding: 0.8rem;
}


</style>
