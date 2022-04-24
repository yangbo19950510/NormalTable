/**
 * @debounce(600)
 * @param msec 防抖秒数
 * @param immediately 是否立即执行
 */
export function debounce(msec = 600, immediately = false) {
  let timer
  let flag = true
  return function(target, name, descriptor) {
    const fn = descriptor.value
    descriptor.value = function(...rest) {
      // immediately为true首次立即执行
      if (immediately && flag) {
        fn.apply(this, rest)
        flag = false
        return
      }
      if (timer) clearTimeout(timer)
      timer = setTimeout(() => {
        immediately = false
        fn.apply(this, rest)
      }, msec)
    }
  }
}
/**
 * @throttle(600)
 */
export function throttle(msec = 600) {
  let time = 0
  return function(target, name, descriptor) {
    const fn = descriptor.value
    const curTime = Date.now()
    descriptor.value = function(...rest) {
      if (curTime > time + msec) {
        fn.apply(this, rest)
        time = curTime
      }
    }
  }
}
/**
 * @confirm('提示')
 */
export function confirm(title) {
  return function(target, name, descriptor) {
    const fn = descriptor.value
    descriptor.value = function(...rest) {
      this.$confirm(title, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        fn.apply(this, rest)
      })
    }
  }
}
/**
 * @delay(600)
 */
export function delay(time = 0) {
  return function(target, name, descriptor) {
    const fn = descriptor.value
    descriptor.value = function(...rest) {
      setTimeout(() => fn.apply(this, rest), time)
    }
  }
}
