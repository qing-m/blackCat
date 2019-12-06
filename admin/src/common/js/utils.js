export function setCustInfo(custPojo) {
	sessionStorage.setItem('ctx', JSON.stringify(custPojo))
}

// 删除用户ctx
export function removeCustInfo() {
	sessionStorage.removeItem('ctx')
}

// 取用户信息ctx
export function getCustInfo() {
  let cust = sessionStorage.getItem('ctx')
  if (cust !== null) {
    return JSON.parse(cust)
  }
  return null
}
function formatVal(val, formatLen) {
  val = val + ''
  for (var i = val.length; i < formatLen; i++) {
    val = '0' + val
  }
  return val
}
export function dateToStr(date, format) {
  format = format !== undefined ? format : 'yyyy-MM-dd HH:mm:ss'
  date = date !== undefined ? date : new Date()
  if (!(date instanceof Date)) {
    date = new Date(date)
  }
  let dateStr = format.replace('yyyy', date.getFullYear())
  dateStr = dateStr.replace('MM', formatVal(date.getMonth() + 1, 2))
  dateStr = dateStr.replace('dd', formatVal(date.getDate(), 2))

  dateStr = dateStr.replace('HH', formatVal(date.getHours(), 2))
  dateStr = dateStr.replace('mm', formatVal(date.getMinutes(), 2))
  dateStr = dateStr.replace('ss', formatVal(date.getSeconds(), 2))
  return dateStr
}