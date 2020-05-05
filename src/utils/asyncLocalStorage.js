export default {
  get: (key, handlerFunction) => {
    return new Promise((resolve, reject) => {
      const res = localStorage.getItem(key)
      if (res) {
        if (handlerFunction) {
          resolve(handlerFunction(res))
        } else {
          resolve(res)
        }
      } else {
        reject('Key not found')
      }
    })
  },
  set: (key, value, handlerFunction) => {
    return new Promise((resolve, reject) => {
      localStorage.setItem(
        key,
        handlerFunction ? handlerFunction(value) : value
      )
      resolve('success')
    })
  },
}
