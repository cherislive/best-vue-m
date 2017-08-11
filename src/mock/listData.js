export const listData = [
  {
    path: '/api/mock/list',
    rtype: 'POST',
    data: {
      'data|10': [{
        'id|+1': 20123350, // 客户ID
        'customer': '@cname',  // 客户全称
        'member': '@cname', // 联系人
        'mobile': '@integer()', // 电话
        'bd': 'Serena', // 所属BD
        'creatTime': '@date("yyyy-MM-dd")',  // 创建时间
        'sum': '56', // 订单量
        'amount': '551', // 待回款金额
        'overtimeAmount': '4544' // 超时回款金额
      }],
      'pagination': {
        'total': 15,
        'per_page': 15,
        'current_page': 1,
        'last_page': 1,
        'from': 1,
        'to': 15
      }
    }
  }
]

