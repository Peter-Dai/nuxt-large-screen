<template>
  <el-container
    class="month-container">
    <el-header
      class="month-header"
      height="5%"
    >
      最近30天实时数据
    </el-header>
    <el-header
      class="month-header top-radius"
      height="20%"
      style="text-align:left;">
      <el-row
        :gutter="24"
        type="flex"
        justify="space-around"
      >
        <el-col
          :span="7"
        >
          <div class ="title">交易额</div>
          <div class ="content">￥122,123,123,213</div>
        </el-col>
        <el-col
          :span="7"
        >
          <div class ="title">订单数</div>
          <div class ="content">122,123,123,213</div>
        </el-col>
        <el-col :span="7">

          <div class ="title">佣金</div>
          <div class ="content">￥122,123,123,213</div>
        </el-col>
      </el-row>
    </el-header>
    <!-- </el-header> -->
    <el-header
      height="35%"
      class="month-header">
      <AreaLine :options ="amountChartOptions"/>
    </el-header>
    <el-header
      height="35%"
      class="month-header">
      <AreaLine :options ="orderChartOptions"/>
    </el-header>
  </el-container>
</template>

<script>
import transactionApi from '@/api/transaction';
import AreaLine from '../common/area-line';
import HistogramBar from '../common/histogram-bar';

export default {
  name: 'MonthTranscationSummary',
  components: {
    AreaLine,
    HistogramBar,
  },
  data() {
    return {
      amountChartOptions: {
        getSources: transactionApi.retrieveMonthlyAmounts,
        lineColor: 'rgb(0, 107, 224)',
        title: '万元-交易额',
        areaColor: 'rgb(5, 58, 139)',
      },
      orderChartOptions: {
        getSources: transactionApi.retrieveMonthlyOrders,
        lineColor: 'rgb(186, 0, 184)',
        title: '笔-订单数',
        areaColor: 'rgb(91, 9, 135)',
      },
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.month-container {
  color: #ffffff;
  height: 100%;
}

.month-header {
  margin-bottom: 0.55rem;
  background: linear-gradient(to right, #0a1760, #080c37);
  border-radius: 5px;
  box-shadow: 2px 2px 1px #0a155a;
  opacity: 0.8;
  font-size: 0.66rem;
  padding: 0.5rem;
}

.month-header:first-child {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.top-radius {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.month-header .el-row {
  height: 100%;
  margin-left: 0 !important;
  margin-right: 0 !important;
}

.month-header .el-col {
  height: 100%;
  padding: 0.3rem;
  background: linear-gradient(to right, #031399, #071159);
  opacity: 0.8;
  border-color: #1c299a;
}

.month-header:last-child {
  margin-bottom: 0;
}

.month-header:first-child {
  text-align: left;
  background-color: unset;
  margin-bottom: 0;
  font-size: 1rem;
  padding: 0 0.3rem 0.3rem 0.3rem;
  font-family: 'Arial, Verdana, sans-serif';font-weight: 700
}

.title {
  font-family: 'Arial, Verdana, sans-serif';
  font-weight: 800;
  /* margin-bottom: 15px; */
  height: 50%;
}

.content {
  font-family: 'Arial, Verdana, sans-serif';
  font-weight: 600;
  color: #66ccff;
  height: 50%;
}
</style>
