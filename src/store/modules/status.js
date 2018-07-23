const state = {
  loadingStatus: true
}
const mutations = {
  UPDATE_LOADING_STATUS(state, status) {
    state.loadingStatus = status
  }
}
const actions = {
  // 更新loading 状态
  updateLoadingStatus({
    commit
  }, status) {
    commit('UPDATE_LOADING_STATUS', status)
  }
}
export default {
  state,
  mutations,
  actions
}
