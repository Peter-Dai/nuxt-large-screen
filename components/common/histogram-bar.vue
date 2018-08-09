<template>
  <div
    v-resize-container
    ref="histogramBar"
    class="histogramBar">
    histogramBar
  </div>
</template>

<script>
import _ from 'lodash';
import helper from '~/utils/helper';

export default {
  name: 'HistogramBar',
  props: {
    options: {
      default: () => {},
      type: Object,
    },
    type: {
      default: 'amount',
      type: String,
    },
  },
  mounted() {
    let { isPromissFn, handleException } = helper;
    let currentElem = this.$refs.histogramBar;
    let { getSources, title } = Object.assign(
      {},
      {
        getSources: null,
        title: 'test-test',
      },
      this.options,
    );

    const remSize = helper.getRemSize();
    const type = this.type;

    const myChart = this.$echarts.init(currentElem);
    const baseOption = {
      title: {
        text: title,
        textStyle: {
          color: '#fff',
          fontSize: '100%',
          fontFamily: 'Arial, Verdana, sans-serif',
          fontWeight: 700,
        },
        padding: '100%',
      },
      grid: [
        {
          // width: this.$refs.histogramBar.clientWidth - (remSize * 2),
          height: '93%',
          x: '0',
          y: '13%',
          containLabel: true,
        },
      ],
      tooltip: {
        trigger: 'axis',
      },
      xAxis: [
        {
          show: false,
        },
      ],
      yAxis: [
        {
          type: 'category',
          axisLabel: {
            // 坐标轴文本标签选项
            textStyle: {
              color: '#fff',
              // fontSize: 0.66 * remSize,
              fontFamily: 'Arial, Verdana, sans-serif',
              fontWeight: 500,
            },
          },
          splitLine: {
            // 分隔线
            show: false,
          },
          axisTick: {
            // 坐标刻度线
            show: false,
          },
          axisLine: {
            // 坐标轴线
            show: false,
          },
          data: [],
        },
      ],
      series: [
        {
          name: '最近30天交易额',
          type: 'bar',
          label: {
            // 图形上数据信息
            normal: {
              // position: [this.$refs.histogramBar.clientWidth - (remSize * 6), -5], // 图形上数据信息的位置
              show: true,
              color: '#fff',
              formatter(data) { // 图形上数据信息格式化
                const template = data.data;
                return `${template}万${type === 'amount' ? '元' : '笔'}`;
              },
              // fontSize: 0.66 * remSize,
            },
          },
          itemStyle: {
            normal: {
              color: new this.$echarts.graphic.LinearGradient(
                0, 0, 1, 0, // 配置渐变色的起止位置右/下/左/上，此处设置从左开始渐变
                [
                  { offset: 0, color: '#0f35ff' }, // offset表示位置，范围0-1
                  { offset: 0.5, color: '#0f35ff' },
                  { offset: 1, color: '#009ef5' },
                ],
              ),
            },
          },
          // barWidth: 0.5 * remSize,
          data: [],
        },
      ],
    };
    myChart.showLoading();
    // myChart.setOption(option);

    let getResizeOption = () => {
      const remSizeTemp = helper.getRemSize();

      return {
        grid: [
          {
            width: currentElem.clientWidth - (remSizeTemp * 2),
          },
        ],
        yAxis: [
          {
            axisLabel: {
              textStyle: {
                fontSize: 0.66 * remSizeTemp,
              },
            },
          },
        ],
        series: [
          {
            label: {
            // 图形上数据信息
              normal: {
                position: [currentElem.clientWidth - (remSizeTemp * 6), -5],
                fontSize: 0.66 * remSizeTemp,
              },
            },
            barWidth: 0.5 * remSizeTemp,
          },
        ],
      };
    };

    let asynFn = isPromissFn(getSources);
    if (asynFn) {
      asynFn.then((responce) => {
        let getyAxisData;
        let tempData;
        if (!!responce && responce instanceof Array) {
          getyAxisData = responce.map(i => i.name);
          tempData = responce.map(i => i.value);
        }
        myChart.hideLoading(); // 隐藏加载动画
        myChart.setOption(_.merge({}, baseOption, getResizeOption(), {
          // 加载数据图表
          yAxis: [{
            data: getyAxisData,
          }],
          series: [
            {
              // 根据名字对应到相应的系列
              data: tempData,
            },
          ],
        }));
      }).catch((err) => {
        handleException(baseOption, myChart);
      });
    }

    // 自适应
    window.addEventListener('resize', () => {
      myChart.setOption(getResizeOption());
      myChart.resize();
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.histogramBar {
  padding: 0;
  width: 100%;
  height: 100%;
  line-height: 100%;
}
</style>
