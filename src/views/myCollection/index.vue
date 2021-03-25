<template>
  <div class="app-container">
    <el-row>
      <svg-icon icon-class="myCollection" style="width: 100%;height: 300px" />
      <h2 style="color: #20a0ff">我的收藏：</h2>
    </el-row>
    <el-row>
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="id" label="房源ID" width="150" />
        <el-table-column prop="homeNum" label="房间号" />
        <el-table-column prop="price" label="价格" />
        <el-table-column prop="loupan.name" label="楼盘名字" />
        <el-table-column prop="loupan.address" label="楼盘地址" />
        <el-table-column label="户型详情">
          <template slot-scope="scope">
            <span>{{scope.row.huxing.home}}房{{scope.row.huxing.keting}}客厅{{scope.row.huxing.washroom}}卫生间</span>
          </template>
        </el-table-column>
        <el-table-column prop="huxing.remark" label="户型备注" />
        <el-table-column prop="huxing.area" label="户型面积(㎡)" />
        <el-table-column label="操作" width="300">
          <template slot-scope="scope">
            <el-button type="success" size="small" @click="dingjin(scope.row)">交付定金选房</el-button>
            <el-button type="primary" size="small" @click="detail(scope.row)">详情</el-button>
            <el-button type="warning" size="small" @click="remove(scope.row.id)">移除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-row>

    <!--查看详情对话框-->
    <el-dialog title="详情" :visible.sync="dialogVisible" width="80%">
      <div>
        <div style="line-height: 1.5;padding: 20px;font-size: 18px;">
          <span style="font-weight: 600">房间数:</span> {{detailObj.huxing.home}} <br>
          <span style="font-weight: 600">客厅数:</span> {{detailObj.huxing.keting}}<br>
          <span style="font-weight: 600">卫生间数:</span> {{detailObj.huxing.washroom}}<br>
          <span style="font-weight: 600">面积:</span> {{detailObj.huxing.area}}<br>
          <span style="font-weight: 600">户型备注信息:</span> {{detailObj.huxing.remark}}<br>
          <hr>
          <span style="font-weight: 600">楼盘名字:</span> {{detailObj.loupan.name}} <br>
          <span style="font-weight: 600">楼盘地址:</span> {{detailObj.loupan.address}}<br>
          <span style="font-weight: 600">楼盘备注信息:</span> {{detailObj.loupan.remark}}<br>
          <span style="font-weight: 600">楼盘起售时间:</span> {{dataFormat(detailObj.loupan.startDate)}}<br>
          <span style="font-weight: 600">楼盘截止时间:</span> {{dataFormat(detailObj.loupan.endDate)}}<br>
          <div v-html="detailObj.loupan.description"></div>
        </div>
        <div></div>
        <div>
        </div>

      </div>
      <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="dialogVisible = false">关 闭</el-button>
        </span>
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { getAllWithOnlyCollection, pay } from '../../api/fangyuan'
import { deleteByFangyuanIdAndUserId } from '../../api/collection'

export default {
  name: 'MyClollectionIndex',
  data() {
    return {
      dialogVisible: false,
      tableData: [],
      detailObj: {
        loupan: {},
        huxing: {}
      }
    }
  },
  computed: {
    ...mapGetters([
      'token',
      'roles'
    ])
  },
  mounted() {
    this.getAllFangyaunInfo()
  },
  methods: {
    remove(id) {
      deleteByFangyuanIdAndUserId(id).then(res => {
        this.getAllFangyaunInfo()
      })
    },
    detail(row) {
      this.detailObj = row
      this.dialogVisible = true
    },
    dingjin(row) {
      this.$confirm('将跳转到支付页面交付定金（交付后代表您将选择此房）, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.payData.userId = this.token.split('_')[1]
        this.payData.fangyuanId = row.id
        this.toPay()
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消'
        })
      })
    },
    toPay() {
      pay(this.payData).then(res => {
        console.log(res)
        if (res.code === 20001) {
          this.$message.warning(res.msg)
        } else {
          document.querySelector('body').innerHTML = res // 查找到当前页面的body，将后台返回的form替换掉他的内容
          document.forms[0].submit() // 执行submit表单提交，让页面重定向，跳转到支付宝页面
        }
      })
    },
    getAllFangyaunInfo() {
      getAllWithOnlyCollection('').then(res => {
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
