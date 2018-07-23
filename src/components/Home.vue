<template>
  <div class="home-box">
    <div class="header">
      <!-- 头部 -->
      <div class="header-box">
        <el-button type="primary" @click="creatFile()">新建</el-button>
        <el-button type="primary" @click="saveFile()">保存</el-button>
        <el-button type="primary" @click="runFile()">运行</el-button>
      </div>
    </div>
    <div class="main">
      <div class="file-list">
        <div v-for="(item,index) in fileList" :key="index" @click="choseFile(index, item.codeFileId)" class="file-item" :class="{'file-item-active': currentFileIndex === index}">
          {{item.codeFileName}}
        </div>
      </div>
    </div>
    <div class="code-edit">
      <el-input type="textarea" :rows="25" placeholder="请输入内容" v-model="fileCode">
      </el-input>
    </div>

    <!-- 新建文件弹窗 -->
    <el-dialog title="新建文件" :visible.sync="creatFileDialogVisible" width="30%" :before-close="handleClose">
      <el-input v-model="creatFileTitle" placeholder="请输入文件名称"></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="cancelCreat()">取 消</el-button>
        <el-button type="primary" @click="ConfirmCreat">确 定</el-button>
      </span>
    </el-dialog>

    <!-- 运行弹窗 -->
    <el-dialog title="新建文件" :visible.sync="runFileDialogVisible" width="30%" :before-close="handleClose">
      <iframe :src="resultUrl" frameborder="0"></iframe>
    </el-dialog>
  </div>

</template>
<script>
import editCodeService from '../service/editService.js'
export default {
  name: 'home-box',
  data() {
    return {
      // 创建文件弹窗
      creatFileDialogVisible: false,
      // 创建文件标题
      creatFileTitle: '',
      // 文件列表
      fileList: [],
      // 当前文件index
      currentFileIndex: '',
      // 当前编辑区代码
      fileCode: '',
      // 运行结果url
      resultUrl: '',
      // 运行弹窗
      runFileDialogVisible: false
    }
  },
  mounted() {
    this.getFileList()
  },
  methods: {
    // 获取文件列表
    getFileList() {
      editCodeService
        .getFileList()
        .then(res => {
          let result = res.data
          if (result.code === 0) {
            this.fileList = result.codeFiles
          } else {
          }
        })
        .catch(err => {
          throw err
        })
    },
    // 选择文件
    choseFile(index, id) {
      this.currentFileIndex = index
      editCodeService.getFileDetail(id).then(red => {
        this.fileCode = res.codeText
      })
    },
    // 创建文件
    creatFile() {
      this.creatFileDialogVisible = true
    },
    // 确认创建
    ConfirmCreat() {
      editCodeService
        .creatFile({
          codeFileName: this.creatFileTitle
        })
        .then(res => {})
    },
    //保存文件
    saveFile() {
      editCodeService
        .saveFile({
          codeFileId: this.getFileList[this.currentFileIndex].codeFileId,
          codeFileName: this.getFileList[this.currentFileIndex].codeFileName,
          codeFileText: this.fileCode
        })
        .then(res => {})
    },
    //运行文件
    runFile() {
      editCodeService
        .runFile({
          codeFileId: this.getFileList[this.currentFileIndex].codeFileId,
          codeFileName: this.getFileList[this.currentFileIndex].codeFileName,
          codeFileText: this.fileCode
        })
        .then(res => {
          this.resultUrl = res.url
        })
    },
    // 关闭弹窗
    handleClose() {
      this.creatFileDialogVisible = false
      this.runFileDialogVisible = false
    }
  }
}
</script>
<style>
.home-box {
  border: 1px solid #eeeeee;
  padding: 10px;
  margin: 5px;
  box-sizing: border-box;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  height: 700px;
  min-width: 1200px;
  min-height: 700px;
  overflow: auto;
}
.header-box {
  padding: 0 10px;
  height: 60px;
  line-height: 60px;
  border: 1px solid #eeeeee;
  border-radius: 4px;
  width: 100%;
}
.main {
  display: flex;
  flex: 1;
  flex-direction: row;
  margin-top: 10px;
}
.file-list {
  width: 200px;
  border: 1px solid #eeeeee;
  border-radius: 4px;
}
.code-edit {
  flex: 1;
  border: 1px solid #eeeeee;
  margin-left: 10px;
  border-radius: 4px;
}

.file-item {
  height: 34px;
  padding: 5px 10px;
  line-height: 24px;
  box-sizing: border-box;
  cursor: pointer;
}
.file-item:hover {
  background: #eeeeee;
}
.file-item-active {
  background: #cccccc;
}
.file-item-active:hover {
  background: #cccccc;
}
</style>

