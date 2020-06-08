/*
编写timeAgo(t1,t2) 函数
* 不用考虑闰年情况
* 考虑输入可能是数值型或者日期型
* 请尽可能少用if-else
* 完成下方QUnit测试用例的输出
//2019年新加入要求
* 请尽可能使用es6语法来完成
* 不要建立子函数
* 除数据定义外，主体处理代码行数请控制在10行内
* 答题时间15分钟

1.考察代码的书写规范，变量规范
2.考察解决问题的逻辑
3.考察代码质量，例如代码复杂度
4.考察综合解决问题及延展的能力，例如国际化

*/

const timeAgo = function (t1, t2) { //两个时间差 中文显示函数
  let time = (new Date(t1).valueOf() - new Date(t2).valueOf()) / 1000
  const timeStatus = time > 0 ? '后' : '前'
  const timeArr = [
    365 * 24 * 60 * 60,
    30 * 24 * 60 * 60,
    24 * 60 * 60,
    60 * 60,
    60,
    1,
    0
  ]
  const dataArr = [
    '年',
    '个月',
    '天',
    '小时',
    '分钟',
    '秒',
    '刚刚'
  ]

  time = Math.abs(time)
  let tStr = ''
  timeArr.some((item, index) => {
    if (time >= item) {
      time === 0 ? tStr = dataArr[index] : tStr = Math.floor(time / item) + dataArr[index] + timeStatus
      return true
    }
  })
  console.log(tStr)
  return tStr
}

timeAgo('2016-1-1', '2017-2-1') //'一年前'
timeAgo('2016-1-1', '2016-1-1 1:13:01') //'一天前'
timeAgo('2016-1-1 0:13:01', '2016-1-1') //'13小时后'
timeAgo('2016-1-1', '2017-2-1')  // '1年前'
timeAgo('2016-1-1', '2016-3-1')  // '2个月前'
timeAgo('2016-1-1', '2016-1-16') // '15天前'
timeAgo('2016-1-1', '2016-1-1 1:13:01')//'1小时前'
timeAgo('2016-1-1', '2016-1-1 0:13:01')//'13分钟前'
timeAgo('2016-1-1', '2016-1-1 0:0:50')//'50秒前'
timeAgo('2018-1-1', '2017-1-1')//'1年后'
timeAgo('2016-3-1', '2016-1-1')//'2个月后'
timeAgo('2016-1-16', '2016-1-1')//'15天后'
timeAgo('2016-1-1 1:13:01', '2016-1-1')//'1小时后'
timeAgo('2016-1-1 0:13:01', '2016-1-1')//'13分钟后'
timeAgo('2016-1-1 0:0:50', '2016-1-1')//'50秒后'
timeAgo('2016-1-1 0:0:50', '2016-1-1 0:0:50')//'刚刚')
timeAgo(new Date('2016-1-1'), new Date('2016-1-1 0:0:50')) //'50秒前'
timeAgo(+new Date('2016-1-1'), +new Date('2016-1-1 0:0:50')) //'50秒前'
timeAgo((new Date('2016-1-1 0:0:50')).toISOString(), +new Date('2016-1-1'))//'50秒后'