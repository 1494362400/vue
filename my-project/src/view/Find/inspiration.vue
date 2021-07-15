<template>
  <div id="inspir">
    <topNav :topData="topData" :mess="mess" />
    <div class="header">
      <div class="titleImg"></div>
      <div class="titleText">一日一灵感</div>
    </div>
    <div class="headerBox">
      <div class="headerContent">
        <img src="../../assets/inspirationImg.png" alt="" class="img" />
        <div class="contentText">
          <span class="imgName">乾隆款珐琅彩花卉山石纹诗句瓶</span>
          <p class="imgTime">年代：清</p>
          <p class="imgText">
            腹部彩料绘主题纹饰，山石两侧，兰花月季枝叶茂盛，花开正好。空白处墨书题“夕吹撩寒馥，晨曦透暖光”诗句，源自古诗《腊梅》，诗句旁红彩绘“郁心、寿、奇”印记。......
          </p>
          <input type="button" value="立即了解" class="btnInto" />
        </div>
      </div>
    </div>

    <div class="selectMore">
      <div class="selectTitle">
        <div class="titleImg"></div>
        <div class="titleText">精选文章</div>
      </div>
      <div class="selectContent">
        <ul>
          <li v-for="(item, idx) in selectData" :key="idx">
            <div class="liContent">
              <p class="liTitle">{{ item.title }}</p>
              <p class="liText">{{ item.content }}</p>
              <div class="liFooter">
                <div class="commentImg"></div>
                <span class="count">{{ item.readCount }}</span>
                <span class="author">{{ item.author }}</span>
                <div class="titleType">{{ item.titleType }}</div>
              </div>
            </div>
            <img src="../../assets/selectMoreImg.png" alt="" class="liImg" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import topNav from "../../components/topNav.vue";
export default {
  name: "inspiration",
  data() {
    return {
      mess:'发现故宫',
      topData: [
        {
          path: "communicate",
          name: "交流圈",
        },
        {
          path: "inspiration",
          name: "灵感",
        },
        {
          path: "joint",
          name: "联名",
        },
        {
          path: "designer",
          name: "设计师",
        },
      ],
      selectData: [
        {
          title: "宋代的美好都在汴京城里了",
          content:
            "《长安十二时辰》的热播，让大家感受到了长安古城的雄伟辉煌，在中国古代历史上，有两座影响深远的文化高峰：唐代和宋代......",
          readCount: "7212",
          author: "创事记",
          titleType: "专题",
          img: require("../../assets/selectMoreImg.png"),
        },
        {
          title: "宋代的美好都在汴京城里了",
          content:
            "《长安十二时辰》的热播，让大家感受到了长安古城的雄伟辉煌，在中国古代历史上，有两座影响深远的文化高峰：唐代和宋代......",
          readCount: "7212",
          author: "创事记",
          titleType: "专题",
          img: require("../../assets/selectMoreImg.png"),
        },
        {
          title: "宋代的美好都在汴京城里了",
          content:
            "《长安十二时辰》的热播，让大家感受到了长安古城的雄伟辉煌，在中国古代历史上，有两座影响深远的文化高峰：唐代和宋代......",
          readCount: "7212",
          author: "创事记",
          titleType: "专题",
          img: require("../../assets/selectMoreImg.png"),
        },
      ],
    };
  },
  components: {
    topNav,
  },
};
</script>
<style scoped>
#inspir {
  padding-top: 0.01rem;
}
.header {
  display: flex;
  height: 0.4rem;
  background: #faf8f8;
  margin-top: 1.36rem;
}
.header .titleImg {
  width: 0.08rem;
  height: 0.24rem;
  background: url(../../assets/inspirationBg.png) no-repeat;
  background-size: cover;
  margin-top: 0.08rem;
  margin-left: 0.12rem;
  margin-right: 0.04rem;
}
.header .titleText {
  font-size: 0.14rem;
  line-height: 0.4rem;
}
.headerContent {
  display: flex;
  width: 3.51rem;
  height: 1.79rem;
  margin: 0 auto;
}
.headerBox {
  background: #faf8f8;
}
.headerContent .img {
  width: 1.1rem;
  margin-top: 0.14rem;
  margin-left: 0.29rem;
}
.headerContent .contentText {
  font-size: 0.1rem;
  margin-top: 0.14rem;
  margin-left: 0.2rem;
}
.headerContent .contentText .imgName {
  color: #b30f22;
}
.headerContent .contentText .imgTime {
  color: #666666;
  margin-top: 0.08rem;
  margin-bottom: 0.12rem;
}
.headerContent .contentText .imgText {
  color: #666666;
  margin-bottom: 0.12rem;
}
.headerContent .contentText .btnInto {
  width: 0.56rem;
  height: 0.18rem;
  background: #c30d23;
  color: #fffcfc;
  border: none;
  outline: none;
}

.selectMore {
  margin-top: 0.5rem;
}
.selectMore .selectTitle {
  display: flex;
  height: 0.4rem;
}
.selectMore .selectTitle .titleImg {
  width: 0.08rem;
  height: 0.24rem;
  background: url(../../assets/inspirationBg.png) no-repeat;
  background-size: cover;
  margin-top: 0.08rem;
  margin-left: 0.12rem;
  margin-right: 0.04rem;
}
.selectMore .selectTitle .titleText {
  font-size: 0.14rem;
  line-height: 0.4rem;
}

.selectContent ul li {
  display: flex;
  justify-content: space-around;
  margin-top: 0.12rem;
  background: #f9f6ef;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.08);
  height: 1.18rem;
}
.selectContent ul li .liContent {
  width: 1.96rem;
}
.selectContent ul li .liContent .liTitle {
  font-size: 0.12rem;
  color: #b30f22;
}
.selectContent ul li .liContent .liText {
  font-size: 0.1rem;
  color: #333333;
}
.selectContent ul li .liContent .liFooter {
  display: flex;
  color: #999999;
  margin-top: 0.15rem;
}
.selectContent ul li .liContent .liFooter .commentImg {
  background: url(../../assets/inspirComment.png) no-repeat;
  width: 0.12rem;
  height: 0.12rem;
}
.selectContent ul li .liContent .liFooter .count {
  font-size: 0.08rem;
  margin-left: 0.03rem;
}
.selectContent ul li .liContent .liFooter .author {
  font-size: 0.08rem;
  margin-left: 0.22rem;
}
.selectContent ul li .liContent .liFooter .titleType {
  font-size: 0.06rem;
  margin-left: 0.1rem;
  color: #c30d23;
  border: 1px solid #c30d23;
}
.selectContent ul li .liImg {
  width: 0.98rem;
  height: 0.98rem;
}
</style>