<template>
  <div
    v-show="showModal"
    class="modal"
  >
    <div class="mask" />
    <div class="modal-dialog">
      <div class="modal-header">
        <span>{{ title }}</span>
        <a
          href="javascript:;"
          class="icon-close"
        />
      </div>
      <div class="modal-body">
        <slot name="body" />
      </div>
      <div class="modal-footer">
        <div class="btn-group">
          <a
            v-show="btnType==1||btnType==3"
            href="javascript:;"
            class="btn"
          >确定</a>
          <a
            v-show="btnType==2||btnType==3"
            href="javascript:;"
            class="btn btn-default"
          >取消</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Modal',
    props: {
      // 弹框类型 小 small、中 middle、大表单 form
      modalType: {
        type: String,
        default: 'form'
      },
      // 弹框标题
      title: {
        type: String,
        default: ''
      },
      // 按钮： 1：确定按钮 2:取消按钮 3:确定取消
      btnType: {
        type: String,
        default: ''
      },
      sureText: {
        type: String,
        default: '确定'
      },
      cancelText: {
        type: String,
        default: '取消'
      },
      showModal: Boolean
    }
  }
</script>
<style lang="scss">
  @import './../assets/scss/reset.scss';
  @import './../assets/scss/config.scss';
  @import './../assets/scss/mixin.scss';
  @import './../assets/scss/modal.scss';
</style>