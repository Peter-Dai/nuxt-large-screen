<template>
  <div
    v-resize-container
    ref="areaLine"
    class="areaLine"
  >area-line</div>
</template>

<script>
import helper from '~/utils/helper';
import _ from 'lodash';

export default {
  name: 'AreaLine',
  props: {
    options: {
      default: () => {},
      type: Object,
    },
  },
  mounted() {
    let { getSources, lineColor, areaColor, title } = Object.assign(
      {},
      {
        getSources: null,
        lineColor: 'nocolor',
        areaColor: 'noareaColor',
        title: 'test-test',
      },
      this.options,
    );

    let { isPromissFn, handleException } = helper;

    const titles = title.split('-');

    const myChart = this.$echarts.init(this.$refs.areaLine);
    // 设置默认配置
    const baseOption = {
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: [], // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], // CONFIG
        splitLine: {
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
        axisLabel: {
          // 坐标轴文本标签选项
          textStyle: {
            color: '#fff',
            // fontSize: 根据rem重新计算,
            fontFamily: 'Arial, Verdana, sans-serif',
            fontWeight: 500,
          },
          interval: 4,
        },
        min: 1,
      },
      yAxis: {
        type: 'value',
        splitLine: {
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
        axisLabel: {
          // 坐标轴文本标签选项
          textStyle: {
            color: '#fff',
            // fontSize: 根据rem重新计算,
            fontFamily: 'Arial, Verdana, sans-serif',
            fontWeight: 500,
          },
        },
      },
      series: [
        {
          data: [], // CONFIG
          type: 'line',
          areaStyle: {
            normal: {
              color: areaColor, // 'rgb(5, 58, 139)',
            },
          },
          lineStyle: {
            color: lineColor, // 'rgb(0, 107, 224)',
            shadowColor: lineColor, // 'rgba(0, 107, 224)',
            shadowBlur: 20,
            shadowOffsetX: 5,
            opacity: 1,
          },
          symbolSize: 0,
        },
      ],
      grid: [
        {
          width: '98%',
          height: '80%',
          x: '0',
          y: '20%',
          containLabel: true,
        },
      ],
      title: {
        text: `{white|单位：${titles[0]}} {blue|———} {white|${titles[1]}}`,
        textStyle: {
          fontFamily: 'Arial, Verdana, sans-serif',
          fontWeight: 800,
          rich: {
            blue: {
              color: lineColor, // 'rgb(0, 107, 224)',
              lineHeight: 10,
              padding: [3, 10, -5, 10],
              // fontSize: 根据rem重新计算,
            },
            white: {
              color: 'rgb(255, 255, 255)',
              // fontSize: 根据rem重新计算,
              padding: [3, 10, -5, 0],
            },
          },
        },
      },
    };
    // 返回需动态计算属性配置
    let getResizeOption = () => {
      const remSizeTemp = helper.getRemSize();

      return {
      // 加载数据图表
        xAxis: {
          axisLabel: {
          // 坐标轴文本标签选项
            textStyle: {
              fontSize: 0.66 * remSizeTemp,
            },
          },
        },
        yAxis: {
          axisLabel: {
          // 坐标轴文本标签选项
            textStyle: {
              fontSize: 0.66 * remSizeTemp,
            },
          },
        },
        title: {
          textStyle: {
            rich: {
              white: {
                fontSize: 0.66 * remSizeTemp,
              },
            },
          },
        },
      };
    };
    // 显示加载动画
    myChart.showLoading();

    // 检查getSources属性
    let asynFn = isPromissFn(getSources);
    if (asynFn) {
      asynFn.then((responce) => {
        let getxAxisData;
        let tempData;
        if (!!responce && responce instanceof Array) {
          // 计算X轴刻度
          getxAxisData = [...responce.keys()].map(i => i + 1);
          getxAxisData.unshift(0);
          // 计算Y轴数据
          tempData = responce.map(i => i.amount);
          tempData.unshift('');
        }
        myChart.hideLoading(); // 隐藏加载动画
        // 合并默认配置、动态计算属性和数据属性
        myChart.setOption(_.merge({}, baseOption, getResizeOption(), {
          xAxis: {
            data: getxAxisData,
          },
          series: [
            {
              data: tempData,
            },
          ],
        }));
      }).catch((err) => {
        handleException(baseOption, myChart);
        myChart.setOption(getResizeOption());
      });
    }

    window.addEventListener('resize', () => {
      // 重新计算动态属性
      myChart.setOption(getResizeOption());
      myChart.resize();
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.areaLine {
  height: 100%;
  width: 100%;
  line-height: 100%;
}
</style>
