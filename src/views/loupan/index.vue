<template>
    <div class="app-container">
      <el-row>
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column fixed prop="name" label="楼盘名字" width="200"></el-table-column>
          <el-table-column prop="address" label="楼盘地址" width="250"></el-table-column>
          <el-table-column prop="remark" label="备注" ></el-table-column>
          <el-table-column prop="startDate" label="开售时间" width="220">
            <template slot-scope="scope">
              <span>{{dataFormat(scope.row.startDate)}}</span>
            </template>
          </el-table-column>
          <el-table-column prop="endDate" label="结束时间" width="220">
            <template slot-scope="scope">
              <span>{{dataFormat(scope.row.endDate)}}</span>
            </template>
          </el-table-column>
          <el-table-column label="操作" width="100">
            <template slot-scope="scope">
              <el-button @click="seeDetail(scope.row)" type="text" size="small">详情</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-row>

      <!--查看详情对话框-->
      <el-dialog title="详情" :visible.sync="dialogVisible" width="80%">
        <div v-html="loupanDescription"></div>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="dialogVisible = false">关 闭</el-button>
        </span>
      </el-dialog>

    </div>
</template>

<script>
import { getAll } from '../../api/loupan'

export default {
  name: 'LoupanIndex',
  data() {
    return {
      tableData: [],
      dialogVisible: false,
      loupanDescription: ''
    }
  },
  mounted() {
    this.getAllLoupanInfo()
  },
  methods: {
    seeDetail(row) {
      this.dialogVisible = true
      this.loupanDescription = row.description
    },
    getAllLoupanInfo() {
      getAll().then(res => {
        this.tableData = res.data
      })
    },
    dataFormat(v) {
      if (v != null) {
        var date = new Date(v)
        return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
      }
    }
  }
}
</script>

<style scoped>

</style>
