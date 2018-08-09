<template>
  <el-container
    class="today-container">
    <el-header style="padding:20px">
      <el-row
        type="flex"
        justify="space-between"
        class="header-row">
        <el-col :span="8">
          <div class="header-title">今日成交笔数</div>
          <div>
            <template
              v-for="(value,index) in renderDisplayNumber(counts)">
              <div
                v-if="value !=','"
                :key="index"
                class="num-div">{{ value }}</div>
              <template v-else>,</template>
            </template>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="header-title">今日成交金额</div>
          <div>
            ￥
            <template
              v-for="(value,index) in renderDisplayNumber(amounts)">
              <div
                v-if="value !=','"
                :key="index"
                class="num-div">{{ value }}</div>
              <template v-else>,</template>
            </template>
          </div>
        </el-col>
      </el-row>
    </el-header>
    <el-main class="today-main">
      <DomesticMap :options ="mapOptions"/>
    </el-main>
  </el-container>
</template>

<script>

import transactionApi from '~/api/transaction';
import DomesticMap from '../common/domestic-map';

export default {
  name: 'TodayTransactionSummary',
  components: {
    DomesticMap,
  },
  data() {
    return {
      counts: '1',
      amounts: '10',
      mapOptions: {
        getSources: transactionApi.retrieveDailyTransaction,
      },
    };
  },

  mounted() {
    setInterval(() => {
      this.counts = `${+this.counts + 1}`;
      this.amounts = `${+this.amounts + 1}`;
    }, 300);
  },
  methods: {
    renderDisplayNumber(value) {
      if (!!value && !isNaN(value)) {
        return value.replace(/\d{1,3}(?=(\d{3})+$)/g, '$&,').split('');
      }
      return [];
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.today-main {
  background: linear-gradient(to right, #061441, #05194d 50%, #061441);
  padding: 0;
}

.today-container {
  height: 100%;
}

.num-div {
  font-family: 'Arial, Verdana, sans-serif';
  display: inline-block;
  background-color: #0051f8;
  color: #ffffff;
  margin: 1px;
  padding: 2px;
}

.header-title{
  font-family: 'Arial, Verdana, sans-serif';
  font-weight: 700;
  margin-bottom:  20px;
}

.header-row{
  color:#ffffff;
}
</style>
