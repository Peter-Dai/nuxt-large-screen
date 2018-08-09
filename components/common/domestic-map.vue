<template>
  <div
    v-resize-container
    ref="domesticMap"
    class="domesticMap">domestic-map</div>
</template>

<script>

import helper from '~/utils/helper';
import mapMarked from '~/assets/map-marked.svg';
import 'echarts/map/js/china';
import _ from 'lodash';

export default {
  name: 'DomesticMap',
  props: {
    options: {
      default: () => {},
      type: Object,
    },
  },
  mounted() {
    let { isPromissFn, handleException } = helper;

    let { getSources } = Object.assign(
      {},
      {
        getSources: null,
      },
      this.options,
    );

    let myChart = this.$echarts.init(this.$refs.domesticMap);
    const baseOption = {
      tooltip: {
        trigger: 'item',
        showDelay: 0,
        transitionDuration: 0.2,
        backgroundColor: 'rgba(54, 72, 153, 0.8)',
        formatter(params) {
          return `<div style="padding:5px;text-align:left;font-size:0.66rem;">
                    <div style ='line-height: initial;'>
                      <span style="font-size:0.77rem" >${params.name}</span>
                    </div>
                    <div style ='line-height: initial;'>
                      <span >交易金额:</span><span style='color:#ffff3b;font-size:0.77rem'>
                        ${params.data.amount}
                      </span>万元
                    </div>
                    <div style ='line-height: initial;'>
                      <span>订单数:</span>
                      <span style='color:#ffff3b;font-size:0.77rem'>
                        ${params.data.orders}
                      </span>
                    </div>
                  </div>
                  `;
        },
      },
      series: [
        {
          type: 'map',
          mapType: 'china',
          label: {
            normal: {
              show: false, // 显示省份标签
              textStyle: { color: '#c71585' }, // 省份标签字体颜色
            },
            emphasis: {
              // 对应的鼠标悬浮效果
              show: true,
              formatter(params) {
                return '{marked|}';
              },
              rich: {
                marked: {
                  backgroundColor: {
                    image: mapMarked,
                  },
                  // height: 根据rem重新计算,
                },
              },
            },
          },
          itemStyle: {
            normal: {
              borderWidth: 0.2, // 区域边框宽度
              borderColor: '#051c55', // 区域边框颜色
              areaColor: '#cfebf6', // 区域颜色
            },
            emphasis: {
              borderWidth: 0.2,
              borderColor: '#051c55',
              areaColor: '#006be0',
            },
          },
          data: [],
        },
      ],
    };

    let getResizeOption = () => {
      const remSizeTemp = helper.getRemSize();

      return {
        series: [
          {
            label: {
              emphasis: {
                rich: {
                  marked: {
                    height: remSizeTemp / 2,
                  },
                },
              },
            },
          },
        ],
      };
    };

    myChart.showLoading();

    let asynFn = isPromissFn(getSources);
    if (asynFn) {
      asynFn.then(
        (responce) => {
          let ignore = {
            name: '南海诸岛',
            value: 0,
            itemStyle: {
              normal: {
                opacity: 0,
                label: { show: false },
              },
            },
          };

          responce.push(ignore);

          myChart.hideLoading(); // 隐藏加载动画
          myChart.setOption(
            _.merge({}, baseOption, getResizeOption(), {
              // 加载数据图表
              series: [
                {
                  // 根据名字对应到相应的系列
                  data: responce,
                },
              ],
            }),
          );
          this.autoShowTooltip(myChart);
        }).catch((err) => {
        handleException(baseOption, myChart);
      });
    }

    window.addEventListener('resize', () => {
      myChart.setOption(getResizeOption());
      myChart.resize();
    });
  },
  methods: {
    autoShowTooltip: (mapChart) => {
      let currentIndex = -1;
      setInterval(() => {
        const dataLen = mapChart.getOption().series[0].data.length;
        // 取消之前高亮的图形
        mapChart.dispatchAction({
          type: 'downplay',
          seriesIndex: 0,
          dataIndex: currentIndex,
        });
        currentIndex = (currentIndex + 1) % dataLen;
        // // 高亮当前图形
        mapChart.dispatchAction({
          type: 'highlight',
          seriesIndex: 0,
          dataIndex: currentIndex,
        });
        // 显示 tooltip
        mapChart.dispatchAction({
          type: 'showTip',
          seriesIndex: 0,
          dataIndex: currentIndex,
        });
      }, 1000);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.domesticMap {
  height: 100%;
  width: 100%;
  line-height: 100%;
}
</style>
