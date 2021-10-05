export const state = () => {
  return {
    windowWidth: 0,
  }
}

export const mutations = {
  SET_WINDOW_WIDTH(state, val) {
    state.windowWidth = val
  },
}
