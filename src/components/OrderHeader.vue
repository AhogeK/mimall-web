<template>
  <div class="order-header">
    <div class="container clearfix">
      <div class="header-logo">
        <a href="/#/index" />
      </div>
      <div class="title">
        <h2>{{ title }}<slot name="tip" /></h2>
      </div>
      <div class="username">
        <a href="javascript:;">Jack</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    name: 'OrderHeader',
    props: {
      title: {
        type: String,
        default: ''
      }
    }
}
</script>
<style lang="scss">
  .order-header {
    padding:30px 0;
    .header-logo {
      float: left;
    }
    .title, .username {
      display: inline-block;
      height: 55px;
      line-height: 55px;
    }
    .title {
      font-size: 28px;
      float: left;
      color: #333333;
      margin-left: 54px;
      span {
        font-size: 14px;
        margin-left: 54px;
        color: #999999;
        font-weight: bold;
      }
    }
    .username {
      float: right;
      a {
        color: #666666;
        font-size: 16px;
      }
    }
  }
</style>