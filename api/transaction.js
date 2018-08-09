import request from '~/utils/request';

const transactionApi = {
  retrieveDailyTransaction() {
    return request({
      url: '/transaction/daily',
      method: 'post',
    });
  },
  retrieveMonthlyTransaction() {
    return request({
      url: '/transaction/monthly',
      method: 'post',
    });
  },
  retrieveMonthlyAmounts() {
    return request({
      url: '/transaction/monthly-amounts',
      method: 'post',
    });
  },
  retrieveMonthlyOrders() {
    return request({
      url: '/transaction/monthly-orders',
      method: 'post',
    });
  },
  retrieveTopFiveTransactionAmount() {
    return request({
      url: '/transaction/top-five-amount',
      method: 'post',
    });
  },
  retrieveTopFiveTransactionNumber() {
    return request({
      url: '/transaction/top-five-number',
      method: 'post',
    });
  },
  retrieveTopFiveDoughnutPie() {
    return request({
      url: '/transaction/top-five-doughnutpie',
      method: 'post',
    });
  },
};

export default transactionApi;
