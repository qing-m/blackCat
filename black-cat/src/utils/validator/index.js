const strategies = {
  checkPhone: function(value) {
    if (value === 0) {
      return true
    }
    return false
  }
}
class Validator {
  constructor() {
    this.cache = []
  }

  add(val, methods) {
    this.cache.push(function() {
      return strategies[methods](val)
    })
  }

  check() {
    for (let i = 0; i < this.cache.length; i++) {
      const valiFn = this.cache[i]
      const data = valiFn()
      if (!data) {
        return false
      }
    }
    return true
  }
}

export default Validator
