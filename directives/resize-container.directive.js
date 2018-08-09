import Vue from 'vue';

Vue.directive('resize-container', {
  inserted(el) {
    const resizeChartContainer = (elem) => {
      let { paddingLeft, paddingRight, paddingTop, paddingbottom } = getComputedStyle(
        elem.parentElement,
        null,
      );

      if (paddingLeft) {
        paddingLeft = +paddingLeft.replace(/[p|x]/g, '');
      }
      if (paddingRight) {
        paddingRight = +paddingRight.replace(/[p|x]/g, '');
      }
      if (paddingTop) {
        paddingTop = +paddingTop.replace(/[p|x]/g, '');
      }
      if (paddingbottom) {
        paddingbottom = +paddingbottom.replace(/[p|x]/g, '');
      }

      const targetELem = elem;
      targetELem.style.width = `${targetELem.parentElement.clientWidth - (paddingLeft || 0) - (paddingRight || 0)}px`;
      targetELem.style.height = `${targetELem.parentElement.clientHeight - (paddingTop || 0) - (paddingbottom || 0)}px`;
    };
    // 设置容器高宽
    resizeChartContainer(el);

    window.addEventListener('resize', () => {
      resizeChartContainer(el);
    });
  },
});
