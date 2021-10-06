<template>
  <div class="search-box">
    <div class="search-form ">
      <form action="/job_detail/" method="get">
        <div class="search-form-con">
          <div class="city-sel">
            <i class="line"></i>
            <span class="label-text"><b>北京</b><i class="icon-arrow-down"></i></span>
          </div>
          <div class="industry-sel" ka="search_bos_sel_industry">
            <i class="line"></i>
            <span class="label-text"><b>公司行业</b><i class="icon-arrow-down"></i></span>
          </div>
          <div class="position-sel" ka="search_box_sel_jobtype">
            <i class="line"></i>
            <span class="label-text"><b>职位类型</b><i class="icon-arrow-down"></i></span>
          </div>
          <p class="ipt-wrap"><input type="text" name="query" ka="search-keyword" value="" autocomplete="off"
                                     class="ipt-search" maxlength="50" placeholder="搜索职位、公司"
          ></p>
        </div>
        <input type="hidden" name="city" class="city-code" value="101010100">
        <input type="hidden" name="industry" class="industry-code" value="">
        <input type="hidden" name="position" class="position-code" value="">
        <button class="btn btn-search">搜索</button>
        <div class="suggest-result" style="display: none;">
          <ul>
            <li>尚硅谷</li>
            <li>腾讯</li>
          </ul>
        </div>
        <div class="city-box">
          <ul class="dorpdown-province">
          </ul>
          <div class="dorpdown-city">
          </div>
        </div>
        <div class="industry-box">
          <ul>
            <li data-val=""><a href="javascript:;">不限</a></li>
            <li data-val="100001" ka="sel-industry-1"><a href="javascript:;">电子商务</a></li>
            <li data-val="100002" ka="sel-industry-2"><a href="javascript:;">游戏</a></li>
            <li data-val="100003" ka="sel-industry-3"><a href="javascript:;">媒体</a></li>
            <li data-val="100004" ka="sel-industry-4"><a href="javascript:;">广告营销</a></li>
            <li data-val="100005" ka="sel-industry-5"><a href="javascript:;">数据服务</a></li>
            <li data-val="100006" ka="sel-industry-6"><a href="javascript:;">医疗健康</a></li>
            <li data-val="100007" ka="sel-industry-7"><a href="javascript:;">生活服务</a></li>
            <li data-val="100008" ka="sel-industry-8"><a href="javascript:;">O2O</a></li>
            <li data-val="100009" ka="sel-industry-9"><a href="javascript:;">旅游</a></li>
            <li data-val="100010" ka="sel-industry-10"><a href="javascript:;">分类信息</a></li>
            <li data-val="100011" ka="sel-industry-11"><a href="javascript:;">音乐/视频/阅读</a></li>
            <li data-val="100012" ka="sel-industry-12"><a href="javascript:;">在线教育</a></li>
            <li data-val="100013" ka="sel-industry-13"><a href="javascript:;">社交网络</a></li>
            <li data-val="100014" ka="sel-industry-14"><a href="javascript:;">人力资源服务</a></li>
            <li data-val="100015" ka="sel-industry-15"><a href="javascript:;">企业服务</a></li>
            <li data-val="100016" ka="sel-industry-16"><a href="javascript:;">信息安全</a></li>
            <li data-val="100018" ka="sel-industry-17"><a href="javascript:;">智能硬件</a></li>
            <li data-val="100019" ka="sel-industry-18"><a href="javascript:;">移动互联网</a></li>
            <li data-val="100020" ka="sel-industry-19"><a href="javascript:;">互联网</a></li>
            <li data-val="100021" ka="sel-industry-20"><a href="javascript:;">计算机软件</a></li>
            <li data-val="100024" ka="sel-industry-21"><a href="javascript:;">通信/网络设备</a></li>
            <li data-val="100101" ka="sel-industry-22"><a href="javascript:;">广告/公关/会展</a></li>
            <li data-val="100206" ka="sel-industry-23"><a href="javascript:;">互联网金融</a></li>
            <li data-val="100502" ka="sel-industry-24"><a href="javascript:;">物流/仓储</a></li>
            <li data-val="100504" ka="sel-industry-25"><a href="javascript:;">贸易/进出口</a></li>
            <li data-val="100601" ka="sel-industry-26"><a href="javascript:;">咨询</a></li>
            <li data-val="100702" ka="sel-industry-27"><a href="javascript:;">工程施工</a></li>
            <li data-val="100801" ka="sel-industry-28"><a href="javascript:;">汽车生产</a></li>
            <li data-val="101304" ka="sel-industry-29"><a href="javascript:;">其他行业</a></li>
          </ul>
        </div>
        <div class="position-box">
          <div class="dropdown-menu">

            <div class="select-tree" data-level="3">
              <ul class="tree-1">
                <li data-id="0" class="">不限</li>
                <li data-id="310000">高级管理</li>
                <li data-id="100000">技术</li>
                <li data-id="110000">产品</li>
                <li data-id="120000">设计</li>
                <li data-id="130000">运营</li>
                <li data-id="140000">市场</li>
                <li data-id="150000">人事/财务/行政</li>
                <li data-id="160000">销售</li>
                <li data-id="170000">传媒</li>
                <li data-id="180000">金融</li>
                <li data-id="190000">教育培训</li>
                <li data-id="210000">医疗健康</li>
                <li data-id="250000">采购/贸易</li>
                <li data-id="240000">供应链/物流</li>
                <li data-id="220000">房地产/建筑</li>
                <li data-id="260000">咨询/翻译/法律</li>
                <li data-id="280000">旅游</li>
                <li data-id="290000">服务业</li>
                <li data-id="300000">生产制造</li>
                <li data-id="200000">其他</li>
              </ul>
              <ul class="tree-2">
                <li class="blank">选择职类</li>
              </ul>
              <ul class="tree-3"></ul>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>


<!--  <script>-->
<!--    var jobData = positionList-->
<!--  </script>-->
</template>

<script>
export default {
  name: 'HeaderSearch'
}
</script>

<style scoped>

</style>


