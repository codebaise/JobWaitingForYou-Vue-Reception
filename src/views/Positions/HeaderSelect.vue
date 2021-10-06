<template>
  <div>
    <!--      选择框-->
    <div class="condition-box">
      <!--        城市 -->
      <dl class="condition-city show-condition-district">
        <dd class="city-wrapper">
          <a href="javascript:;" class="disabled" title="北京招聘">北京</a>
          <em class="icon-arrow-right"></em>
          <a href="javascript:;" class="link-district selected">
            不限</a>
          <em class="icon-arrow-right"></em>
          <span class="hot-text">热门城市：</span>
          <a href="javascript:void(0)" >全国</a>
          <a href="javascript:void(0)" >北京</a>
          <a href="javascript:void(0)" >上海</a>
          <a href="javascript:void(0)" >广州</a>
          <a href="javascript:void(0)" >深圳</a>
          <a href="javascript:void(0)" >杭州</a>
          <a href="javascript:void(0)" >天津</a>
          <a href="javascript:void(0)" >西安</a>
          <a href="javascript:void(0)" >苏州</a>
          <a href="javascript:void(0)" >武汉</a>
          <a href="javascript:void(0)" >厦门</a>
          <a href="javascript:void(0)" >长沙</a>
          <a href="javascript:void(0)" >成都</a>
          <a href="javascript:void(0)" >郑州</a>
          <a href="javascript:void(0)" >重庆</a>
          <a href="javascript:;" class="btn-allcity">全部城市</a>
        </dd>
      </dl>
      <!--        区 -->
      <dl class="condition-district  show-condition-district ">
        <dd>
          <a class="selected" href="javascript:void(0)" >不限</a>
          <a href="javascript:void(0)">朝阳区</a>
          <a href="javascript:void(0)">海淀区</a>
          <a href="javascript:void(0)" >大兴区</a>
          <a href="javascript:void(0)" >丰台区</a>
          <a href="javascript:void(0)" >昌平区</a>
          <a href="javascript:void(0)" >东城区</a>
          <a href="javascript:void(0)" >西城区</a>
          <a href="javascript:void(0)" >通州区</a>
          <a href="javascript:void(0)" >顺义区</a>
          <a href="javascript:void(0)" >石景山区</a>
          <a href="javascript:void(0)" >房山区</a>
          <a href="javascript:void(0)" >门头沟区</a>
          <a href="javascript:void(0)" >怀柔区</a>
          <a href="javascript:void(0)" >延庆区</a>
          <a href="javascript:void(0)" >密云区</a>
          <a href="javascript:void(0)" >平谷区</a>
        </dd>
      </dl>
      <!--        -->
    </div>
    <!--     弹出框区域-->
    <div class="filter-select-box">
      <!--        工作经验-->
      <div class="dropdown-wrap">

                    <span class="dropdown-select">
                            <input type="text"  value="工作经验" class="ipt" readonly="">
                        <i class="icon-select-arrow"></i>
                        <div class="dropdown-menu">
                            <ul>
                                            <li><a href="javascript:void(0)"  rel="nofollow">不限</a></li>
                                            <li><a href="javascript:void(0)"  rel="nofollow"
                                            >在校生</a></li>
                                            <li><a href="javascript:void(0)"  rel="nofollow"
                                            >应届生</a></li>
                                            <li><a href="javascript:void(0)"  rel="nofollow"
                                            >1年以内</a></li>
                                            <li><a href="javascript:void(0)"  rel="nofollow"
                                            >1-3年</a></li>
                                            <li><a href="javascript:void(0)"  rel="nofollow"
                                            >3-5年</a></li>
                                            <li><a href="javascript:void(0)"  rel="nofollow"
                                            >5-10年</a></li>
                                            <li><a href="javascript:void(0)"  rel="nofollow"
                                            >10年以上</a></li>
                            </ul>
                        </div>
                    </span>
      </div>
      <!--        学历-->
      <div class="dropdown-wrap">

                    <span class="dropdown-select">
                            <input type="text" value="学历要求"  class="ipt" readonly="">
                        <i class="icon-select-arrow"></i>
                        <div class="dropdown-menu">
                            <ul>
                                        <li><a href="javascript:void(0)"  rel="nofollow">不限</a></li>
                                        <li><a href="javascript:void(0)"  rel="nofollow"
                                        >初中及以下</a></li>
                                        <li><a href="javascript:void(0)"  rel="nofollow"
                                        >中专/中技</a></li>
                                        <li><a href="javascript:void(0)"  rel="nofollow">高中</a></li>
                                        <li><a href="javascript:void(0)"  rel="nofollow">大专</a></li>
                                        <li><a href="javascript:void(0)"  rel="nofollow">本科</a></li>
                                        <li><a href="javascript:void(0)"  rel="nofollow">硕士</a></li>
                                        <li><a href="javascript:void(0)"  rel="nofollow">博士</a></li>
                            </ul>
                        </div>
                    </span>
      </div>
      <!--        薪资-->
      <div class="dropdown-wrap">
                    <span class="dropdown-select">
                            <input type="text"  value="薪资要求" class="ipt" readonly="">
                        <i class="icon-select-arrow"></i>
                        <div class="dropdown-menu">
                            <ul>
                                        <li><a href="javascript:void(0)"  rel="nofollow">不限</a></li>
                                        <li><a href="javascript:void(0)"  rel="nofollow">3K以下</a></li>
                                        <li><a href="javascript:void(0)"  rel="nofollow">3-5K</a></li>
                                        <li><a href="javascript:void(0)"  rel="nofollow">5-10K</a></li>
                                        <li><a href="javascript:void(0)"  rel="nofollow">10-15K</a></li>
                                        <li><a href="javascript:void(0)"  rel="nofollow">15-20K</a></li>
                                        <li><a href="javascript:void(0)"  rel="nofollow">20-30K</a></li>
                                        <li><a href="javascript:void(0)"  rel="nofollow">30-50K</a></li>
                                        <li><a href="javascript:void(0)"  rel="nofollow">50K以上</a></li>
                            </ul>
                        </div>
                    </span>
      </div>
      <!--         公司规模 -->
      <div class="dropdown-wrap">
                    <span class="dropdown-select">
                            <input type="text"  value="公司规模" class="ipt" readonly="">
                        <i class="icon-select-arrow"></i>
                        <div class="dropdown-menu">
                            <ul>
                                       <li><a href="javascript:void(0)"  rel="nofollow">不限</a></li>
                                       <li><a href="javascript:void(0)"  rel="nofollow">0-20人</a></li>
                                       <li><a href="javascript:void(0)"  rel="nofollow"
                                       >20-99人</a></li>
                                       <li><a href="javascript:void(0)"  rel="nofollow"
                                       >100-499人</a></li>
                                       <li><a href="javascript:void(0)"  rel="nofollow"
                                       >500-999人</a></li>
                                       <li><a href="javascript:void(0)"  rel="nofollow">1000-9999人</a></li>
                                       <li><a href="javascript:void(0)"  rel="nofollow"
                                       >10000人以上</a></li>
                            </ul>
                        </div>
                    </span>
      </div>
      <a href="javascript:void(0)"  class="empty-filter" rel="nofollow">清空筛选条件</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderSelect'
}
</script>

<style scoped>

</style>
