<template>
 <div class="app-container">
   <el-row>
     <svg-icon icon-class="jilu" style="width: 100%;height: 300px" />
     <h2 style="color: #20a0ff">预约记录：</h2>
   </el-row>
   <el-row>
     <el-table :data="tableData" border style="width: 100%">
       <el-table-column prop="id" label="ID" width="150" />
       <el-table-column prop="adviser.name" label="置业顾问" />
       <el-table-column prop="adviser.phone" label="顾问手机" />
       <el-table-column prop="adviser.remark" label="顾问备注信息" />
       <el-table-column prop="yuyueDate" label="预约时间" />
       <el-table-column prop="createDate" label="记录创建时间" />
     </el-table>
   </el-row>
 </div>
</template>
<script>
import { getAllMyYuyue } from '../../api/yuyue'
export default {
  name: 'YuyueRecordIndex',
  data() {
    return {
      tableData: []
    }
  },
  mounted() {
    this.getList()
  },
  methods: {
    getList() {
      getAllMyYuyue().then(res => {
        this.tableData = res.data
      })
    }
  }
}
</script>

<style scoped>

</style>
