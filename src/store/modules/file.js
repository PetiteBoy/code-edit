import editService from '../../service/editService'


const state = {
  // 文件列表
  fileList: [],
  // 当前文件下标
  currentFileIndex: '',
}
const mutations = {
  GET_FILE_LIST(state, dataList) {
    state.fileList = dataList
  },
  UPDATE_CURRENT_FILE_INDEX(state, index) {
    state.currentFileIndex = index
  }
}
const actions = {

  // 获取当前文件列表
  getFileList({
    commit
  }) {
    editService.getFileList().then(res => {
      let result = res.data
      commit('GET_FILE_LIST', result.data.list)
    })
  },


  // 获取当前文件详情
  getCurrentFileDetail({
    commit
  }, fileId) {
    return new Promise((resolve, reject) => {
      editService.getFileList(fileId).then(res => {
        let result = res.data
        resolve(result)
      }).catch(err => {
        reject(err)
      })
    })
  },

  // 新建文件
  creatFile({
    commit
  }, params) {
    return new Promise((resolve, reject) => {
      editService.creatFile(params).then(res => {
        let result = res.data
        resolve(result)
      }).catch(err => {
        reject(err)
      })
    })
  },


  // 保存当前文件
  saveCurrentFile({
    commit
  }, params) {
    editService.saveFile().then(res => {
      console.log('保存成功')
    }).catch(err => {
      throw err
    })
  },


  // 运行当前文件
  runCurrentFile({
    commit
  }, fileId) {
    return new Promise((resolve, reject) => {
      editService.creatFile(fileId).then(res => {
        let result = res.data
        resolve(result)
      }).catch(err => {
        reject(err)
      })
    })
  },

  // 更新文件下标
  updateFileIndex({
    commit
  }, index) {
    commit('UPDATE_CURRENT_FILE_INDEX', index)
  }


}
export default {
  state,
  mutations,
  actions
}
