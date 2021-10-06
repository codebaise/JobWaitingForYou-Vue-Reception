<template>
  <div class="user-sider">
    <div data-v-ab7696d4="" class="sider-box sider-resume">
      <div data-v-ab7696d4="" class="resume-attachment">
        <h3 data-v-ab7696d4="" class="sider-title">附件管理</h3>
        <div data-v-ab7696d4="" class="btns">
          <button data-v-ab7696d4="" type="button" class="btn btn-primary">上传简历</button>
        </div>
<!--        <div data-v-ab7696d4="" class="">-->
<!--          <div data-v-ab7696d4="" class="btns">-->
<!--            <button data-v-ab7696d4="" type="button" class="btn btn-primary btn-outline">上传视频</button></div>-->
<!--        </div>-->
      </div>
    </div>
    <div class="sider-box resume-settings">
      <div class="sider-title">
        <em>隐私设置</em>
        <a href="javascript:void(0)" class="pull-right">设置</a></div>
      <div class="setting-item">
        <span>简历设置：</span>
        <!---->
        <!---->
        <!---->
        <span class="pull-right">对外开放</span></div>
      <div class="setting-item">
        <span>屏蔽公司：</span>
        <span class="pull-right">已屏蔽
        <span class="text-green">0</span>个</span></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sider'
}
</script>
<style scoped src="./static/sider.css"></style>
<style scoped>
.resume-container .user-sider {
  position: relative;
  width: 264px
}
</style>
