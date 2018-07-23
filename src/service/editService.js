import axios from 'axios'
import config from '../config/config.json'


class EditService {

  userLogin() {
    return axios({
      url: `${config.service}/user/login`,
      method: 'get'
    })
  }

  userReg() {
    return axios({
      url: `${config.service}/user/reg`,
      method: 'get'
    })
  }

  getFileList() {
    return axios({
      url: `${config.service}/file/list`,
      method: 'get'
    })

    // return Promise.resolve({
    //   data: {
    //     code: 0,
    //     message: '',
    //     codeFiles: [{
    //       codeFileId: '111',
    //       codeFileName: 'pp.py'
    //     }, {
    //       codeFileId: '111',
    //       codeFileName: 'pp.py'
    //     }]
    //   }
    // })
  }

  getFileDetail(fileId) {
    return axios({
      url: `${config.service}/file/detail?fileId=${fileId}`,
      method: 'get'
    })
  }

  creatFile(params) {
    return axios({
      url: `${config.service}/file/creat`,
      method: 'post',
      data: params
    })
  }


  saveFile(params) {
    return axios({
      url: `${config.service}/file/save`,
      method: 'post',
      data: params
    })
  }

  runFile(params) {
    return axios({
      url: `${config.service}/file/run`,
      method: 'post',
      data: params
    })
  }

}


const editService = new EditService()

export default editService
