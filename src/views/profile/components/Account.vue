<template>
  <div class="app-container">
    <el-form>
      <el-tag v-if="user.status === 0" type="danger">未认证</el-tag>
      <el-tag v-if="user.status === 1" type="success">已认证</el-tag>
      <el-tag v-if="user.status === 2" type="warning">审核中</el-tag>
      <el-form-item label="姓名">
        <el-input v-model.trim="user.name" disabled />
      </el-form-item>
      <el-form-item label="电话号码">
        <el-input v-model.trim="user.username" disabled />
      </el-form-item>
      <!--<el-form-item>
        <el-button type="primary" @click="submit">Update</el-button>
      </el-form-item>-->
    </el-form>
    <el-row v-if="user.status !== 1" style="padding: 15px;box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)">
      <h2>请上传身份证认证：</h2>
      <div style="width: 178px;height: 178px;margin-left: 5%;margin-bottom: 20px;">
        <el-upload
          class="avatar-uploader"
          :action="UPLOAD_PATH"
          :show-file-list="false"
          :on-success="handleUpLoadSuccess"
          :before-upload="beforeFengMianUpload"
        >
          <img v-if="coverUrl" :src="coverUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon" />
        </el-upload>
      </div>
      <div style="margin-left: 35px;">
        <el-button type="primary" @click="uploadAndAuth">上传认证</el-button>
      </div>
    </el-row>
  </div>
</template>

<script>
import { getInfo, updateIdcard } from '../../../api/user'
export default {
  /* props: {
    user: {
      type: Object,
      default: () => {
        return {
          name: '',
          email: ''
        }
      }
    }
  },*/
  data() {
    return {
      user: {},
      UPLOAD_PATH: '',
      coverUrl: '',
      yuanUrl: ''
    }
  },
  mounted() {
    this.userInfo()
    this.initUploadPath()
  },
  methods: {
    uploadAndAuth() {
      if (this.yuanUrl === '') {
        this.$message.info('请上传身份证图片')
        return
      } else {
        updateIdcard(this.yuanUrl).then(res => {
          this.userInfo()
        })
      }
    },
    handleUpLoadSuccess(res, file) {
      this.yuanUrl = res.data.path
      this.coverUrl = this.$UPLOAD_HOST + res.data.path
    },
    beforeFengMianUpload() {},
    initUploadPath() {
      this.UPLOAD_PATH = this.$UPLOAD_PATH
    },
    userInfo() {
      getInfo().then(res => {
        this.user = res.data
      })
    },
    submit() {
      this.$message({
        message: 'User information has been updated successfully',
        type: 'success',
        duration: 5 * 1000
      })
    }
  }
}
</script>
<style scoped>
  .avatar-uploader{
    border: 2px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
