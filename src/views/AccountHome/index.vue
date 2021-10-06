<template>
  <div id="wrap" class=""><!---->
    <div id="main" class="inner">
      <div id="container" class="resume-container">
<!--        左侧菜单栏 -->
        <Catalogue></Catalogue>
<!--            中间的个人信息块 -->
        <div class="resume-content">
          <div class="resume-content-box">
            <div class="resume-box-header"><h2>我的在线简历</h2>
<!--              <a href="javascript:void(0)" class="link-preview">预览&amp;下载</a>-->
            </div>

            <div class="resume-box resume-center">
<!--               基本信息-->
              <div @click="showEditSelfInfo= true" v-show="!showEditSelfInfo" id="userinfo" class="resume-item resume-userinfo resume-baseInfo resume-undefined">
                <div data-v-7eae42f4="" class="item-primary baseinfo-container">
                  <div data-v-7eae42f4="" class="header-upload">
                    <div data-v-7eae42f4="" class="header-box">
                      <div data-v-7eae42f4="" class="header-mask"></div>
                      <img data-v-7eae42f4="" src="./static/avatar_15.png"
                           class="header-img"
                      ><!----></div>
                    <svg data-v-7eae42f4="" class="icon-svg">
                      <use data-v-7eae42f4="" xlink:href="javascript:void(0)"></use>
                    </svg>
                  </div>
                  <div data-v-7eae42f4=""  class="user-info"><p data-v-7eae42f4="" class="name">{{ seeker.name }}</p>
                    <div data-v-7eae42f4="" class="info-flex">
                      <div data-v-7eae42f4="" class="info-flex-item">
                        <div data-v-7eae42f4="" class="info-labels">
                          <p data-v-7eae42f4="">
                          <span data-v-7eae42f4="" class="prev-line"><i data-v-7eae42f4="" class="fz-resume fz-experience"></i>{{ seeker.userIdentity | userIdentityFilter }}<!----></span>
                          <span data-v-7eae42f4="" class="prev-line"><i data-v-7eae42f4="" class="fz-resume fz-degree"></i>本科</span>
                          <span data-v-7eae42f4="" class="prev-line"><i data-v-7eae42f4="" class="fz-resume fz-status"></i>{{ seeker.currentStatus | currentStatusFilter(seeker.userIdentity) }}</span>
                          </p>
<!--                          <p data-v-7eae42f4="">&lt;!&ndash;&ndash;&gt;<span data-v-7eae42f4="" class="prev-line"><i data-v-7eae42f4="" class="fz-resume fz-tel"></i>15909175805</span>&lt;!&ndash;&ndash;&gt;&lt;!&ndash;&ndash;&gt;</p>-->
                        </div>
                      </div>
                    </div>

                  </div>
                  <div data-v-7eae42f4="" class="resume-cropper-upload"><input type="file" accept="" class="upload-input">
                    <div class="custom-box">
                      <div></div>
                    </div>
                  </div>
                </div><!----></div>
<!--              填写基本信息 -->
              <div v-show="showEditSelfInfo" data-v-f83a8e3e="" class="item-form">
                <h3 data-v-f83a8e3e="" class="title">编辑个人信息</h3>
                <form data-v-f83a8e3e="" autocomplete="off" class="ui-form ui-form-label-top">
                  <div data-v-f83a8e3e="" class="form-item form-item-required">
                    <div class="item-label">姓名</div>
                    <div class="item-content">
                      <el-input style="width: 100%;" v-model="editSeeker.name" placeholder="请输入内容"></el-input>
                    </div>
                  </div>
                  <div data-v-f83a8e3e="" class="form-item">
                    <div class="item-label">我的身份</div>
                    <div class="item-content">
                      <div data-v-f83a8e3e="" class="ui-select ui-select-disabled ui-select-single" autocomplete="off">
                        <el-select v-model="editSeeker.userIdentity" placeholder="请选择">
                          <el-option
                            v-for="(item, i) in identityList"
                            :key="item.value"
                            :label="item"
                            :value="i">
                          </el-option>
                        </el-select>
                      </div>
                    </div>
                  </div>
                  <div data-v-f83a8e3e="" class="form-item">
                    <div class="item-label">生日</div>
                    <div class="item-content">
                      <div data-v-f83a8e3e="" class="datepicker-wrap" autocomplete="off">
                        <el-date-picker
                          style="width: 100%"
                          v-model="editSeeker.birthday"
                          type="date"
                          placeholder="选择日期">
                        </el-date-picker>
                      </div>
                    </div>
                  </div>
                  <div v-show="editSeeker.userIdentity !== 0" data-v-f83a8e3e="" class="form-item">
                    <div class="item-label">当前求职状态</div>
                    <div class="item-content">
                      <div data-v-f83a8e3e="" class="ui-select ui-select-single" autocomplete="off">
                        <el-select :disabled="editSeeker.userIdentity === 0" v-model="editSeeker.currentStatus" placeholder="请选择">
                          <el-option
                            v-for="(val, i) in currentStatusList"
                            :key="i"
                            :label="val"
                            :value="i">
                          </el-option>
                        </el-select>
                      </div>
                      <!---->
                    </div>
                  </div>
                  <div data-v-f83a8e3e="" class="form-btns form-btn-normal"><button @click.prevent="showEditSelfInfo = false" class="btn btn-outline">取消</button><button @click.prevent="putSeekerDetailInfo" type="submit" class="btn btn-primary">
                    <!---->完成
                  </button></div>
                </form>
              </div>


<!--              个人优势-->
              <div v-show="!showEditAdvantage" id="summary" class="resume-item resume-summary resume-userDesc resume-undefined">
                <div class="item-primary advantage-show"><h3 class="title"> 个人优势 <!----><a v-show="isEmpty(seeker.advantage)" @click="showEditAdvantage = true" data-v-6e23ab65="" href="javascript:void(0)" class="link-add"><span data-v-6e23ab65="">添加</span></a></h3>
                  <ul><!---->
                    <li v-show="notEmpty(seeker.advantage)"  class="">
                      <div class="primary-info">
                        <div  @click="showEditAdvantage = true" class="info-text advantage-text"> {{ seeker.advantage}}</div>
                      </div>
                      <div class="op"><!----></div>
                    </li>
                  </ul>
                </div><!----></div>
              <div v-show="showEditAdvantage" class="item-form">
                <h3 class="title"> 编辑个人优势 <div class="title-look-else-container">
                </div>
                </h3>
                <form autocomplete="off" class="ui-form ui-form-label-top">
                  <div class="form-item-full form-item-advantage form-item form-item-required">
                    <!---->
                    <div class="item-content">
                      <div class="input-wrap input-wrap-textarea">
                        <textarea v-model="advantage" wrap="soft" autocomplete="off" spellcheck="false"
                                  placeholder="例如：两年UI设计经验，熟悉IOS和Android的界面设计规范，对产品本色有独特见解，有一定的手绘基础" rows="2"
                                  class="input"></textarea>
                      </div>
                    </div>
                  </div>
                  <div class="form-btns">
                    <button type="button" @click="showEditAdvantage = false" class="btn btn-outline">取消</button>
                    <button type="submit" @click="putAdvantage" class="btn btn-primary">完成</button>
                    </div>
                </form>
              </div>


<!--              职位期望-->
              <div v-show="!showExpect" id="purpose" class="resume-item resume-purpose resume-expectList resume-undefined">
                <div data-v-787fd1ea="" class="item-primary"><h3 class="title"> 期望职位 <!----><a v-show="isEmpty(seeker.expectPosition)" data-v-6e23ab65="" @click="showExpect=!showExpect" href="javascript:void(0)" class="link-add"><span data-v-6e23ab65="">添加</span></a></h3>
                  <ul>
                    <li v-show="notEmpty(seeker.expectPosition)" @click="showExpect=!showExpect" data-v-787fd1ea=""  class="">
                      <div class="primary-info">
                        <div data-v-787fd1ea="" class="info-labels expectation-list"><span data-v-787fd1ea="" class="split-line"
                        ><span data-v-787fd1ea="" class="label-text"><i data-v-787fd1ea="" class="fz-resume fz-job"></i> {{ seeker.expectPosition }} </span></span><span
                          data-v-787fd1ea="" class="split-line money-item"
                        ><i data-v-787fd1ea="" class="fz-resume fz-salary"></i> {{ seeker.minExpectSalary + "k" }} </span><span data-v-787fd1ea=""
                                                                                                class="split-line"
                        ><i data-v-787fd1ea="" class="fz-resume fz-place"></i> {{ seeker.expectCity }} </span></div>
                      </div>

<!--              暂时不支持删除 <div class="op"><a href="javascript:void(0)"  class="link-delete"><span>删除</span></a></div>-->
                    </li>
                  </ul>
                </div><!----></div>
              <div v-show="showExpect" data-v-4644c21f="" class="item-form expectation-form" >
                <h3 data-v-4644c21f="" class="title">编辑求职期望</h3>
                <form data-v-4644c21f="" autocomplete="off" class="ui-form ui-form-label-top">
                  <div data-v-4644c21f="" class="form-item form-item-required">
                    <div class="item-label">期望职位</div>
                    <div class="item-content">
                      <div data-v-4644c21f="">
                        <div data-v-4644c21f="" class="input-wrap input-wrap-text"><!----><!---->
                          <el-input v-model="editExpectWork.expectPosition" placeholder="选择期望职位"></el-input>
                          <!----><!----><!----><!----></div>
                      </div><!----></div>
                  </div>
                  <div data-v-4644c21f="" class="resume-expectation-city-cascader form-item form-item-required">
                    <div class="item-label">工作城市</div>
                    <div class="item-content">
                      <div data-v-d20b7f32="" data-v-4644c21f="" class="city-cascader">
                        <div data-v-d20b7f32="" class="ui-cascader">
                          <div class="ui-cascader-selection">
                            <div data-v-d20b7f32="" class="city-input input-wrap input-wrap-text"><!----><!---->
                              <el-input v-model="editExpectWork.expectCity" placeholder="请输入内容"></el-input>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div data-v-4644c21f="" class="form-item">
                    <div class="item-label">期望薪资(单位为: K)</div>
                    <div class="item-content">
                      <div data-v-4644c21f="">
                        <div data-v-4644c21f="" class="input-wrap input-wrap-text"><!----><!---->
                          <el-input v-model="editExpectWork.minExpectSalary" placeholder="期望最低薪资"></el-input>
                        </div>
                      </div><!----></div>
                  </div>
                  <div data-v-4644c21f="" class="form-item">
                    <div class="item-label"></div>
                    <div class="item-content">
                      <div data-v-4644c21f="">
                        <div data-v-4644c21f="" class="form-btns" style="padding: 0px 50px"><!----><!---->
                          <button @click="showExpect=!showExpect" data-v-4644c21f="" type="button" class="btn btn-outline">取消</button>
                          <button @click="putExpect" data-v-4644c21f="" type="submit" class="btn btn-primary">完成</button>
                        </div>
                      </div><!----></div>
                  </div>
                </form>
              </div>


              <!-- 工作经历-->
              <div id="history" class="resume-item resume-history resume-workExpList resume-undefined">
                <div v-show="!showEditException" class="item-primary"><h3 class="title"> 工作经历 <a href="javascript:void(0)" @click="showEditException=!showEditException" class="link-add"><span>添加</span></a></h3>
                  <ul>
                    <li v-show="!showEditException" v-for="(item, i) in experiences" :key="i">{{item.companyName + "   |   " + item.position + "   |  就职时间: " + formatYearBetween(item.startTime, item.endTime)}}</li>
                  </ul>
                </div>
                <div v-show="showEditException" data-v-48ee9aa7="" class="item-form expectation-form work-experience-container" >
                  <h3 data-v-48ee9aa7="" class="title">添加工作经历</h3>
                  <form data-v-48ee9aa7="" autocomplete="off" class="ui-form ui-form-label-top">
                    <div data-v-48ee9aa7="" class="form-item form-item-required">
                      <div class="item-label">公司名称</div>
                      <div class="item-content">
                        <div data-v-48ee9aa7="" class="ui-suggest ui-select ui-dropmenu" placeholder="例如： 北京华品博睿网络技术有限公司" autocomplete="off">
                          <div class="ui-dropmenu-label">
                            <div class="ui-suggest-input input-wrap input-wrap-text">
                              <el-input v-model="workExperience.companyName" placeholder="例如： 北京华品博睿网络技术有限公司"></el-input>
                            </div>
                          </div>
                          <div class="ui-dropmenu-list"></div>
                        </div>
                      </div>
                    </div>
                    <div data-v-48ee9aa7="" class="form-item">
                      <div class="item-label">职位名称</div>
                      <div class="item-content">
                        <div data-v-48ee9aa7="" class="input-wrap input-wrap-text" >
                          <el-input v-model="workExperience.position" placeholder="例如：UI设计师"></el-input>
                        </div>
                      </div>
                    </div>
                    <div data-v-48ee9aa7="" class="form-item-full form-item form-item-required">
                      <div class="item-label">在职时间</div>
                      <div class="item-content">
                        <div data-v-48ee9aa7="" class="date-scope">
                          <div data-v-48ee9aa7="" class="datepicker-wrap" autocomplete="off">
                            <div class="input-wrap">
                              <el-date-picker style="width: 100%"
                                v-model="workExperience.startTime"
                                type="date"
                                placeholder="选择在职时间">
                              </el-date-picker>
                            </div>
                          </div><span data-v-48ee9aa7="" class="date-scope-text">至</span>
                          <div data-v-48ee9aa7="" class="datepicker-wrap" autocomplete="off">
                            <div class="input-wrap" show-totoday="true">
                              <el-date-picker style="width: 100%"
                                v-model="workExperience.endTime"
                                type="date"
                                placeholder="选择在职时间">
                              </el-date-picker>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div data-v-48ee9aa7="" class="form-item-full form-item-work-content form-item form-item-required">
                      <div class="item-label">工作内容</div>
                      <div class="item-content">
                        <div data-v-48ee9aa7="" class="form-work-content-lookelse">
                          <div data-v-74a7886f="" data-v-48ee9aa7="" class="look-else">
                          </div>
                        </div>
                        <div data-v-48ee9aa7="" class="form-work-content-results">
                          <div data-v-48ee9aa7="" class="results-tooltip">
                            <p data-v-48ee9aa7="">添加工作业绩</p>
                          </div>
                        </div>
                        <div data-v-48ee9aa7="" class="serial-selecter form-work-content" autocomplete="off">
                          <div class="ipt-wrap">
                            <div class="input-wrap input-wrap-textarea">
                              <textarea wrap="soft" autocomplete="on" spellcheck="false" rows="8" class="input"></textarea>
                            </div>
                          </div>
                        </div>
                        <div data-v-48ee9aa7="" class="count-work-content"></div>
                      </div>
                    </div>
                    <!---->
                    <div data-v-48ee9aa7="" class="resume-operate-container">
                      <div data-v-48ee9aa7="" class="form-btns">
                        <button @click="showEditException=!showEditException" data-v-48ee9aa7="" type="button" class="btn btn-outline">取消</button>
                        <button @click="addExperience" data-v-48ee9aa7="" class="btn btn-primary">完成</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

<!--              暂留, 项目经历-->
              <div id="project" class="resume-item resume-project resume-projectExpList resume-undefined">
                <div class="item-primary"><h3 class="title"> 项目经历 <a href="javascript:void(0)" class="link-add"><span>添加</span></a></h3>
                  <ul></ul>
                </div>
              </div>

<!--              教育经历-->
              <div id="education" class="resume-item resume-education resume-educationExpList resume-undefined">
                <div v-show="!showEditEducation" class="item-primary"><h3 class="title"> 教育经历 <a @click="showEditEducation=!showEditEducation" href="javascript:void(0)" class="link-add"><span>添加</span></a></h3>
                  <ul>
                    <li v-for="(school, i) in schools" :key="i" class="">
                      <div class="primary-info">
                        <div class="info-text"><h4 class="name">{{ school.schoolName }}</h4><span class="gray period">{{ formatYearBetween(school.startTime, school.endTime) }}</span></div>
                        <div class="info-text"><h4>
                          <span class="prev-line">{{ school.domain }}</span><span class="prev-line">{{ school.education + 1 | minEducationFilter }}</span></h4>
                        </div>
                      </div>
                      <div @click="dropSchool(school.id)" class="op"><a href="javascript:void(0)"  class="link-delete"><span>删除</span></a></div>
                    </li>
                  </ul>
<!-- 编辑 / 添加教学经历 -->
                </div><!---->
                <div v-show="showEditEducation"  class="item-form">
                  <h3 class="title">添加教育经历</h3>
                  <form autocomplete="off" class="ui-form ui-form-label-top">
                    <div class="form-item form-item-required">
                      <div class="item-label">学校名称</div>
                      <div class="item-content">
                        <el-input v-model="editSchool.schoolName" placeholder="例如：北京大学"></el-input>
                      </div>
                    </div>
                    <div class="form-item form-item-required">
                      <div class="item-label">学历</div>
                      <div class="item-content">
                        <div class="ui-select ui-select-single" autocomplete="off">
                          <el-select v-model="editSchool.education" placeholder="请选择">
                            <el-option
                              v-for="(item, i) in educationList"
                              :key="i"
                              :label="item"
                              :value="i">
                            </el-option>
                          </el-select>
                        </div>
                      </div>
                    </div>
                    <div class="form-item">
                      <div class="item-label">专业</div>
                      <div class="item-content">
                        <el-input v-model="editSchool.domain" placeholder="例如：计算机科学与技术"></el-input>
                      </div>
                    </div>
                    <div class="form-item-full form-item">
                      <div class="item-label">时间段</div>
                      <div class="item-content">
                        <div class="scope-selecter" autocomplete="off">
                          <div class="scope-select ui-select ui-select-single">
                            <el-date-picker
                              v-model="editSchool.startTime"
                              type="date"
                              placeholder="选择开始日期">
                            </el-date-picker>
                          </div>
                          <span class="scope-separator">至</span>
                          <div class="scope-select ui-select ui-select-disabled ui-select-single">
                              <el-date-picker
                                v-model="editSchool.endTime"
                                type="date"
                                placeholder="选择毕业日期">
                              </el-date-picker>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="form-item-full form-item-eduDescription form-item">
                      <div class="item-label">在校经历（选填）</div>
                      <div class="item-content">
                        <div class="form-eduDescription-lookelse">
                          <div data-v-74a7886f="" class="look-else"></div>
                        </div>
                        <div class="serial-selecter" autocomplete="off">
                          <div class="ipt-wrap">
                            <div class="input-wrap input-wrap-textarea">
              <textarea v-model="editSchool.description" wrap="soft" autocomplete="on" spellcheck="false"
                        placeholder="1、在校担任职务…
2、获得荣誉…
3、所学主要课程…" rows="8" class="input">
              </textarea>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="form-btns">
                      <button @click="showEditEducation=!showEditEducation" type="button" class="btn btn-outline">取消</button>
                      <button @click="addSchool" type="submit" class="btn btn-primary">完成</button></div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <sider></sider>
      </div><!----><!----><!----><!----></div>
  </div>
</template>

<script>
import Catalogue from '@/views/AccountHome/Catalogue'
import Sider from '@/views/AccountHome/Sider'
import DataMixin from '@/views/AccountHome/DataMixin'

export default {
  name: 'index',
  components: {
    Catalogue, Sider
  },
  data() {
    return {
      seeker: {},
      schools: [],
      experiences: [],
      showEditSelfInfo: false,
      showEditAdvantage: false,
      showEditException: false,
      showEditEducation: false,
      showExpect: false,
      editSeeker: {
        name: "",
        userIdentity: 0,
        currentStatus: 0,
        birthday: ""
      },
      identityList: ['应届生', '职场人士'],
      currentStatusList: ['离职找工作', '在职找工作', '在职看机会', '暂时不找工作'],
      educationList: ['初中及以下', '中专/中技', '高中', '大专', '本科', '硕士', '博士'],
      advantage: "",
      editExpectWork: {
        expectPosition: "",
        expectCity: "",
        minExpectSalary:""
      },
      workExperience: {
        companyName: "",
        position: "",
        startTime: "",
        endTime: "",
        description: ""
      },
      editSchool: {
        schoolName: "",
        domain: "",
        education: 0,
        startTime: "",
        endTime: "",
        description: ""
      }
    }
  },
  created() {
    this.fetch()
  },
  mixins: [DataMixin]
}
</script>

<style scoped src="./static/main.css"></style>
<style scoped>
.resume-item .title{
  padding: 0;
}

.item-form{
  display: block;
}
.el-select{
  width: 100%;
}
.el-select-dropdown__item{
  padding: 0 20px;
}
.resume-item .title{
  border: 0px;
}

.el-date-editor.el-input[data-v-6e23ab65], .el-date-editor.el-input__inner[data-v-6e23ab65]{
  width: 100%;
}

#wrap{
  margin-bottom: 100px;
}
</style>
