<template>
  <div>
    <div class="app-container">

      <div class="address-layout">
        <el-row :gutter="20">
          <el-col :span="6">
            <div class="out-border">
              <div class="layout-title">后台项目</div>
              <div class="color-main address-content">
                <a href="">mall</a>
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="out-border">
              <div class="layout-title">前端项目</div>
              <div class="color-main address-content">
                <a href="">mall-hhy-web</a>
              </div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="out-border">
              <div class="layout-title">学习教程</div>
              <div class="color-main address-content">
                <a href="">mall-hhy-learning</a>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>

      <div class="total-layout">
        <el-row :gutter="20">
          <el-col :span="6">
            <div class="total-frame">
              <img :src="imgHomeOrder" class="total-icon">
              <div class="total-title">今日订单总数</div>
              <div class="total-value">20000</div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="total-frame">
              <img :src="imgHomeTodayAmount" class="total-icon">
              <div class="total-title">今日销售总额</div>
              <div class="total-value">￥500000.00</div>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="total-frame">
              <img :src="imgHomeYesterdayAmount" class="total-icon">
              <div class="total-title">昨日销售总额</div>
              <div class="total-value">￥450000.00</div>
            </div>
          </el-col>
        </el-row>
      </div>

      <el-card class="mine-layout">
        <div class="mine">
          <img class="img-mine" src="http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/banner/qrcode_for_macrozheng_258.jpg" alt="">
        </div>
        <div class="img-title">join us!</div>
        <div class="img-describe">
          <span class="color-main">关注公众号</span>，第一时间获取。
        </div>
      </el-card>

      <div class="un-handle-layout">
        <div class="layout-title">待处理事务</div>
        <div class="un-handle-content">
          <el-row :gutter="20">
            <el-col :span="8">
              <div class="un-handle-item">
                <span class="font-medium">待付款订单</span>
                <span class="font-medium-num color-danger">(10)</span>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="un-handle-item">
                <span class="font-medium">已完成订单</span>
                <span class="font-medium-num color-danger">(10)</span>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="un-handle-item">
                <span class="font-medium">待确认收货订单</span>
                <span class="font-medium-num color-danger">(10)</span>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="8">
              <div class="un-handle-item">
                <span class="font-medium">待发货订单</span>
                <span class="font-medium-num color-danger">(10)</span>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="un-handle-item">
                <span class="font-medium">新缺货登记</span>
                <span class="font-medium-num color-danger">(10)</span>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="un-handle-item">
                <span class="font-medium">待处理退款申请</span>
                <span class="font-medium-num color-danger">(10)</span>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="8">
              <div class="un-handle-item">
                <span class="font-medium">已发货订单</span>
                <span class="font-medium-num color-danger">(10)</span>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="un-handle-item">
                <span class="font-medium">待处理退货订单</span>
                <span class="font-medium-num color-danger">(10)</span>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="un-handle-item">
                <span class="font-medium">广告位即将到期</span>
                <span class="font-medium-num color-danger">(10)</span>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import imgHomeOrder from '@/assets/images/home_order.png'
import imgHomeTodayAmount from '@/assets/images/home_today_amount.png'
import imgHomeYesterdayAmount from '@/assets/images/home_yesterday_amount.png'

export default {
  name: 'Home',
  data () {
    return {
      loading: false,
      dataEmpty: false,
      imgHomeOrder,
      imgHomeTodayAmount,
      imgHomeYesterdayAmount
    }
  }
}
</script>

<style lang="stylus" scoped>
.app-container
  margin-top: 40px
  margin-left: 120px
  margin-right: 120px
  .address-layout
  .out-border
    border: 1px solid #DCDFE6
    // height: 90px
    .layout-title
      color: #606266
      padding: 15px 20px
      background: #f2f6fc
      font-weight: bold
    .address-content
      padding: 20px
      font-size: 18px
  .total-layout
    margin-top: 20px
    .total-frame
      border: 1px solid #dcdfe6
      padding: 20px
      height: 100px
      .total-icon
        color: #409EFF
        width: 60px
        height: 60px;
      .total-title
        position: relative
        font-size: 16px
        color: #909399
        left: 70px
        top: -50px
      .total-value
        position: relative
        font-size: 18px
        color: #606266
        left: 70px
        top: -40px
  .mine-layout
    position:absolute
    right: 140px
    top: 65px
    width: 250px
    height: 235px
    text-align:center
    .mine
      // text-align: center
      .img-mine
        width: 150px
        height: 150px
    .img-title
      // text-align: center
    .img-describe
      // text-align:center
      margin-top: 5px
  .un-handle-layout
    margin-top: 20px
    border: 1px solid #DCDFE6
    .layout-title
        color: #606266
        padding: 15px 20px
        background: #f2f6fc
        font-weight: bold
    .un-handle-content
      padding: 20px 40px
      .un-handle-item
        border-bottom: 1px solid #EBEEF5
        padding: 10px
</style>
