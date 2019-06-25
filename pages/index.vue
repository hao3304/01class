<template>
  <div class="f-index">
    <FHeader @select="goAnchor"></FHeader>
    <el-carousel
      id="index"
      :interval="5000"
      :height="elHeight"
      style="overflow: hidden"
    >
      <el-carousel-item>
        <img class="cover" src="~@/assets/images/banner/1_1.png" alt="" />
        <img
          style="height: 100%;width: 100%"
          src="~@/assets/images/banner/1.png"
          alt=""
        />
      </el-carousel-item>
      <el-carousel-item>
        <img class="cover" src="~@/assets/images/banner/3_1.png" alt="" />
        <img
          style="height: 100%;width: 100%"
          src="~@/assets/images/banner/3.png"
          alt=""
        />
      </el-carousel-item>
    </el-carousel>
    <section class="hp-why-study">
      <div class="page-common-title">
        <em>Why learning programming</em>

        <h3>为什么学编程</h3>
      </div>
      <div class="study-advan-content">
        <ul class="advan-list clearfix">
          <li>
            <div>
              <img src="~/assets/images/2-021.png" class="ii" />

              <span class="advan-brief-box">
                <h5>提升逻辑思维</h5>

                <p>在思考分析问题和完成程序的过程中培养编程思维</p>
              </span>
            </div>
          </li>

          <li>
            <div>
              <img src="~/assets/images/59ecaa40b9f1b-021.png" class="ii" />

              <span class="advan-brief-box">
                <h5>培养耐心与专注力</h5>

                <p>
                  趣味化编程和严密的编程语言，是培养孩子细心和专注的最佳工具
                </p>
              </span>
            </div>
          </li>

          <li>
            <div>
              <img src="~/assets/images/6-021.png" class="ii" />

              <span class="advan-brief-box">
                <h5>增加升学竞争力</h5>

                <p>
                  编程逐渐纳入基础教育，学习编程知识，参加编程比赛，为留学升学加码
                </p>
              </span>
            </div>
          </li>

          <li>
            <div>
              <img src="~/assets/images/5-021.png" class="ii" />

              <span class="advan-brief-box">
                <h5>锻炼团队协作能力</h5>

                <p>在组队完成创作作品的过程中，提升孩子的团队协作能力</p>
              </span>
            </div>
          </li>

          <li>
            <div>
              <img src="~/assets/images/7-021.png" class="ii" />

              <span class="advan-brief-box">
                <h5>培养解决问题能力</h5>

                <p>让孩子在探索问题过程中，增强解决问题的能力</p>
              </span>
            </div>
          </li>

          <li>
            <div>
              <img src="~/assets/images/3-021.png" class="ii" />

              <span class="advan-brief-box">
                <h5>增强实力迎接AI时代</h5>

                <p>适应人工智能时代，编程能力是一项必不可少的技能</p>
              </span>
            </div>
          </li>
        </ul>
      </div>
    </section>

    <section id="about" class="hp-about-box">
      <div class="about-content clearfix">
        <div class="about-brief-box">
          <span class="en-title">About us</span>

          <h4>关于我们</h4>

          <p>
            上海交大零一编程训练营是华东地区最早专业从事青少年编程教育及信息学NOIP竞赛的专业教育机构，来自上海交通大学的核心教研团队用国际先进的教学思想，结合多年在上海、浙江等地的先进教学经验，创建了一套适合中国青少年学习编程的教育教学体系及教学工具。零一编程襄阳校区，以培养中小学生计算思维为教学理念，引进江浙沪先进的教学体系，为襄阳中小学生提供全面、有效的线上及线下Python、C++编程课程和NOIP大赛辅导。
          </p>
          <p style="margin-top: 10px">
            从小培养计算思维；人人都应该学习编程，因为它教人如何思考；书写计算思维，程序改变世界；孩子学编程，就来零一训练营；编程已成为孩子继阅读、写作、算数三项基本能力外，需要掌握的第四项必备技能；人工智能时代，给孩子一个机会改变世界；编程走进中国教育，给孩子一双翅膀领先起跑；把握学习黄金期给孩子一片土壤收获成长；培养逻辑思维，孩子们会学着用编程思维来思考，分解击破一个个复杂问题，提高解题效率。这将锻炼他们的逻辑与专注力；
          </p>
        </div>

        <div class="about-img">
          <ul class="about-data-list clearfix list-paddingleft-2">
            <li>
              <img src="~/assets/images/ab2.png" />
              <p>潜心研发的适龄课程体系</p>
            </li>

            <li>
              <img src="~/assets/images/ab1.png" />
              <p>职业化编程达人现场面授</p>
            </li>

            <li style="padding:40px 20px 42px 10px;">
              <img src="~/assets/images/ab3.png" />
              <p>高品质互动式小班式教学</p>
            </li>

            <li style="padding:40px 20px 42px 10px;">
              <img src="~/assets/images/ab4.jpg" />
              <p>寓教于乐堂堂都有成果物</p>
            </li>
          </ul>
        </div>
      </div>

      <!--      <div class="more-curse-btn">-->
      <!--        <a href="about.html" class="more-btn">了解更多</a>-->
      <!--      </div>-->

      <div class="am-slider am-slider-default hp-about-advan" id="hpAboutAdvan">
        <div
          class="am-viewport"
          style="overflow: hidden; position: relative;"
        ></div>
      </div>
    </section>

    <section id="case" class="hp-curse-box">
      <div class="page-common-title">
        <em>Course system</em>

        <h3>课程体系</h3>
      </div>

      <div class="curse-content tab-click">
        <div class="curse-type-box"></div>

        <div class="curse-details-content">
          <div
            class="curse-item-group tab-content"
            style="width:9%;overflow: hidden;float: left;"
          >
            <img src="~/assets/images/kecheng01.png" width="98%" />
          </div>

          <div
            style="float: left;width:10%;margin-top: 11.4%;margin-right: 2px;"
          >
            <button
              style="width: 100%;color: #fff;text-align: center;line-height: 50px;float:left;font-weight: bold;"
              data-text="阶段"
              class="button button--nina button--text-thick button--text-upper button--size-s color--one"
            >
              <span>阶</span><span>段</span>
            </button>

            <button
              style="width: 100%;color: #fff;text-align: center;line-height: 50px;margin:1px 0;float:right;font-weight: bold;"
              data-text="编程语言"
              class="button button--nina button--text-thick button--text-upper button--size-s color--one"
            >
              <span>编</span><span>程</span><span>语</span><span>言</span>
            </button>

            <button
              style="width: 100%;color: #fff;text-align: center;line-height: 45px;float:left;font-weight: bold;"
              data-text="年龄"
              class="button button--nina button--text-thick button--text-upper button--size-s color--one"
            >
              <span>年</span><span>龄</span>
            </button>

            <div style="clear:both"></div>
          </div>

          <div
            style="float: left;width:20%;margin-top: 9.35%;margin-right: 2px;"
          >
            <button
              data-text="Lv.1"
              class="button button--nina button--text-thick button--text-upper button--size-s color--two"
              style="width: 50%;color: #fff;text-align: center;line-height: 50px;float:left;margin-top: 10.4%;font-weight: bold;"
            >
              <span>L</span><span>v</span><span>.</span><span>1</span>
            </button>

            <button
              data-text="Lv.2"
              class="button button--nina button--text-thick button--text-upper button--size-s color--two"
              style="width:49.5%;color: #fff;text-align: center;line-height: 74px;float:right;font-weight: bold;"
            >
              <span>L</span><span>v</span><span>.</span><span>2</span>
            </button>

            <button
              data-text="Scratch"
              class="button button--nina button--text-thick button--text-upper button--size-s color--two"
              style="width: 100%;color: #fff;text-align: center;line-height: 50px;margin:1px 0;float:left;font-weight: bold;"
            >
              <span>S</span><span>c</span><span>r</span><span>a</span
              ><span>t</span><span>c</span><span>h</span>
            </button>

            <button
              data-text="学前班以上"
              class="button button--nina button--text-thick button--text-upper button--size-s color--two"
              style="width: 100%;color: #fff;text-align: center;line-height: 44px;margin:1px 0;float:left;font-weight: bold;"
            >
              <span>学</span><span>前</span><span>班</span><span>以</span
              ><span>上</span>
            </button>

            <div style="clear:both"></div>
          </div>

          <div
            style="float: left;width: 20%;margin-top: 5.6%;margin-right: 2px;"
          >
            <button
              data-text="Lv.3"
              class="button button--nina button--text-thick button--text-upper button--size-s color--three"
              style="width: 50%;color: #fff;text-align: center;line-height: 94px;float:left;margin-top: 10.2%;font-weight: bold;"
            >
              <span>L</span><span>v</span><span>.</span><span>3</span>
            </button>

            <button
              data-text="Lv.4"
              class="button button--nina button--text-thick button--text-upper button--size-s color--three"
              style="width:49.5%;color: #fff;text-align: center;line-height: 118px;float:right;font-weight: bold;"
            >
              <span>L</span><span>v</span><span>.</span><span>4</span>
            </button>

            <button
              data-text="Python"
              class="button button--nina button--text-thick button--text-upper button--size-s color--three"
              style="width: 100%;color: #fff;text-align: center;line-height: 50px;margin:1px 0;float:left;font-weight: bold;"
            >
              <span>P</span><span>y</span><span>t</span><span>h</span
              ><span>o</span><span>n</span>
            </button>

            <button
              data-text="小学3年级以上"
              class="button button--nina button--text-thick button--text-upper button--size-s color--three"
              style="width: 100%;color: #fff;text-align: center;line-height: 44px;margin:1px 0;float:left;font-weight: bold;"
            >
              <span>小</span><span>学</span><span>3</span><span>年</span
              ><span>级</span><span>以</span><span>上</span>
            </button>

            <div style="clear:both"></div>
          </div>

          <div style="float: left;width:20%;margin-top:1.9%;margin-right: 1px;">
            <button
              data-text="Lv.5"
              class="button button--nina button--text-thick button--text-upper button--size-s color--four"
              style="width: 50%;color: #fff;text-align: center;line-height: 138px;font-weight: bold;float:left;margin-top: 10%;"
            >
              <span>L</span><span>v</span><span>.</span><span>5</span>
            </button>

            <button
              data-text="Lv.6"
              class="button button--nina button--text-thick button--text-upper button--size-s color--four"
              style="width: 49.5%;color: #fff;text-align: center;line-height: 162px;font-weight: bold;float:right;"
            >
              <span>L</span><span>v</span><span>.</span><span>6</span>
            </button>

            <button
              data-text="C++"
              class="button button--nina button--text-thick button--text-upper button--size-s color--four"
              style="width: 100%;color: #fff;text-align: center;line-height: 50px;margin:1px 0;font-weight: bold;"
            >
              <span>C</span><span>+</span><span>+</span>
            </button>

            <button
              data-text="小学5年级以上"
              class="button button--nina button--text-thick button--text-upper button--size-s color--four"
              style="width: 100%;color: #fff;text-align: center;line-height: 44px;margin:1px 0;font-weight: bold;padding:0;"
            >
              <span>小</span><span>学</span><span>5</span><span>年</span
              ><span>级</span><span>以</span><span>上</span>
            </button>

            <div style="clear:both"></div>
          </div>

          <div
            style="float: left;width: 19%;margin-top:-0.1%;margin-right: 2px;"
          >
            <button
              data-text="升学加分"
              class="button button--nina button--text-thick button--text-upper button--size-s color--five"
              style="width: 100%;color: #fff;text-align: center;line-height: 185px;font-weight: bold;float:left;"
            >
              <span>升</span><span>学</span><span>加</span><span>分</span>
            </button>

            <button
              data-text="NOIP初赛"
              class="button button--nina button--text-thick button--text-upper button--size-s color--five"
              style="width: 50%;color: #fff;text-align: center;line-height: 50px;float:left;margin: 1px 0;font-weight: bold;padding:0;"
            >
              <span>N</span><span>O</span><span>I</span><span>P</span
              ><span>初</span><span>赛</span>
            </button>

            <button
              data-text="NOIP复赛"
              class="button button--nina button--text-thick button--text-upper button--size-s color--five"
              style="width:49.5%;color: #fff;text-align: center;line-height: 50px;float:right;margin: 1px 0;font-weight: bold;padding:0;"
            >
              <span>N</span><span>O</span><span>I</span><span>P</span
              ><span>复</span><span>赛</span>
            </button>

            <button
              data-text="小学4年级以上"
              class="button button--nina button--text-thick button--text-upper button--size-s color--five"
              style="width: 100%;color: #fff;text-align: center;line-height: 44px;margin:1px 0;font-weight: bold;float:left;"
            >
              <span>小</span><span>学</span><span>4</span><span>年</span
              ><span>级</span><span>以</span><span>上</span>
            </button>

            <div style="clear:both"></div>
          </div>

          <!--<div style="float: left;width: 15.4%;margin-top: 0%;margin-right: 2px;">

                  <button  data-text="技能提升" class="button button--nina button--text-thick button--text-upper button--size-s color--six" style="width: 100%;color: #fff;text-align: center;line-height: 184px;font-weight: bold;float:left;"><span>技</span><span>能</span><span>提</span><span>升</span></button>

                  <button  data-text="HTML" class="button button--nina button--text-thick button--text-upper button--size-s color--six" style="width: 50%;color: #fff;text-align: center;line-height: 50px;float:left;margin: 1px 0;font-weight: bold;padding:0;"><span>H</span><span>T</span><span>M</span><span>L</span></button>

                  <button  data-text="JavaScript" class="button button--nina button--text-thick button--text-upper button--size-s color--six" style="width:49.5%;color: #fff;text-align: center;line-height: 50px;float:right;margin:1px 0;font-weight: bold;padding:0;"><span>J</span><span>a</span><span>v</span><span>a</span><span>S</span><span>c</span><span>r</span><span>i</span><span>p</span><span>t</span></button>

                  <button  data-text="初、高中生" class="button button--nina button--text-thick button--text-upper button--size-s color--six" style="width: 100%;color: #fff;text-align: center;line-height: 44px;font-weight: bold;float:left;"><span>初</span><span>、</span><span>高</span><span>中</span><span>生</span></button>

                    <div style="clear:both"></div>

              </div>-->

          <div style="clear:both"></div>
        </div>
      </div>

      <!--      <div class="curse-more-link">-->
      <!--        <ul class="more-link-list clearfix">-->
      <!--          <li><a href="case.html">了解更多</a></li>-->

      <!--          <li>-->
      <!--            <a href="http://tb.53kf.com/code/client/10161795/1">免费试听</a>-->
      <!--          </li>-->
      <!--        </ul>-->
      <!--      </div>-->
    </section>

    <section class="hp-case-box">
      <div class="case-content">
        <div class="case-list clearfix" id="partner_list">
          <div>
            <a href="javascript:;">
              <div class="portr-img">
                <span class="jqthumb">
                  <img
                    src="~/assets/images/20170420084036157.jpg"
                    alt="Steve Jobs"
                  />
                </span>
              </div>
              <div class="case-brief">
                <h6 style="font-size: 21px;">Steve Jobs</h6>
                <p>Apple创始人</p>
                <p>13岁开始编程</p>
              </div>
            </a>
          </div>
          <div>
            <a href="javascript:;">
              <div class="portr-img">
                <span class="jqthumb">
                  <img
                    src="~/assets/images/20170420084323952.jpg"
                    alt="Marl Zuckerberg"
                  />
                </span>
              </div>
              <div class="case-brief">
                <h6 style="font-size: 21px;">Marl Zuckerberg</h6>
                <p>Facebook创始人</p>
                <p>10岁开始编程</p>
              </div>
            </a>
          </div>
          <div>
            <a href="javascript:;">
              <div class="portr-img">
                <span class="jqthumb">
                  <img
                    src="~/assets/images/20170420084423378.jpg"
                    alt="Sergey Brin"
                  />
                </span>
              </div>
              <div class="case-brief">
                <h6 style="font-size: 21px;">Sergey Brin</h6>
                <p>Google联合创始人</p>
                <p>8岁开始编程</p>
              </div>
            </a>
          </div>
          <div>
            <a href="javascript:;">
              <div class="portr-img">
                <span class="jqthumb">
                  <img
                    src="~/assets/images/20170420085924905.jpg"
                    alt="bill Gates "
                  />
                </span>
              </div>
              <div class="case-brief">
                <h6 style="font-size: 21px;">Bill Gates</h6>
                <p>微软创始人</p>
                <p>13岁开始编程</p>
              </div>
            </a>
          </div>
          <div>
            <a href="javascript:;">
              <div class="portr-img">
                <span class="jqthumb">
                  <img
                    src="~/assets/images/20170607114323785.jpg"
                    alt="Elon Musk"
                  />
                </span>
              </div>
              <div class="case-brief">
                <h6 style="font-size: 21px;">Elon Musk</h6>
                <p>Spacex创始人</p>
                <p>9岁开始编程</p>
              </div>
            </a>
          </div>
          <div>
            <a href="javascript:;">
              <div class="portr-img">
                <span class="jqthumb">
                  <img
                    src="~/assets/images/20170607114957292.jpeg"
                    alt="DemisHassabis"
                  />
                </span>
              </div>
              <div class="case-brief">
                <h6 style="font-size: 21px;">DemisHassabis</h6>
                <p>AlphaGo创始人</p>
                <p>8岁开始编程</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>

    <footer id="contact" class="footer-box clearfix">
      <div class="footer-about">
        <div class="about-content">
          <div class="footer-title">
            <h4>零一编程团队</h4>
          </div>
          <div class="about-brief">
            <div class="logo-box">
              <!--  <img src="./upload/153199058329290.png" alt="index.html"> -->
            </div>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;
              拥有多年青少年编程教育及NOIP大赛经验的瞿庆海硕士，是真正有实力的编程教育金牌教练。<br />
              &nbsp;&nbsp;&nbsp;&nbsp;零一编程联合创始人姚朝云，原亚信集团咨询总监，软通动力集团华中区项目经理，襄阳市计算机学会会员，精通大数据，云计算、算法模型。<br />
              &nbsp;&nbsp;&nbsp;&nbsp;零一编程联合创始人李伟，毕业于华中科技大学计算机学院，从事计算机程序开发与应用相关行业15年，重点研究计算机网络协议。<br />
            </p>
          </div>
        </div>
      </div>
      <div class="footer-content">
        <div class="footer-contact clearfix">
          <div class="footer-title">
            <em>Contact us</em>
            <h4>联系我们</h4>
          </div>
          <ul class="contact-mode clearfix">
            <li>地址：襄阳市樊城区长虹路蓝光大厦7楼</li>
            <li>咨询热线：00710-3568801 19108698801 19108696801</li>
            <!--            <li></li>-->
            <!--            <li></li>-->
          </ul>
        </div>
        <div class="footer-follow">
          <div class="footer-title">
            <em>WeChat official account </em>
            <h4>微信公众号</h4>
          </div>
          <div class="follow-rq-code">
            <img src="~@/assets/images/ercode.jpg" alt="" />
            <span style="font-size: 97%;padding-left: 10px;"
              >欢迎扫码预约试听课</span
            >
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
import FHeader from '../components/FHeader'
export default {
  components: { FHeader },
  data() {
    return {
      width: 0,
      height: 800
    }
  },
  computed: {
    elHeight() {
      const w = 1920
      const h = this.height - 90
      return h + 'px'
    }
  },
  methods: {
    render() {
      $('.case-list').slick({
        slidesToShow: 4,
        autoplay: false,
        autoplaySpeed: 3000,
        speed: 300,
        slidesToScroll: 1,
        draggable: false,
        slidePrev: '&#xe64e;',
        slideNext: '&#xe75b;',
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidePrev: '&#xe64e;',
              slideNext: '&#xe75b;',
              slidesToShow: 4
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidePrev: '&#xe64e;',
              slideNext: '&#xe75b;',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidePrev: '&#xe64e;',
              slideNext: '&#xe75b;',
              slidesToShow: 2
            }
          },
          {
            breakpoint: 568,
            settings: {
              slidePrev: '&#xe64e;',
              slideNext: '&#xe75b;',
              slidesToShow: 1
            }
          }
        ]
      })
    },
    goAnchor(selector) {
      // document.querySelector('body').scrollTop =
      //   $('#' + selector).offset().top + 'px'
      $('html,body').animate({
        scrollTop: $('#' + selector).offset().top - 50
      })
    }
  },
  mounted() {
    this.width = document.documentElement.clientWidth
    this.height = document.documentElement.clientHeight
    window.onresize = () => {
      this.width = document.documentElement.clientWidth
      this.height = document.documentElement.clientHeight
    }

    this.render()
  }
}
</script>

<style lang="less">
.f-index {
  height: 100%;
  overflow: visible;
  .cover {
    position: absolute;
    top: 0;
    z-index: 1000;
    width: 100%;
    height: 100%;
  }

  .curse-details-content {
    margin-top: 60px;
    max-width: 1170px;
    margin: 0 auto;
    margin-top: 60px;
  }
  .curse-details-content span {
    font-weight: bold;
  }
  .color--one {
    background-color: #7e7e7e;
  }
  .color--one:hover {
    background-color: #a2a1a1;
  }
  .color--two {
    background-color: #0478cf;
  }
  .color--two:hover {
    background-color: #0092ff;
  }
  .color--three {
    background-color: #06afed;
  }
  .color--three:hover {
    background-color: #6ad0f6;
  }
  .color--four {
    background-color: #fabf07;
  }
  .color--four:hover {
    background-color: #ffdb69;
  }
  .color--five {
    background-color: #3cd518;
  }
  .color--five:hover {
    background-color: #52ff29;
  }
  .color--six {
    background-color: #4c68d0;
  }
  .color--six:hover {
    background-color: #6283ff;
  }

  .am-slider .am-viewport .am-slides li img {
    width: 100%;
    max-width: auto !important;
  }

  .hp-why-study .advan-list01 {
    margin: -25px -25px;
  }

  .hp-why-study .advan-list01 li {
    float: left;
    width: 33.3333%;
    padding: 26px 21px;
  }

  .hp-why-study .advan-list01 li div {
    margin-top: 100px;
    display: block;
    width: 100%;
    height: 100%;
    position: relative;
    -webkit-transition: all 0.3s linear;
    -moz-transition: all 0.3s linear;
    -ms-transition: all 0.3s linear;
    -o-transition: all 0.3s linear;
    transition: all 0.3s linear;
  }

  .hp-why-study .advan-list01 svg {
    font-size: 80px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    -webkit-transition: all 0.3s linear;
    -moz-transition: all 0.3s linear;
    -ms-transition: all 0.3s linear;
    -o-transition: all 0.3s linear;
    transition: all 0.3s linear;
  }

  .hp-why-study .advan-list01 svg:hover {
    -webkit-box-shadow: -2px -2px 10px 1px rgba(0, 0, 0, 0.05),
      2px 2px 10px 1px rgba(0, 0, 0, 0.05);
    -moz-box-shadow: -2px -2px 10px 1px rgba(0, 0, 0, 0.05),
      2px 2px 10px 1px rgba(0, 0, 0, 0.05);
    box-shadow: -2px -2px 10px 1px rgba(0, 0, 0, 0.05),
      2px 2px 10px 1px rgba(0, 0, 0, 0.05);
    -webkit-transform: scale(1.1, 1.1);
    -moz-transform: scale(1.1, 1.1);
    -ms-transform: scale(1.1, 1.1);
    -o-transform: scale(1.1, 1.1);
    transform: scale(1.1, 1.1);
  }

  .hp-why-study .advan-list01 .advan-brief-box {
    display: block;
    height: 6.14285714em;
    margin-top: 20px;
    text-align: center;
  }

  .hp-why-study .advan-list01 .advan-brief-box h5 {
    font-size: 18px;
    font-weight: bold;
    line-height: 1;
    position: relative;
  }

  .hp-why-study .advan-list01 .advan-brief-box h5:after {
    content: '';
    display: block;
    width: 30px;
    border-top: 4px solid #ffc501;
    position: absolute;
    bottom: -15px;
    left: 50%;
    margin-left: -15px;
  }

  .hp-why-study .advan-list01 .advan-brief-box p {
    font-size: 14px;
    margin-top: 25px;
    color: #999;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }

  .hp-why-study .study-advan-content .ii {
    width: 130px;
  }

  .hp-why-study .study-advan-content .ii:hover {
    transform: scale(1.2);
    -ms-transform: scale(1.2);
    -webkit-transform: scale(1.2);
    -o-transform: scale(1.2);
    -moz-transform: scale(1.2);
    transition: all 0.7s;
  }

  .hp-about-box .about-content .about-brief-box {
    float: left;
    display: block;
    max-width: 60%;
    height: 360px;
    position: relative;
    margin-left: 35px;
  }

  .hp-about-box .about-content .about-img {
    float: right;
    max-height: 360px;
    display: block;
    width: 40%;
    position: relative;
    margin-right: -95px;
  }

  .hp-about-box .about-content .about-img .about-data-list li {
    width: 44.3333%;
    float: left;
    padding: 28px 20px 42px 10px;
  }

  .hp-about-box .more-curse-btn {
    max-width: 200px;
    padding-top: 55px;
    margin: 0 auto;
  }

  .hp-about-box .more-curse-btn a {
    display: block;
    width: 200px;
    height: 40px;
    color: #fff;
    line-height: 40px;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    border-radius: 20px;
    text-align: center;
    transition: all 0.3s linear;
    background: #ffc501;
    overflow: hidden;
  }

  .hp-about-box .more-curse-btn .more-btn a:hover {
    -webkit-box-shadow: 4px 4px 20px 1px rgba(250, 193, 1, 0.5),
      4px 4px 20px 1px rgba(250, 193, 1, 0.5);
    -moz-box-shadow: 4px 4px 20px 1px rgba(250, 193, 1, 0.5),
      4px 4px 20px 1px rgba(250, 193, 1, 0.5);
    box-shadow: 4px 4px 20px 1px rgba(250, 193, 1, 0.5),
      4px 4px 20px 1px rgba(250, 193, 1, 0.5);
    transform: translate(0, -10px);
  }

  .advan-list01 li {
    max-width: 90%;
  }
}
</style>
