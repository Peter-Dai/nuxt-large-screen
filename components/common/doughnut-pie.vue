<template>
  <div
    v-resize-container
    ref="doughnutPie"
    class="doughnutPie"
  >
    doughnut-pie
  </div>
</template>

<script>
import _ from 'lodash';
import helper from '~/utils/helper';

export default {
  name: 'DoughnutPie',
  props: {
    options: {
      default: () => {
      },
      type: Object,
    },
  },
  mounted() {
    let { isPromissFn, handleException } = helper;
    const { getSources, title } = Object.assign(
      {},
      {
        getSources: null,
        title: 'test-test',
      },
      this.options,
    );
    const colorArray = [
      { normal: { color: '#0068ed' } },
      { normal: { color: '#efef50' } },
      { normal: { color: '#00b674' } },
      { normal: { color: '#efaa20' } },
      { normal: { color: '#f7461c' } },
      { normal: { color: '#008bfb' } },
    ];
    const myChart = this.$echarts.init(this.$refs.doughnutPie);
    const baseOption = {
      title: [ // 设置两个title
        {
          text: title[0],
          x: '19%',
          y: 'bottom',
          textStyle: {
            // fontSize: 根据rem重新计算,
            color: '#fff',
          },
        },
        {
          text: title[1],
          x: '69%',
          y: 'bottom',
          textStyle: {
            // fontSize:根据rem重新计算,
            color: '#fff',
          },
        },
      ],
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)',
      },
      series: [
        {
          name: '支付方式',
          type: 'pie',
          radius: ['30%', '50%'], // 环形图内圆和外圆的半径
          center: ['25%', '40%'], // 环形图位置控制
          itemStyle: {
            normal: {
              label: { // 引导线文字样式
                show: true,
                // fontSize: 根据rem重新计算,
                fontFamily: 'Arial, Verdana, sans-serif',
                formatter: '{b} {d}%', // 格式化引导线文字样式
              },
              labelLine: { // 引导线样式
                show: true,
                length: 4, // 引导线长度控制
              },
            },
          },
          data: [],
        },
        {
          name: '支付终端',
          type: 'pie',
          radius: ['30%', '50%'], // 环形图内圆和外圆半径
          center: ['75%', '40%'], // 环形图位置控制
          calculable: true,
          itemStyle: {
            normal: {
              label: { // 引导线文字样式
                show: true,
                // fontSize: 根据rem重新计算,
                fontFamily: 'Arial, Verdana, sans-serif',
                formatter: '{b} {d}%', // 格式化引导线文字样式
              },
              labelLine: { // 引导线样式
                show: true,
                length: 4, // 引导线长度控制
              },
            },
          },
          data: [],
        },
      ],
    };

    let getResizeOption = () => {
      const remSizeTemp = helper.getRemSize();

      return {
        title: [ // 设置两个title
          {
            textStyle: {
              fontSize: 0.6 * remSizeTemp,
            },
          },
          {
            textStyle: {
              fontSize: 0.6 * remSizeTemp,
            },
          },
        ],
        series: [
          {
            itemStyle: {
              normal: {
                label: { // 引导线文字样式
                  fontSize: 0.6 * remSizeTemp,
                },
              },
            },
          },
          {
            itemStyle: {
              normal: {
                label: { // 引导线文字样式
                  fontSize: 0.6 * remSizeTemp,
                },
              },
            },
          },
        ],
      };
    };
    myChart.showLoading();
    // myChart.setOption(option);

    let asynFn = isPromissFn(getSources);
    if (asynFn) {
      asynFn.then((responce) => {
        let tempPaymentMethod;
        let tempPaymentTerminal;
        if (!!responce && responce instanceof Array) {
          tempPaymentMethod = responce[0];
          tempPaymentTerminal = responce[1];
          tempPaymentMethod.forEach((item, i) => {
            const addStyle = item;
            addStyle.itemStyle = colorArray[i];
          });
          tempPaymentTerminal.forEach((item, i) => {
            const addStyle = item;
            addStyle.itemStyle = colorArray[i];
          });
        }
        myChart.hideLoading(); // 隐藏加载动画

        myChart.setOption(_.merge({}, baseOption, getResizeOption(), {
          // 加载数据图表
          series: [
            {
              // 根据名字对应到相应的系列
              data: tempPaymentMethod,
            },
            {
              data: tempPaymentTerminal,
            },
          ],
        }));
      }).catch((err) => {
        handleException(baseOption, myChart);
      });
    }

    window.addEventListener('resize', () => {
      myChart.setOption(getResizeOption());
      myChart.resize();
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.doughnutPie {
  width: 100%;
  height: 100%;
  line-height: 100%;
}
</style>
