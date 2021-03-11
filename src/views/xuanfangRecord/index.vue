<template>
  <div class="app-container">
    <el-row>
      <svg-icon icon-class="jilu" style="width: 100%;height: 300px" />
      <h2 style="color: #20a0ff">选房记录：</h2>
    </el-row>
    <el-row>
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="id" label="ID" width="150" />
        <el-table-column prop="money" label="定金" />
        <el-table-column prop="fangyuan.homeNum" label="房间号" />
        <el-table-column prop="fangyuan.loupan.name" label="楼盘" />
        <el-table-column prop="fangyuan.huxing.remark" label="户型" />
        <el-table-column prop="createDate" label="订房时间" />
      </el-table>
    </el-row>
  </div>
</template>

<script>
import { getAllMyDeposit } from '../../api/deposit'
export default {
  name: 'XuanfangIndex',
  data() {
    return {
      tableData: []
    }
  },
  mounted() {
    this.getAll()
  },
  methods: {
    getAll() {
      getAllMyDeposit().then(res => {
        console.log(res.data)
        this.tableData = res.data
      })
    }
  }
}
</script>

<style scoped>

</style>
