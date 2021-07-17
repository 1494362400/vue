<template>
  <div id="car">
    <div class="header">
      <p>购物车</p>
      <input type="button" value="编辑" class="editBtn" />
    </div>
    <div class="content">
      <ul class="carBox">
        <li v-for="(item, idx) in carData" :key="idx">
          <!-- <input type="checkbox" class="check" v-model="item.check" /> -->
          <span
            class="check"
            :class="{ checked: item.check }"
            @click="ev_check(idx)"
          ></span>
          <img :src="item.img" alt="" class="carImg" />
          <div class="carInfo">
            <p class="name">{{ item.name }}</p>
            <select
              v-for="(selectItem, selectidx) in item.options"
              :key="selectidx"
              class="selectCarBox"
              @click="openType(item)"
            >
              <option
                v-for="(optionItem, index) in selectItem.type"
                :key="index"
              >
                {{ optionItem }}
              </option>
            </select>
            <div class="carSpace"></div>
            <div class="infoBox">
              <p class="price">{{ item.price }}</p>
              <input
                type="button"
                class="minus"
                value="-"
                @click="minus(idx)"
              />
              <input type="number" class="count" v-model="item.count" />
              <input type="button" class="add" value="+" @click="add(idx)" />
            </div>
          </div>
        </li>
      </ul>
      <div class="settleBox">
        <span
          class="allcheck"
          @click="allCheck()"
          :class="{ checked: allCheckFlag }"
        ></span>
        <p class="allCheckText">全选</p>
        <p class="combine">合计：</p>
        <p class="allPrice">
          <span>￥</span><span class="priceCount">{{ combineMoney }}</span>
        </p>
        <input type="button" class="settleBtn" value="结算" @click="combine" />
      </div>
    </div>
    <carType ref="typeOpen" class="carType" @selectIndex="selectIndex"></carType>
  </div>
</template>
<script>
import carType from "../Car/carType.vue";
export default {
  name: "car",
  components: {
    carType,
  },
  data() {
    return {
      allCheckFlag: false,
      combineMoney: "",
      carData: [
        {
          img: require("../../assets/carImg.png"),
          name: "故宫口红•枫叶红",
          status: "全店销售排行榜一",
          options: [
            {
              name: "材质",
              type: ["925银镀24k金", "925银镀24k金", "925银镀24k金"],
            },
          ],
          sendTime: "现在下单预计8月1号送达",
          price: "¥ 199",
          count: 1,
          check: false,
        },
        {
          img: require("../../assets/carImg.png"),
          name: "故宫口红•枫叶红",
          options: [
            {
              name: "材质",
              type: ["925银镀24k金", "925银镀24k金", "925银镀24k金"],
            },
          ],
          sendTime: "现在下单预计8月1号送达",
          price: "¥ 199",
          count: 1,
          check: false,
        },
        {
          img: require("../../assets/carImg.png"),
          name: "故宫口红•枫叶红",
          options: [
            {
              name: "材质",
              type: ["925银镀24k金", "925银镀24k金", "925银镀24k金"],
            },
          ],
          sendTime: "现在下单预计8月1号送达",
          price: "¥ 199",
          count: 1,
          check: false,
        },
        {
          img: require("../../assets/carImg.png"),
          name: "故宫口红•枫叶红",
          options: [
            {
              name: "材质",
              type: ["925银镀24k金", "925银镀24k金", "925银镀24k金"],
            },
          ],
          sendTime: "现在下单预计8月1号送达",
          price: "¥ 199",
          count: 1,
          check: false,
        },
      ],
    };
  },
  watch: {
    carData: {
      handler(val) {
        console.log(val);
        var n = 0;
        this.combineMoney = 0;
        for (var i = 0; i < val.length; i++) {
          if (val[i].count <= 1 || isNaN(val[i].count)) {
            val[i].count = 1;
          }
          if (val[i].check == true) {
            n++;
            this.combineMoney +=
              val[i].count * parseInt(val[i].price.substring(1));
          }
        }
        if (n == val.length) {
          this.allCheckFlag = true;
        } else {
          this.allCheckFlag = false;
        }
      },
      deep: true,
    },
  },
  methods: {
    selectIndex(val){
      console.log(val)
    },
    openType(data) {
      console.log(data);
      this.$refs.typeOpen.openSelect(data);
    },
    minus(idx) {
      if (this.carData[idx].count > 1) {
        this.carData[idx].count -= 1;
      }
    },
    add(idx) {
      this.carData[idx].count += 1;
    },
    ev_check(idx) {
      this.carData[idx].check = !this.carData[idx].check;
    },
    allCheck() {
      this.carData.forEach((item) => {
        if (this.allCheckFlag == false) {
          item.check = true;
        } else {
          item.check = false;
        }
      });
    },
    combine() {
      this.$router.push({
        path: "/person/confirm",
        query: {
          bottomIndex: 4,
        },
      });
    },
  },
};
</script>
<style scoped>
.carType {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
}
#car {
  background: #faf8f8;
}
.header {
  height: 0.88rem;
  background: #c30d23;
  color: #fff;
  text-align: center;
  position: relative;
}
.header p {
  font-size: 0.2rem;
  position: absolute;
  bottom: 0.11rem;
  left: 1.58rem;
}
.header .editBtn {
  position: absolute;
  border: none;
  background: none;
  font-size: 0.12rem;
  color: #fffcfc;
  right: 0.12rem;
  bottom: 0.17rem;
}
.carBox {
  margin: 0 auto;
  width: 3.35rem;
}
.carBox li {
  background: #fff;
  display: flex;
  width: 3.35rem;
  height: 1.46rem;
  position: relative;
  margin-top: 0.08rem;
}
.carBox li .check {
  display: block;
  width: 0.14rem;
  height: 0.14rem;
  border-radius: 50%;
  background: #cccccc;
  margin-top: 0.64rem;
  margin-left: 0.08rem;
}
.carBox li .checked {
  background: red;
}
.carBox li .carImg {
  width: 1.14rem;
  height: 1.14rem;
  margin-top: 0.16rem;
  margin-left: 0.12rem;
}
.carBox li .carInfo {
  margin-top: 0.16rem;
  margin-left: 0.12rem;
}
.carBox li .carInfo .name {
  font-size: 0.14rem;
  color: #333333;
}
.carBox li .carInfo .selectCarBox {
  width: 1.05rem;
  height: 0.25rem;
  position: absolute;
  top: 0.43rem;
  right: 0.7rem;
  color: #999999;
  border: none;
  background: #fbfbfb;
}
.carBox li .carInfo .carSpace {
  height: 0.12rem;
}
.carBox li .carInfo .infoBox {
  display: flex;
  position: absolute;
  right: 0.12rem;
  bottom: 0.19rem;
  width: 1.67rem;
}
.carBox li .carInfo .infoBox .price {
  font-size: 0.14rem;
  color: #c30d23;
}
.carBox li .carInfo .infoBox .minus {
  width: 0.18rem;
  height: 0.18rem;
  background: #f7f7f7;
  margin-left: 0.61rem;
  border: none;
  font-size: 0.1rem;
}
.carBox li .carInfo .infoBox .add {
  width: 0.18rem;
  height: 0.18rem;
  background: #f7f7f7;
  margin-left: 0.04rem;
  border: none;
  font-size: 0.1rem;
}
.carBox li .carInfo .infoBox .count {
  width: 18px;
  height: 18px;
  background: #f7f7f7;
  font-size: 0.12rem;
  margin-left: 0.04rem;
  border: none;
  outline: none;
  text-align: center;
  color: #c30d23;
}
.settleBox {
  width: 3.75rem;
  height: 0.44rem;
  background: #fff;
  line-height: 0.44rem;
  display: flex;
  position: fixed;
  bottom: 0.83rem;
  justify-content: space-between;
}
.settleBox .allcheck {
  display: block;
  width: 0.14rem;
  height: 0.14rem;
  border-radius: 50%;
  background: #ccc;
  margin-top: 0.15rem;
  margin-left: 0.28rem;
}
.settleBox .checked {
  background: red;
}
.settleBox .allCheckText {
  font-size: 0.14rem;
}
.settleBox .combine {
  font-size: 0.14rem;
  color: #333333;
}
.settleBox .allPrice {
  color: #c30d23;
  font-size: 0.18rem;
}
.settleBox .settleBtn {
  font-size: 0.14rem;
  width: 0.94rem;
  height: 0.44rem;
  background: #c30d23;
  color: #fafafa;
  border: none;
  outline: none;
}
</style>