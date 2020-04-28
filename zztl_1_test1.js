
console.log('----------------------')
var num = 1
console.log('num += 1:', num += 1)
console.log('num -= 1:', num -= 1)
console.log('num *= 1:', num *= 2)
console.log('num /= 1:', num /= 2)
console.log('num %= 1:', num %= 1)
console.log('----------------------')
// 先执行再自增
var num1 = 5
console.log('num--:', num1--)
console.log('num--:', num1)
var num2 = 5
console.log('num++:', num2++)
console.log('num--:', num2)
// 输出前自增
var num3 = 5
console.log('--num:', --num3)
var num4 = 5
console.log('++num:', ++num4)
console.log('----------------------')
// 位运算符 补码 = 原码取反 + 1
console.log('5(二进制):', '0000 0101')
console.log('-5(二进制):', '1000 0101')
console.log('1(二进制):', '0000 0001')
console.log('3(二进制):', '0000 0011')
console.log('5 & 1:', (5 & 1), '0000 0001') // 与
console.log('5 | 1:', (5 | 1), '0000 0101') // 或
// (1111 1010 ===> 1000 1001 ===> 1000 0110)
console.log('~ 5:', (~5), '1000 0110') // 非
console.log('5 ^ 1:', (5 ^ 1), '0000 0100') // 异或
console.log('5 ^ 3:', (5 ^ 3), '0000 0110') // 异或
console.log('5 << 1:', (5 << 1), '0000 1010') // 左移
console.log('5 >> 1:', (5 >> 1), '0000 0010') // 右移
// (1111 0101 ===> 1111 1010 ===> 1111 1011 ===> 1111 1101)
// (1111 1101 ===> 1000 1100 ===> 1000 0011)
console.log('-5 >> 1:', (-5 >> 1), '1000 0011') // 右移
console.log('----------------------')
