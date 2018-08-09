import Mock from 'mockjs';

// Mock.setup({
//   timeout: 1000,
// });


const tempData = [{
  name: '浙江',
  amount: '12313asdfdsfsdf21',
  orders: 'sadfdsfsdfsafas',
},
{
  name: '安徽',
  amount: '1231321',
  orders: '12321321',
},
{
  name: '北京',
  amount: '1231321',
  orders: '12321321',
},
{
  name: '天津',
  amount: '1231321',
  orders: '12321321',
},
{
  name: '上海',
  amount: '1231321',
  orders: '12321321',
},
{
  name: '重庆',
  amount: '1231321',
  orders: '12321321',
},
{
  name: '河北',
  amount: '1231321',
  orders: '12321321',
},
{
  name: '河南',
  amount: '1231321',
  orders: '12321321',
},
{
  name: '云南',
  amount: '1231321',
  orders: '12321321',
},
{
  name: '辽宁',
  amount: '1231321',
  orders: '12321321',
},
{
  name: '黑龙江',
  amount: '1231321',
  orders: '12321321',
},
{
  name: '湖南',
  amount: '1231321',
  orders: '12321321',
},
{
  name: '山东',
  amount: '1231321',
  orders: '12321321',
},
{
  name: '新疆',
  amount: '1231321',
  orders: '12321321',
},
{
  name: '江苏',
  amount: '1231321',
  orders: '12321321',
},
{
  name: '江西',
  amount: '1231321',
  orders: '12321321',
},
{
  name: '湖北',
  amount: '1231321',
  orders: '12321321',
},
{
  name: '广西',
  amount: '1231321',
  orders: '12321321',
},
{
  name: '甘肃',
  amount: '1231321',
  orders: '12321321',
},
{
  name: '山西',
  amount: '1231321',
  orders: '12321321',
},
{
  name: '内蒙古',
  amount: '1231321',
  orders: '12321321',
},
{
  name: '陕西',
  amount: '1231321',
  orders: '12321321',
},
{
  name: '吉林',
  amount: '1231321',
  orders: '12321321',
},
{
  name: '福建',
  amount: '1231321',
  orders: '12321321',
},
{
  name: '贵州',
  amount: '1231321',
  orders: '12321321',
},
{
  name: '广东',
  amount: '1231321',
  orders: '12321321',
},
{
  name: '青海',
  amount: '1231321',
  orders: '12321321',
},
{
  name: '西藏',
  amount: '1231321',
  orders: '12321321',
},
{
  name: '四川',
  amount: '1231321',
  orders: '12321321',
},
{
  name: '宁夏',
  amount: '1231321',
  orders: '12321321',
},
{
  name: '海南',
  amount: '1231321',
  orders: '12321321',
},
{
  name: '台湾',
  amount: '1231321',
  orders: '12321321',
},
{
  name: '香港',
  amount: '1231321',
  orders: '12321321',
},
{
  name: '澳门',
  amount: 'reoiureoiueiutr',
  orders: '12321321',
}];

const tempMonthlyAmounts = [
  {
    date: '1',
    amount: '23',
  },
  {
    date: '1',
    amount: '23',

  },
  {
    date: '1',
    amount: '23',
  },
  {
    date: '1',
    amount: '23',
  },
  {
    date: '1',
    amount: '23',
  },
  {
    date: '1',
    amount: '23',
  },
  {
    date: '1',
    amount: '23',
  },
  {
    date: '1',
    amount: '23',
  },
  {
    date: '1',
    amount: '23',
  },
  {
    date: '1',
    amount: '23',
  },
  {
    date: '1',
    amount: '23',
  },
  {
    date: '1',
    amount: '23',
  },
  {
    date: '1',
    amount: '300',
  },
  {
    date: '1',
    amount: '23',
  },
  {
    date: '1',
    amount: '23',
  },
  {
    date: '1',
    amount: '23',
  },
  {
    date: '1',
    amount: '23',
  },
  {
    date: '1',
    amount: '123',
  },
  {
    date: '1',
    amount: '233',
  },
  {
    date: '1',
    amount: '231',
  },
  {
    date: '1',
    amount: '23',
  },
  {
    date: '1',
    amount: '23',
  },
  {
    date: '1',
    amount: '23',
  },
  {
    date: '1',
    amount: '23',
  },
  {
    date: '1',
    amount: '23',
  },
  {
    date: '1',
    amount: '23',
  },
  {
    date: '1',
    amount: '23',
  },
  {
    date: '1',
    amount: '23',
  },
  {
    date: '1',
    amount: '23',
  },
  {
    date: '1',
    amount: '23',
  },
];


const tempMonthlyOrder = [
  {
    date: '1',
    amount: '23',
  },
  {
    date: '1',
    amount: '23',

  },
  {
    date: '1',
    amount: '23',
  },
  {
    date: '1',
    amount: '23',
  },
  {
    date: '1',
    amount: '23',
  },
  {
    date: '1',
    amount: '23',
  },
  {
    date: '1',
    amount: '23',
  },
  {
    date: '1',
    amount: '23',
  },
  {
    date: '1',
    amount: '23',
  },
  {
    date: '1',
    amount: '23',
  },
  {
    date: '1',
    amount: '23',
  },
  {
    date: '1',
    amount: '23',
  },
  {
    date: '1',
    amount: '300',
  },
  {
    date: '1',
    amount: '400',
  },
  {
    date: '1',
    amount: '23',
  },
  {
    date: '1',
    amount: '23',
  },
  {
    date: '1',
    amount: '123',
  },
  {
    date: '1',
    amount: '123',
  },
  {
    date: '1',
    amount: '233',
  },
  {
    date: '1',
    amount: '231',
  },
  {
    date: '1',
    amount: '90',
  },
  {
    date: '1',
    amount: '23',
  },
  {
    date: '1',
    amount: '23',
  },
  {
    date: '1',
    amount: '23',
  },
  {
    date: '1',
    amount: '23',
  },
  {
    date: '1',
    amount: '23',
  },
  {
    date: '1',
    amount: '300',
  },
  {
    date: '1',
    amount: '23',
  },
  {
    date: '1',
    amount: '100',
  },
  {
    date: '1',
    amount: '228',
  },
];


const tempTransactionAmount = [
  {
    name: '深圳',
    value: '83.21',
  },
  {
    name: '北京',
    value: '93.21',
  },
  {
    name: '上海',
    value: '103.21',
  },
  {
    name: '南京',
    value: '113.21',
  },
  {
    name: '杭州',
    value: '123.21',
  },
];

const tempTransactionNumber = [
  {
    name: '深圳',
    value: '83.22',
  },
  {
    name: '北京',
    value: '93.22',
  },
  {
    name: '上海',
    value: '103.22',
  },
  {
    name: '南京',
    value: '113.22',
  },
  {
    name: '杭州',
    value: '123.22',
  },
];

const tempDoughnutPie = [
  [
    { value: 535, name: '支付宝' },
    { value: 30, name: '银行卡' },
    { value: 435, name: '微信' },
  ],
  [
    { value: 335, name: '二维码订单' },
    { value: 310, name: '收银台订单' },
    { value: 234, name: '银行卡订单' },
    { value: 234, name: '小程序订单' },
    { value: 234, name: 'API订单' },
    { value: 234, name: 'APP订单' },
  ],
];

Mock.mock('/transaction/daily', 'post', tempData);
Mock.mock('/transaction/monthly-amounts', 'post', tempMonthlyAmounts);
Mock.mock('/transaction/monthly-orders', 'post', tempMonthlyOrder);
Mock.mock('/transaction/top-five-amount', 'post', tempTransactionAmount);
Mock.mock('/transaction/top-five-number', 'post', tempTransactionNumber);
Mock.mock('/transaction/top-five-doughnutpie', 'post', tempDoughnutPie);


export default Mock;
