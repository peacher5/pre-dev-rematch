const wait = ms => new Promise(resolve => setTimeout(resolve, ms))

export default {
  state: {
    fname: '',
    lname: ''
  },
  reducers: {
    setFname(state, fname) {
      return {
        ...state,
        fname
      }
    },
    setLname(state, lname) {
      return {
        ...state,
        lname
      }
    }
  },
  effects: {
    async fetchFname() {
      await wait(4000)
      this.setFname('Hello')
    }
  }
}
