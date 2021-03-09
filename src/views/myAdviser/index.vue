<template>
    <div class="app-container">
      <div v-if="myInfo.adviserId === 0" style="width: 100%;">
        <div style="width: 100%;">
          <svg-icon icon-class="noAdviser" style="background-color: #d4d4d4;width: 100%;height: 300px" />
        </div>
        <h2 style="color: #20a0ff">您还没有置业顾问，请选择：</h2>
        <el-row>
          <el-table :data="tableData" border style="width: 100%">
            <el-table-column prop="id" label="ID" width="80" />
            <el-table-column prop="name" label="姓名" width="200" />
            <el-table-column prop="phone" label="电话" width="180" />
            <el-table-column prop="introduce" label="个人介绍">
              <template slot-scope="scope">
                <div v-html="scope.row.introduce"></div>
              </template>
            </el-table-column>
            <el-table-column prop="remark" label="备注" width="250" />
            <el-table-column label="操作" width="200">
              <template slot-scope="scope">
                <el-button type="primary" size="small" @click="selectMyAdviser(scope.row)">选择</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-row>
      </div>
      <div v-else>
        <el-row>
          <el-col :span="6"><h2 style="color: #20a0ff">我的置业顾问:</h2></el-col>
          <el-col :span="6" :offset="12">
              <el-popover v-if="haveYuyue === false" placement="top" width="290" v-model="visible">
                <el-date-picker v-model="yuyueDate" type="datetime" placeholder="请选择预约时间"></el-date-picker>
                <div style="text-align: right; margin: 0">
                  <el-button size="mini" type="text" @click="visible = false">取消</el-button>
                  <el-button type="primary" size="mini" @click="enshureYuyue">确定</el-button>
                </div>
                <el-button type="primary" slot="reference" @click="yuyueKanfang">预约看房</el-button>
              </el-popover>
              <span v-else style="color: #20a0ff">已预约时间：{{yuyueData.yuyueDate}}</span>
              <el-button type="text" @click="changeGuwen">更换置业顾问</el-button>
          </el-col>
        </el-row>
        <div style="font-size: 18px;line-height: 2;padding-left: 30px;">
          <span>姓名：</span>{{adviserInfo.name}}<br>
          <span>手机：</span>{{adviserInfo.phone}}<br>
          <span>其他信息：</span>{{adviserInfo.remark}}<br>
          <span>介绍：</span>
          <div v-html="adviserInfo.introduce"></div>
        </div>
      </div>

      <div style="height: 300px;"></div>
    </div>
</template>

<script>
import { getAll, getById } from '@/api/adviser'
import { getInfo, updateAdviser, yuyueAdviser } from '../../api/user'
import { getMyYuyue } from '../../api/yuyue'

export default {
  name: 'MyAdviserIndex',
  data() {
    return {
      myInfo: {},
      adviserInfo: {},
      tableData: [],
      haveYuyue: false,
      yuyueData: {},
      visible: false,
      yuyueDate: ''
    }
  },
  mounted() {
    this.getMyInfo()
    this.getAllAdviser()
  },
  methods: {
    enshureYuyue() {
      console.log(this.yuyueDate)
      yuyueAdviser({
        userId: this.myInfo.id,
        adviserId: this.adviserInfo.id,
        yuyueDate: this.yuyueDate
      }).then(res => {
        this.$message.success(res.msg)
      })
    },
    yuyueKanfang() {},
    changeGuwen() {
      this.myInfo.adviserId = 0
    },
    selectMyAdviser(row) {
      updateAdviser(this.myInfo.id, row.id).then(res => {
        this.getMyInfo()
      })
    },
    getAllAdviser() {
      getAll().then(res => {
        this.tableData = res.data
      })
    },
    getAdviserInfo(id) {
      getById(id).then(res => {
        this.adviserInfo = res.data
        this.myHavedYuyue()
      })
    },
    getMyInfo() {
      getInfo().then(res => {
        this.myInfo = res.data
        if (this.myInfo.adviserId !== 0 && this.myInfo.adviserId !== undefined) {
          this.getAdviserInfo(this.myInfo.adviserId)
        }
      })
    },
    myHavedYuyue() {
      getMyYuyue({
        userId: this.myInfo.id,
        adviserId: this.adviserInfo.id
      }).then(res => {
        if (res.code === 20000) {
          // 有用户信息，已经预约过了
          this.haveYuyue = true
          this.yuyueData = res.data
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
