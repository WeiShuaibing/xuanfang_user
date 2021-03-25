<template>
  <div class="app-container">
    <h1 style="color: #20a0ff">欢迎来到选房系统</h1>

    <div style="margin-top: 40px;">
      <h3>最新通知：</h3>
      <el-alert style="margin: 10px;" v-for="item in noticeList" :key="item.id" :title="item.text" type="success" :closable="false"></el-alert>
    </div>
  </div>
</template>

<script>
import { getAll } from '../../api/notice'
export default {
  name: 'UserIndex',
  data() {
    return {
      noticeList: []
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      getAll().then(res => {
        this.noticeList = res.data
      })
    }
  }
}
</script>

<style scoped>

</style>
