const checkType = (val) => {
  if (val === null) return String(null)
  return typeof val === 'object'
    ?
    Object.prototype.toString
      .call(val)
      .replace('[object ', '')
      .replace(']', '')
      .toLowerCase()
    :
    typeof val
}

let c1 = checkType(null);
let c2 = checkType(undefined);
let c3 = checkType({});
let c4 = checkType([]);
let c5 = checkType(3333);
let c6 = checkType(true);
let c7 = checkType('hhhhhhhhdas');
let c8 = checkType(/2112/);
let c9 = checkType(new Date());

// 统一输出
(function () {
  console.log({
    c1,
    c2,
    c3,
    c4,
    c5,
    c6,
    c7,
    c8,
    c9
  })
})()