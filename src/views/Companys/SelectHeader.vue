<template>
  <div id="positionHead" style="margin: 0 8px 20px;background: #fff;" >
    <!-- 筛选 -->
    <ul id="filterBox" class="filter-wrapper">
      <div class="details" id="filterCollapse">
        <div class="has-more workcity">
          <li :class="{active:showMoreCity}">
            <span class="title">公司地点：</span>
            <div class="city-wrapper clearfix">
              <a data-id="0" href="javascript:;" class="active" data-lg-tj-id="7z00" data-lg-tj-no="0001" data-lg-tj-cid="idnull">全国</a>
              <a data-id="2" href="javascript:;" data-lg-tj-id="7z00" data-lg-tj-no="0002" data-lg-tj-cid="idnull">北京</a>
              <a data-id="3" href="javascript:;" data-lg-tj-id="7z00" data-lg-tj-no="0003" data-lg-tj-cid="idnull">上海</a>
              <a data-id="215" href="javascript:;" data-lg-tj-id="7z00" data-lg-tj-no="0004" data-lg-tj-cid="idnull">深圳</a>
              <a data-id="213" href="javascript:;" data-lg-tj-id="7z00" data-lg-tj-no="0005" data-lg-tj-cid="idnull">广州</a>
              <a data-id="6" href="javascript:;" data-lg-tj-id="7z00" data-lg-tj-no="0006" data-lg-tj-cid="idnull">杭州</a>
              <a data-id="252" href="javascript:;" data-lg-tj-id="7z00" data-lg-tj-no="0007" data-lg-tj-cid="idnull">成都</a>
              <a data-id="79" href="javascript:;" data-lg-tj-id="7z00" data-lg-tj-no="0008" data-lg-tj-cid="idnull">南京</a>
              <a data-id="184" href="javascript:;" data-lg-tj-id="7z00" data-lg-tj-no="0009" data-lg-tj-cid="idnull">武汉</a>
              <a data-id="298" href="javascript:;" data-lg-tj-id="7z00" data-lg-tj-no="0010" data-lg-tj-cid="idnull">西安</a>
              <a data-id="129" href="javascript:;" data-lg-tj-id="7z00" data-lg-tj-no="0011" data-lg-tj-cid="idnull">厦门</a>
              <a data-id="198" href="javascript:;" data-lg-tj-id="7z00" data-lg-tj-no="0012" data-lg-tj-cid="idnull">长沙</a>
              <a data-id="80" href="javascript:;" data-lg-tj-id="7z00" data-lg-tj-no="0013" data-lg-tj-cid="idnull">苏州</a>
              <a data-id="4" href="javascript:;" data-lg-tj-id="7z00" data-lg-tj-no="0014" data-lg-tj-cid="idnull">天津</a>
            </div>
            <a @mouseenter="toShowMoreCity" @mouseleave="toHideMoreCity" class="btn-more" href="javascript:;">更多&nbsp;&nbsp;&nbsp;<i></i></a>
          </li>
          <div :class="['more', 'more-positions', {unfolded: showMoreCity}]" @mouseleave="toHideMoreCity" @mouseenter="toShowMoreCity">
            <li class="hot">
              <span class="title">公司地点：</span>
              <a data-id="0" href="javascript:;" class="active" data-lg-tj-id="7A00" data-lg-tj-no="0001" data-lg-tj-cid="idnull">全国</a>
              <a data-id="2" href="javascript:;" data-lg-tj-id="7A00" data-lg-tj-no="0002" data-lg-tj-cid="idnull">北京</a>
              <a data-id="3" href="javascript:;" data-lg-tj-id="7A00" data-lg-tj-no="0003" data-lg-tj-cid="idnull">上海</a>
              <a data-id="215" href="javascript:;" data-lg-tj-id="7A00" data-lg-tj-no="0004" data-lg-tj-cid="idnull">深圳</a>
              <a data-id="213" href="javascript:;" data-lg-tj-id="7A00" data-lg-tj-no="0005" data-lg-tj-cid="idnull">广州</a>
              <a data-id="6" href="javascript:;" data-lg-tj-id="7A00" data-lg-tj-no="0006" data-lg-tj-cid="idnull">杭州</a>
              <a data-id="252" href="javascript:;" data-lg-tj-id="7A00" data-lg-tj-no="0007" data-lg-tj-cid="idnull">成都</a>
              <a data-id="79" href="javascript:;" data-lg-tj-id="7A00" data-lg-tj-no="0008" data-lg-tj-cid="idnull">南京</a>
              <a data-id="184" href="javascript:;" data-lg-tj-id="7A00" data-lg-tj-no="0009" data-lg-tj-cid="idnull">武汉</a>
              <a data-id="298" href="javascript:;" data-lg-tj-id="7A00" data-lg-tj-no="0010" data-lg-tj-cid="idnull">西安</a>
              <a data-id="129" href="javascript:;" data-lg-tj-id="7A00" data-lg-tj-no="0011" data-lg-tj-cid="idnull">厦门</a>
              <a data-id="198" href="javascript:;" data-lg-tj-id="7A00" data-lg-tj-no="0012" data-lg-tj-cid="idnull">长沙</a>
              <a data-id="80" href="javascript:;" data-lg-tj-id="7A00" data-lg-tj-no="0013" data-lg-tj-cid="idnull">苏州</a>
              <a data-id="4" href="javascript:;" data-lg-tj-id="7A00" data-lg-tj-no="0014" data-lg-tj-cid="idnull">天津</a>
            </li>
            <li class="other">
              <a data-id="5" href="javascript:;" data-lg-tj-id="7B00" data-lg-tj-no="0001" data-lg-tj-cid="idnull">重庆</a>
              <a data-id="167" href="javascript:;" data-lg-tj-id="7B00" data-lg-tj-no="0002" data-lg-tj-cid="idnull">郑州</a>
              <a data-id="149" href="javascript:;" data-lg-tj-id="7B00" data-lg-tj-no="0003" data-lg-tj-cid="idnull">青岛</a>
              <a data-id="111" href="javascript:;" data-lg-tj-id="7B00" data-lg-tj-no="0004" data-lg-tj-cid="idnull">合肥</a>
              <a data-id="128" href="javascript:;" data-lg-tj-id="7B00" data-lg-tj-no="0005" data-lg-tj-cid="idnull">福州</a>
              <a data-id="148" href="javascript:;" data-lg-tj-id="7B00" data-lg-tj-no="0006" data-lg-tj-cid="idnull">济南</a>
              <a data-id="43" href="javascript:;" data-lg-tj-id="7B00" data-lg-tj-no="0007" data-lg-tj-cid="idnull">大连</a>
              <a data-id="216" href="javascript:;" data-lg-tj-id="7B00" data-lg-tj-no="0008" data-lg-tj-cid="idnull">珠海</a>
              <a data-id="84" href="javascript:;" data-lg-tj-id="7B00" data-lg-tj-no="0009" data-lg-tj-cid="idnull">无锡</a>
              <a data-id="218" href="javascript:;" data-lg-tj-id="7B00" data-lg-tj-no="0010" data-lg-tj-cid="idnull">佛山</a>
              <a data-id="230" href="javascript:;" data-lg-tj-id="7B00" data-lg-tj-no="0011" data-lg-tj-cid="idnull">东莞</a>
              <a data-id="98" href="javascript:;" data-lg-tj-id="7B00" data-lg-tj-no="0012" data-lg-tj-cid="idnull">宁波</a>
              <a data-id="87" href="javascript:;" data-lg-tj-id="7B00" data-lg-tj-no="0013" data-lg-tj-cid="idnull">常州</a>
              <a data-id="44" href="javascript:;" data-lg-tj-id="7B00" data-lg-tj-no="0014" data-lg-tj-cid="idnull">沈阳</a>
              <a data-id="8" href="javascript:;" data-lg-tj-id="7B00" data-lg-tj-no="0015" data-lg-tj-cid="idnull">石家庄</a>
              <a data-id="282" href="javascript:;" data-lg-tj-id="7B00" data-lg-tj-no="0016" data-lg-tj-cid="idnull">昆明</a>
              <a data-id="7" href="javascript:;" data-lg-tj-id="7B00" data-lg-tj-no="0017" data-lg-tj-cid="idnull">南昌</a>
              <a data-id="235" href="javascript:;" data-lg-tj-id="7B00" data-lg-tj-no="0018" data-lg-tj-cid="idnull">南宁</a>
              <a data-id="57" href="javascript:;" data-lg-tj-id="7B00" data-lg-tj-no="0019" data-lg-tj-cid="idnull">哈尔滨</a>
              <a data-id="249" href="javascript:;" data-lg-tj-id="7B00" data-lg-tj-no="0020" data-lg-tj-cid="idnull">海口</a>
              <a data-id="231" href="javascript:;" data-lg-tj-id="7B00" data-lg-tj-no="0021" data-lg-tj-cid="idnull">中山</a>
              <a data-id="224" href="javascript:;" data-lg-tj-id="7B00" data-lg-tj-no="0022" data-lg-tj-cid="idnull">惠州</a>
              <a data-id="273" href="javascript:;" data-lg-tj-id="7B00" data-lg-tj-no="0023" data-lg-tj-cid="idnull">贵阳</a>
              <a data-id="70" href="javascript:;" data-lg-tj-id="7B00" data-lg-tj-no="0024" data-lg-tj-cid="idnull">长春</a>
              <a data-id="19" href="javascript:;" data-lg-tj-id="7B00" data-lg-tj-no="0025" data-lg-tj-cid="idnull">太原</a>
              <a data-id="101" href="javascript:;" data-lg-tj-id="7B00" data-lg-tj-no="0026" data-lg-tj-cid="idnull">嘉兴</a>
              <a data-id="156" href="javascript:;" data-lg-tj-id="7B00" data-lg-tj-no="0027" data-lg-tj-cid="idnull">泰安</a>
              <a data-id="81" href="javascript:;" data-lg-tj-id="7B00" data-lg-tj-no="0028" data-lg-tj-cid="idnull">昆山</a>
              <a data-id="153" href="javascript:;" data-lg-tj-id="7B00" data-lg-tj-no="0029" data-lg-tj-cid="idnull">烟台</a>
              <a data-id="315" href="javascript:;" data-lg-tj-id="7B00" data-lg-tj-no="0030" data-lg-tj-cid="idnull">兰州</a>
              <a data-id="132" href="javascript:;" data-lg-tj-id="7B00" data-lg-tj-no="0031" data-lg-tj-cid="idnull">泉州</a>
              <a href="javascript:;" id="all_city">全部城市 &gt; </a>
            </li>
          </div>
        </div>
        <li class="multi-chosen companysize"><span class="title">公司规模：</span>
          <a data-id="0" href="javascript:;" class="active" data-lg-tj-id="1c4f" data-lg-tj-no="0001" data-lg-tj-cid="idnull">不限</a>
          <a data-id="1" href="javascript:;" data-lg-tj-id="1c4f" data-lg-tj-no="0002" data-lg-tj-cid="idnull">少于15人
            <i class="delete"></i></a>
          <a data-id="2" href="javascript:;" data-lg-tj-id="1c4f" data-lg-tj-no="0003" data-lg-tj-cid="idnull">15-50人
            <i class="delete"></i></a>
          <a data-id="3" href="javascript:;" data-lg-tj-id="1c4f" data-lg-tj-no="0004" data-lg-tj-cid="idnull">50-150人
            <i class="delete"></i></a>
          <a data-id="4" href="javascript:;" data-lg-tj-id="1c4f" data-lg-tj-no="0005" data-lg-tj-cid="idnull">150-500人
            <i class="delete"></i></a>
          <a data-id="5" href="javascript:;" data-lg-tj-id="1c4f" data-lg-tj-no="0006" data-lg-tj-cid="idnull">500-2000人
            <i class="delete"></i></a>
          <a data-id="6" href="javascript:;" data-lg-tj-id="1c4f" data-lg-tj-no="0007" data-lg-tj-cid="idnull">2000人以上
            <i class="delete"></i></a>
        </li>
        <div class="has-more industry">
          <li style="border-bottom:none;" class="multi-chosen">
            <span class="title">行业领域：</span>
            <a data-id="0" href="javascript:;" class="active" data-lg-tj-id="7D00" data-lg-tj-no="0001" data-lg-tj-cid="idnull">不限</a>
            <a data-id="24" href="javascript:;" data-lg-tj-id="7D00" data-lg-tj-no="0002" data-lg-tj-cid="idnull">移动互联网
              <i class="delete"></i></a>
            <a data-id="25" href="javascript:;" data-lg-tj-id="7D00" data-lg-tj-no="0003" data-lg-tj-cid="idnull">电商
              <i class="delete"></i></a>
            <a data-id="26" href="javascript:;" data-lg-tj-id="7D00" data-lg-tj-no="
                                                                            0004
                                                                    " data-lg-tj-cid="idnull">金融
              <i class="delete"></i>
            </a>
            <a data-id="27" href="javascript:;" data-lg-tj-id="7D00" data-lg-tj-no="
                                                                            0005
                                                                    " data-lg-tj-cid="idnull">企业服务
              <i class="delete"></i>
            </a>
            <a data-id="28" href="javascript:;" data-lg-tj-id="7D00" data-lg-tj-no="
                                                                            0006
                                                                    " data-lg-tj-cid="idnull">教育
              <i class="delete"></i>
            </a>
            <a data-id="29" href="javascript:;" data-lg-tj-id="7D00" data-lg-tj-no="
                                                                            0007
                                                                    " data-lg-tj-cid="idnull">文娱丨内容
              <i class="delete"></i>
            </a>
            <a data-id="31" href="javascript:;" data-lg-tj-id="7D00" data-lg-tj-no="
                                                                            0008
                                                                    " data-lg-tj-cid="idnull">游戏
              <i class="delete"></i>
            </a>
            <a data-id="32" href="javascript:;" data-lg-tj-id="7D00" data-lg-tj-no="
                                                                            0009
                                                                    " data-lg-tj-cid="idnull">消费生活
              <i class="delete"></i>
            </a>
            <a data-id="33" href="javascript:;" data-lg-tj-id="7D00" data-lg-tj-no="
                                                                            0010
                                                                    " data-lg-tj-cid="idnull">硬件
              <i class="delete"></i>
            </a>
            <span class="btn-more-hy" href="javascript:;"></span> <i></i>
          </li>
          <div class="more-hy more-fields more">
            <li class="hot multi-chosen">
              <span class="title">行业领域：</span>
              <a data-id="0" href="javascript:;" class="active" data-lg-tj-id="7D00" data-lg-tj-no="
                                                                            0001
                                                                    " data-lg-tj-cid="idnull">不限
              </a>
              <a data-id="24" href="javascript:;" data-lg-tj-id="7E00" data-lg-tj-no="
                                                                    0002
                                                            " data-lg-tj-cid="idnull">移动互联网
                <i class="delete"></i>
              </a>
              <a data-id="25" href="javascript:;" data-lg-tj-id="7E00" data-lg-tj-no="
                                                                    0003
                                                            " data-lg-tj-cid="idnull">电商
                <i class="delete"></i>
              </a>
              <a data-id="26" href="javascript:;" data-lg-tj-id="7E00" data-lg-tj-no="
                                                                    0004
                                                            " data-lg-tj-cid="idnull">金融
                <i class="delete"></i>
              </a>
              <a data-id="27" href="javascript:;" data-lg-tj-id="7E00" data-lg-tj-no="
                                                                    0005
                                                            " data-lg-tj-cid="idnull">企业服务
                <i class="delete"></i>
              </a>
              <a data-id="28" href="javascript:;" data-lg-tj-id="7E00" data-lg-tj-no="
                                                                    0006
                                                            " data-lg-tj-cid="idnull">教育
                <i class="delete"></i>
              </a>
              <a data-id="29" href="javascript:;" data-lg-tj-id="7E00" data-lg-tj-no="
                                                                    0007
                                                            " data-lg-tj-cid="idnull">文娱丨内容
                <i class="delete"></i>
              </a>
              <a data-id="31" href="javascript:;" data-lg-tj-id="7E00" data-lg-tj-no="
                                                                    0008
                                                            " data-lg-tj-cid="idnull">游戏
                <i class="delete"></i>
              </a>
              <a data-id="32" href="javascript:;" data-lg-tj-id="7E00" data-lg-tj-no="
                                                                    0009
                                                            " data-lg-tj-cid="idnull">消费生活
                <i class="delete"></i>
              </a>
              <a data-id="33" href="javascript:;" data-lg-tj-id="7E00" data-lg-tj-no="
                                                                    0010
                                                            " data-lg-tj-cid="idnull">硬件
                <i class="delete"></i>
              </a>
            </li>
            <li class="other multi-chosen">
              <a data-id="34" href="javascript:;" data-lg-tj-id="7F00" data-lg-tj-no="
                                                            0001
                                                    " data-lg-tj-cid="idnull">社交
                <i class="delete"></i>
              </a>
              <a data-id="35" href="javascript:;" data-lg-tj-id="7F00" data-lg-tj-no="
                                                            0002
                                                    " data-lg-tj-cid="idnull">旅游
                <i class="delete"></i>
              </a>
              <a data-id="38" href="javascript:;" data-lg-tj-id="7F00" data-lg-tj-no="
                                                            0003
                                                    " data-lg-tj-cid="idnull">体育
                <i class="delete"></i>
              </a>
              <a data-id="41" href="javascript:;" data-lg-tj-id="7F00" data-lg-tj-no="
                                                            0004
                                                    " data-lg-tj-cid="idnull">工具
                <i class="delete"></i>
              </a>
              <a data-id="43" href="javascript:;" data-lg-tj-id="7F00" data-lg-tj-no="
                                                            0005
                                                    " data-lg-tj-cid="idnull">汽车丨出行
                <i class="delete"></i>
              </a>
              <a data-id="45" href="javascript:;" data-lg-tj-id="7F00" data-lg-tj-no="
                                                            0006
                                                    " data-lg-tj-cid="idnull">物流丨运输
                <i class="delete"></i>
              </a>
              <a data-id="47" href="javascript:;" data-lg-tj-id="7F00" data-lg-tj-no="
                                                            0007
                                                    " data-lg-tj-cid="idnull">医疗丨健康
                <i class="delete"></i>
              </a>
              <a data-id="48" href="javascript:;" data-lg-tj-id="7F00" data-lg-tj-no="
                                                            0008
                                                    " data-lg-tj-cid="idnull">广告营销
                <i class="delete"></i>
              </a>
              <a data-id="49" href="javascript:;" data-lg-tj-id="7F00" data-lg-tj-no="
                                                            0009
                                                    " data-lg-tj-cid="idnull">数据服务
                <i class="delete"></i>
              </a>
              <a data-id="15793" href="javascript:;" data-lg-tj-id="7F00" data-lg-tj-no="
                                                            0010
                                                    " data-lg-tj-cid="idnull">信息安全
                <i class="delete"></i>
              </a>
              <a data-id="15794" href="javascript:;" data-lg-tj-id="7F00" data-lg-tj-no="
                                                            0011
                                                    " data-lg-tj-cid="idnull">人工智能
                <i class="delete"></i>
              </a>
              <a data-id="15795" href="javascript:;" data-lg-tj-id="7F00" data-lg-tj-no="
                                                            0012
                                                    " data-lg-tj-cid="idnull">区块链
                <i class="delete"></i>
              </a>
              <a data-id="15796" href="javascript:;" data-lg-tj-id="7F00" data-lg-tj-no="
                                                            0013
                                                    " data-lg-tj-cid="idnull">物联网
                <i class="delete"></i>
              </a>
              <a data-id="15797" href="javascript:;" data-lg-tj-id="7F00" data-lg-tj-no="
                                                            0014
                                                    " data-lg-tj-cid="idnull">VR丨AR
                <i class="delete"></i>
              </a>
              <a data-id="15798" href="javascript:;" data-lg-tj-id="7F00" data-lg-tj-no="
                                                            0015
                                                    " data-lg-tj-cid="idnull">软件开发
                <i class="delete"></i>
              </a>
              <a data-id="15799" href="javascript:;" data-lg-tj-id="7F00" data-lg-tj-no="
                                                            0016
                                                    " data-lg-tj-cid="idnull">通讯电子
                <i class="delete"></i>
              </a>
              <a data-id="15800" href="javascript:;" data-lg-tj-id="7F00" data-lg-tj-no="
                                                            0017
                                                    " data-lg-tj-cid="idnull">房产家居
                <i class="delete"></i>
              </a>
              <a data-id="15801" href="javascript:;" data-lg-tj-id="7F00" data-lg-tj-no="
                                                            0018
                                                    " data-lg-tj-cid="idnull">其他
                <i class="delete"></i>
              </a>
            </li>
          </div>
        </div>
      </div>
    </ul>


    <!-- 排序 -->
    <ul class="sub_filter" id="order">
      <li class="wrapper">
        <div class="item order">
          <span class="title">排序方式：</span>
          <a href="" class="active" data-lg-tj-id="7G00" data-lg-tj-no="0001" data-lg-tj-cid="">默认排序</a>
        </div>
      </li>
    </ul>
    <ul class="sub_filter" id="ceilbar" style="display: none;">
      <li class="wrapper">
        <div class="item place selectUI">
          <div class="selectUI-text text"><span>公司地点不限</span><i></i>
            <span class="active_bg"></span>
            <ul class="cities">
              <li><a href="https://www.lagou.com/gongsi/0-0-0-0#order" class="active" data-lg-tj-id="7I00" data-lg-tj-no="
                                                            0001
                                                    " data-lg-tj-cid="idnull">全国</a></li>
              <li><a href="https://www.lagou.com/gongsi/2-0-0-0#order" data-lg-tj-id="7I00" data-lg-tj-no="
                                                            0002
                                                    " data-lg-tj-cid="idnull">北京</a></li>
              <li><a href="https://www.lagou.com/gongsi/3-0-0-0#order" data-lg-tj-id="7I00" data-lg-tj-no="
                                                            0003
                                                    " data-lg-tj-cid="idnull">上海</a></li>
              <li><a href="https://www.lagou.com/gongsi/215-0-0-0#order" data-lg-tj-id="7I00" data-lg-tj-no="
                                                            0004
                                                    " data-lg-tj-cid="idnull">深圳</a></li>
              <li><a href="https://www.lagou.com/gongsi/213-0-0-0#order" data-lg-tj-id="7I00" data-lg-tj-no="
                                                            0005
                                                    " data-lg-tj-cid="idnull">广州</a></li>
              <li><a href="https://www.lagou.com/gongsi/6-0-0-0#order" data-lg-tj-id="7I00" data-lg-tj-no="
                                                            0006
                                                    " data-lg-tj-cid="idnull">杭州</a></li>
              <li><a href="https://www.lagou.com/gongsi/252-0-0-0#order" data-lg-tj-id="7I00" data-lg-tj-no="
                                                            0007
                                                    " data-lg-tj-cid="idnull">成都</a></li>
              <li><a href="https://www.lagou.com/gongsi/79-0-0-0#order" data-lg-tj-id="7I00" data-lg-tj-no="
                                                            0008
                                                    " data-lg-tj-cid="idnull">南京</a></li>
              <li><a href="https://www.lagou.com/gongsi/184-0-0-0#order" data-lg-tj-id="7I00" data-lg-tj-no="
                                                            0009
                                                    " data-lg-tj-cid="idnull">武汉</a></li>
              <li><a href="https://www.lagou.com/gongsi/298-0-0-0#order" data-lg-tj-id="7I00" data-lg-tj-no="
                                                            0010
                                                    " data-lg-tj-cid="idnull">西安</a></li>
              <li><a href="https://www.lagou.com/gongsi/129-0-0-0#order" data-lg-tj-id="7I00" data-lg-tj-no="
                                                            0011
                                                    " data-lg-tj-cid="idnull">厦门</a></li>
              <li><a href="https://www.lagou.com/gongsi/198-0-0-0#order" data-lg-tj-id="7I00" data-lg-tj-no="
                                                            0012
                                                    " data-lg-tj-cid="idnull">长沙</a></li>
              <li><a href="https://www.lagou.com/gongsi/80-0-0-0#order" data-lg-tj-id="7I00" data-lg-tj-no="
                                                            0013
                                                    " data-lg-tj-cid="idnull">苏州</a></li>
              <li><a href="https://www.lagou.com/gongsi/4-0-0-0#order" data-lg-tj-id="7I00" data-lg-tj-no="
                                                            0014
                                                    " data-lg-tj-cid="idnull">天津</a></li>
              <li><a href="https://www.lagou.com/gongsi/5-0-0-0#order" data-lg-tj-id="7J00" data-lg-tj-no="
                                                            0001
                                                    " data-lg-tj-cid="idnull">重庆</a></li>
              <li><a href="https://www.lagou.com/gongsi/167-0-0-0#order" data-lg-tj-id="7J00" data-lg-tj-no="
                                                            0002
                                                    " data-lg-tj-cid="idnull">郑州</a></li>
              <li><a href="https://www.lagou.com/gongsi/149-0-0-0#order" data-lg-tj-id="7J00" data-lg-tj-no="
                                                            0003
                                                    " data-lg-tj-cid="idnull">青岛</a></li>
              <li><a href="https://www.lagou.com/gongsi/111-0-0-0#order" data-lg-tj-id="7J00" data-lg-tj-no="
                                                            0004
                                                    " data-lg-tj-cid="idnull">合肥</a></li>
              <li><a href="https://www.lagou.com/gongsi/128-0-0-0#order" data-lg-tj-id="7J00" data-lg-tj-no="
                                                            0005
                                                    " data-lg-tj-cid="idnull">福州</a></li>
              <li><a href="https://www.lagou.com/gongsi/148-0-0-0#order" data-lg-tj-id="7J00" data-lg-tj-no="
                                                            0006
                                                    " data-lg-tj-cid="idnull">济南</a></li>
              <li><a href="https://www.lagou.com/gongsi/43-0-0-0#order" data-lg-tj-id="7J00" data-lg-tj-no="
                                                            0007
                                                    " data-lg-tj-cid="idnull">大连</a></li>
              <li><a href="https://www.lagou.com/gongsi/216-0-0-0#order" data-lg-tj-id="7J00" data-lg-tj-no="
                                                            0008
                                                    " data-lg-tj-cid="idnull">珠海</a></li>
              <li><a href="https://www.lagou.com/gongsi/84-0-0-0#order" data-lg-tj-id="7J00" data-lg-tj-no="
                                                            0009
                                                    " data-lg-tj-cid="idnull">无锡</a></li>
              <li><a href="https://www.lagou.com/gongsi/218-0-0-0#order" data-lg-tj-id="7J00" data-lg-tj-no="
                                                            0010
                                                    " data-lg-tj-cid="idnull">佛山</a></li>
              <li><a href="https://www.lagou.com/gongsi/230-0-0-0#order" data-lg-tj-id="7J00" data-lg-tj-no="
                                                            0011
                                                    " data-lg-tj-cid="idnull">东莞</a></li>
              <li><a href="https://www.lagou.com/gongsi/98-0-0-0#order" data-lg-tj-id="7J00" data-lg-tj-no="
                                                            0012
                                                    " data-lg-tj-cid="idnull">宁波</a></li>
              <li><a href="https://www.lagou.com/gongsi/87-0-0-0#order" data-lg-tj-id="7J00" data-lg-tj-no="
                                                            0013
                                                    " data-lg-tj-cid="idnull">常州</a></li>
              <li><a href="https://www.lagou.com/gongsi/44-0-0-0#order" data-lg-tj-id="7J00" data-lg-tj-no="
                                                            0014
                                                    " data-lg-tj-cid="idnull">沈阳</a></li>
              <li><a href="https://www.lagou.com/gongsi/8-0-0-0#order" data-lg-tj-id="7J00" data-lg-tj-no="
                                                            0015
                                                    " data-lg-tj-cid="idnull">石家庄</a></li>
              <li><a href="https://www.lagou.com/gongsi/282-0-0-0#order" data-lg-tj-id="7J00" data-lg-tj-no="
                                                            0016
                                                    " data-lg-tj-cid="idnull">昆明</a></li>
              <li><a href="https://www.lagou.com/gongsi/7-0-0-0#order" data-lg-tj-id="7J00" data-lg-tj-no="
                                                            0017
                                                    " data-lg-tj-cid="idnull">南昌</a></li>
              <li><a href="https://www.lagou.com/gongsi/235-0-0-0#order" data-lg-tj-id="7J00" data-lg-tj-no="
                                                            0018
                                                    " data-lg-tj-cid="idnull">南宁</a></li>
              <li><a href="https://www.lagou.com/gongsi/57-0-0-0#order" data-lg-tj-id="7J00" data-lg-tj-no="
                                                            0019
                                                    " data-lg-tj-cid="idnull">哈尔滨</a></li>
              <li><a href="https://www.lagou.com/gongsi/249-0-0-0#order" data-lg-tj-id="7J00" data-lg-tj-no="
                                                            0020
                                                    " data-lg-tj-cid="idnull">海口</a></li>
              <li><a href="https://www.lagou.com/gongsi/231-0-0-0#order" data-lg-tj-id="7J00" data-lg-tj-no="
                                                            0021
                                                    " data-lg-tj-cid="idnull">中山</a></li>
              <li><a href="https://www.lagou.com/gongsi/224-0-0-0#order" data-lg-tj-id="7J00" data-lg-tj-no="
                                                            0022
                                                    " data-lg-tj-cid="idnull">惠州</a></li>
              <li><a href="https://www.lagou.com/gongsi/273-0-0-0#order" data-lg-tj-id="7J00" data-lg-tj-no="
                                                            0023
                                                    " data-lg-tj-cid="idnull">贵阳</a></li>
              <li><a href="https://www.lagou.com/gongsi/70-0-0-0#order" data-lg-tj-id="7J00" data-lg-tj-no="
                                                            0024
                                                    " data-lg-tj-cid="idnull">长春</a></li>
              <li><a href="https://www.lagou.com/gongsi/19-0-0-0#order" data-lg-tj-id="7J00" data-lg-tj-no="
                                                            0025
                                                    " data-lg-tj-cid="idnull">太原</a></li>
              <li><a href="https://www.lagou.com/gongsi/101-0-0-0#order" data-lg-tj-id="7J00" data-lg-tj-no="
                                                            0026
                                                    " data-lg-tj-cid="idnull">嘉兴</a></li>
              <li><a href="https://www.lagou.com/gongsi/156-0-0-0#order" data-lg-tj-id="7J00" data-lg-tj-no="
                                                            0027
                                                    " data-lg-tj-cid="idnull">泰安</a></li>
              <li><a href="https://www.lagou.com/gongsi/81-0-0-0#order" data-lg-tj-id="7J00" data-lg-tj-no="
                                                            0028
                                                    " data-lg-tj-cid="idnull">昆山</a></li>
              <li><a href="https://www.lagou.com/gongsi/153-0-0-0#order" data-lg-tj-id="7J00" data-lg-tj-no="
                                                            0029
                                                    " data-lg-tj-cid="idnull">烟台</a></li>
              <li><a href="https://www.lagou.com/gongsi/315-0-0-0#order" data-lg-tj-id="7J00" data-lg-tj-no="
                                                            0030
                                                    " data-lg-tj-cid="idnull">兰州</a></li>
              <li><a href="https://www.lagou.com/gongsi/132-0-0-0#order" data-lg-tj-id="7J00" data-lg-tj-no="
                                                            0031
                                                    " data-lg-tj-cid="idnull">泉州</a></li>
            </ul>
          </div>
        </div>
        <div class="item companySize selectUI">
          <div class="selectUI-text value text"><span>公司规模不限</span><i></i>
            <span class="active_bg"></span>
            <ul class="developCol">
              <li><a href="https://www.lagou.com/gongsi/0-0-0-0#order" class="active" data-lg-tj-id="1jfm" data-lg-tj-no="
                                                            0001
                                                    " data-lg-tj-cid="idnull">不限</a></li>
              <li><a href="https://www.lagou.com/gongsi/0-0-0-1#order" data-lg-tj-id="1jfm" data-lg-tj-no="
                                                            0002
                                                    " data-lg-tj-cid="idnull">少于15人</a></li>
              <li><a href="https://www.lagou.com/gongsi/0-0-0-2#order" data-lg-tj-id="1jfm" data-lg-tj-no="
                                                            0003
                                                    " data-lg-tj-cid="idnull">15-50人</a></li>
              <li><a href="https://www.lagou.com/gongsi/0-0-0-3#order" data-lg-tj-id="1jfm" data-lg-tj-no="
                                                            0004
                                                    " data-lg-tj-cid="idnull">50-150人</a></li>
              <li><a href="https://www.lagou.com/gongsi/0-0-0-4#order" data-lg-tj-id="1jfm" data-lg-tj-no="
                                                            0005
                                                    " data-lg-tj-cid="idnull">150-500人</a></li>
              <li><a href="https://www.lagou.com/gongsi/0-0-0-5#order" data-lg-tj-id="1jfm" data-lg-tj-no="
                                                            0006
                                                    " data-lg-tj-cid="idnull">500-2000人</a></li>
              <li><a href="https://www.lagou.com/gongsi/0-0-0-6#order" data-lg-tj-id="1jfm" data-lg-tj-no="
                                                            0007
                                                    " data-lg-tj-cid="idnull">2000人以上</a></li>
            </ul>
          </div>
        </div>
        <div class="item industrySpace selectUI">
          <div class="selectUI-text value text"><span>行业领域不限</span><i></i>
            <span class="active_bg"></span>
            <ul class="industrySpace">
              <li><a href="https://www.lagou.com/gongsi/0-0-0-0#order" class="active" data-lg-tj-id="7L00" data-lg-tj-no="
                                                            0001
                                                    " data-lg-tj-cid="idnull">不限</a></li>
              <li><a href="https://www.lagou.com/gongsi/0-0-24-0#order" data-lg-tj-id="7L00" data-lg-tj-no="
                                                            0002
                                                    " data-lg-tj-cid="idnull">移动互联网</a></li>
              <li><a href="https://www.lagou.com/gongsi/0-0-25-0#order" data-lg-tj-id="7L00" data-lg-tj-no="
                                                            0003
                                                    " data-lg-tj-cid="idnull">电商</a></li>
              <li><a href="https://www.lagou.com/gongsi/0-0-26-0#order" data-lg-tj-id="7L00" data-lg-tj-no="
                                                            0004
                                                    " data-lg-tj-cid="idnull">金融</a></li>
              <li><a href="https://www.lagou.com/gongsi/0-0-27-0#order" data-lg-tj-id="7L00" data-lg-tj-no="
                                                            0005
                                                    " data-lg-tj-cid="idnull">企业服务</a></li>
              <li><a href="https://www.lagou.com/gongsi/0-0-28-0#order" data-lg-tj-id="7L00" data-lg-tj-no="
                                                            0006
                                                    " data-lg-tj-cid="idnull">教育</a></li>
              <li><a href="https://www.lagou.com/gongsi/0-0-29-0#order" data-lg-tj-id="7L00" data-lg-tj-no="
                                                            0007
                                                    " data-lg-tj-cid="idnull">文娱丨内容</a></li>
              <li><a href="https://www.lagou.com/gongsi/0-0-31-0#order" data-lg-tj-id="7L00" data-lg-tj-no="
                                                            0008
                                                    " data-lg-tj-cid="idnull">游戏</a></li>
              <li><a href="https://www.lagou.com/gongsi/0-0-32-0#order" data-lg-tj-id="7L00" data-lg-tj-no="
                                                            0009
                                                    " data-lg-tj-cid="idnull">消费生活</a></li>
              <li><a href="https://www.lagou.com/gongsi/0-0-33-0#order" data-lg-tj-id="7L00" data-lg-tj-no="
                                                            0010
                                                    " data-lg-tj-cid="idnull">硬件</a></li>
              <li><a href="https://www.lagou.com/gongsi/0-0-34-0#order" data-lg-tj-id="7M00" data-lg-tj-no="
                                                            0001
                                                    " data-lg-tj-cid="idnull">社交</a></li>
              <li><a href="https://www.lagou.com/gongsi/0-0-35-0#order" data-lg-tj-id="7M00" data-lg-tj-no="
                                                            0002
                                                    " data-lg-tj-cid="idnull">旅游</a></li>
              <li><a href="https://www.lagou.com/gongsi/0-0-38-0#order" data-lg-tj-id="7M00" data-lg-tj-no="
                                                            0003
                                                    " data-lg-tj-cid="idnull">体育</a></li>
              <li><a href="https://www.lagou.com/gongsi/0-0-41-0#order" data-lg-tj-id="7M00" data-lg-tj-no="
                                                            0004
                                                    " data-lg-tj-cid="idnull">工具</a></li>
              <li><a href="https://www.lagou.com/gongsi/0-0-43-0#order" data-lg-tj-id="7M00" data-lg-tj-no="
                                                            0005
                                                    " data-lg-tj-cid="idnull">汽车丨出行</a></li>
              <li><a href="https://www.lagou.com/gongsi/0-0-45-0#order" data-lg-tj-id="7M00" data-lg-tj-no="
                                                            0006
                                                    " data-lg-tj-cid="idnull">物流丨运输</a></li>
              <li><a href="https://www.lagou.com/gongsi/0-0-47-0#order" data-lg-tj-id="7M00" data-lg-tj-no="
                                                            0007
                                                    " data-lg-tj-cid="idnull">医疗丨健康</a></li>
              <li><a href="https://www.lagou.com/gongsi/0-0-48-0#order" data-lg-tj-id="7M00" data-lg-tj-no="
                                                            0008
                                                    " data-lg-tj-cid="idnull">广告营销</a></li>
              <li><a href="https://www.lagou.com/gongsi/0-0-49-0#order" data-lg-tj-id="7M00" data-lg-tj-no="
                                                            0009
                                                    " data-lg-tj-cid="idnull">数据服务</a></li>
              <li><a href="https://www.lagou.com/gongsi/0-0-15793-0#order" data-lg-tj-id="7M00" data-lg-tj-no="
                                                            0010
                                                    " data-lg-tj-cid="idnull">信息安全</a></li>
              <li><a href="https://www.lagou.com/gongsi/0-0-15794-0#order" data-lg-tj-id="7M00" data-lg-tj-no="
                                                            0011
                                                    " data-lg-tj-cid="idnull">人工智能</a></li>
              <li><a href="https://www.lagou.com/gongsi/0-0-15795-0#order" data-lg-tj-id="7M00" data-lg-tj-no="
                                                            0012
                                                    " data-lg-tj-cid="idnull">区块链</a></li>
              <li><a href="https://www.lagou.com/gongsi/0-0-15796-0#order" data-lg-tj-id="7M00" data-lg-tj-no="
                                                            0013
                                                    " data-lg-tj-cid="idnull">物联网</a></li>
              <li><a href="https://www.lagou.com/gongsi/0-0-15797-0#order" data-lg-tj-id="7M00" data-lg-tj-no="
                                                            0014
                                                    " data-lg-tj-cid="idnull">VR丨AR</a></li>
              <li><a href="https://www.lagou.com/gongsi/0-0-15798-0#order" data-lg-tj-id="7M00" data-lg-tj-no="
                                                            0015
                                                    " data-lg-tj-cid="idnull">软件开发</a></li>
              <li><a href="https://www.lagou.com/gongsi/0-0-15799-0#order" data-lg-tj-id="7M00" data-lg-tj-no="
                                                            0016
                                                    " data-lg-tj-cid="idnull">通讯电子</a></li>
              <li><a href="https://www.lagou.com/gongsi/0-0-15800-0#order" data-lg-tj-id="7M00" data-lg-tj-no="
                                                            0017
                                                    " data-lg-tj-cid="idnull">房产家居</a></li>
              <li><a href="https://www.lagou.com/gongsi/0-0-15801-0#order" data-lg-tj-id="7M00" data-lg-tj-no="
                                                            0018
                                                    " data-lg-tj-cid="idnull">其他</a></li>
            </ul>
          </div>
        </div>
        <div class="item sortbar selectUI">
          <div class="selectUI-text value text"><span>默认排序</span><i></i>
            <span class="active_bg"></span>
            <ul class="sortCol">
              <li><a href="" data-lg-tj-id="7O00" data-lg-tj-no="0002" data-lg-tj-cid="idnull" data-index="1">职位数量</a></li>
            </ul>
          </div>
        </div>
      </li>
    </ul>

  </div>
</template>

<script>
export default {
  name: 'PositionHeader',
  data() {
    return {
      showMoreCity: false
    }
  },
  methods: {
    toShowMoreCity() {
      this.showMoreCity = true
      console.log("show")
    },
    toHideMoreCity() {
      this.showMoreCity = false
      console.log("hede")
    }
  }
}
</script>

<style scoped src="./static/header.css"></style>
