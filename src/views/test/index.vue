<template>
    <div>
      <h2>测试页面 {{ msg }}</h2>
      <el-button @click="payTest" type="primary">支付</el-button>
    </div>
</template>

<script>
import { testInfo, pay } from '@/api/test'
export default {
  name: 'TextIndex',
  data() {
    return {
      msg: ''
    }
  },
  mounted() {
  },
  methods: {
    getInfo() {
      testInfo().then(res => {
        console.log(1111)
        console.log(res)
        this.msg = res.data
      })
    },
    payTest() {
      pay().then(res => {
        document.querySelector('body').innerHTML = res // 查找到当前页面的body，将后台返回的form替换掉他的内容
        document.forms[0].submit() // 执行submit表单提交，让页面重定向，跳转到支付宝页面
      })
    }
  }
}
</script>

<style scoped>

</style>
