<template>
  <el-container
    class="top-container">
    <el-header
      height="35%"
      class="top-header">
      <histogramBar
        type ="amount"
        :options ="transactionAmountOption"/>
    </el-header>
    <el-header
      height="35%"
      class="top-header">
      <histogramBar
        type ="number"
        :options ="transactionNumberOption"/>
    </el-header>
    <el-header
      height="25%"
      class="top-header">
      <doughnutPie :options ="doughnutPieOption"/>
    </el-header>
  </el-container>
</template>

<script>
import transactionApi from "~/api/transaction";
import HistogramBar from "../common/histogram-bar";
import DoughnutPie from "../common/doughnut-pie";

export default {
  name: "TopFiveSummary",
  components: { HistogramBar, DoughnutPie },
  data() {
    return {
      transactionAmountOption: {
        getSources: transactionApi.retrieveTopFiveTransactionAmount,
        title: "最近30天交易额 TOP 5 城市"
      },
      transactionNumberOption: {
        getSources: transactionApi.retrieveTopFiveTransactionNumber,
        title: "最近30天交易笔数 TOP 5 城市"
      },
      doughnutPieOption: {
        getSources: transactionApi.retrieveTopFiveDoughnutPie,
        title: ["支付方式", "支付终端"]
      }
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.top-container {
  height: 100%;
}

.top-header {
  margin-bottom: 0.5rem;
  padding: 0.7rem;
  /*background: linear-gradient(to right, #080b37, #0a155a 70%, #080b37);*/
  background: linear-gradient(to bottom, #080b37, #0a155a 70%, #080b37);
  border-radius: 5px;
  box-shadow: 2px 2px 1px #0a155a;
  opacity: 0.8;
}

.top-header:last-child {
  padding: 0.7rem;
  background: linear-gradient(to right, #0b1152, #081248);
}
</style>
