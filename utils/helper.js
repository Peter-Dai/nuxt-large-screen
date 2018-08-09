function getRemSize() {
  const remfontSize = getComputedStyle(
    document.getElementsByTagName('html')[0],
    null,
  )['font-size'];

  let remSize = 18;
  if (remfontSize) {
    remSize = +remfontSize.replace(/[p|x]/g, '');
  }

  return remSize;
}

function isPromissFn(target) {
  if (!!target && typeof target === 'function') {
    const getTargetPromise = target();
    if (typeof getTargetPromise.then === 'function') {
      return getTargetPromise;
    }
  }
  return null;
}

function handleException(originOption, targetChart) {
  targetChart.hideLoading(); // 隐藏加载动画
  let tempData = Object.assign({}, originOption);

  tempData.title = {
    text: '数据加载异常...',
    left: 'center',
    top: 'center',
    textStyle: {
      fontSize: 1 * getRemSize(),
      color: '#fff',
      fontFamily: 'Arial, Verdana, sans-serif',
      fontWeight: 700,
    },
  };

  targetChart.setOption(tempData);
}

const helper = {
  getRemSize,
  isPromissFn,
  handleException,
};

export default helper;
