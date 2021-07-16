<template>
  <div id="app">
    <div class="allBox">
      <ul class="all">
        <li class="Box" v-for="(item, idx) in allData" :key="idx">
          <div class="headerBox">
            <div class="head">
              <input
                type="checkbox"
                @click="allcheck(item)"
                v-model="item.allcheckflag"
              />
              {{ item.mess.length }}项
            </div>
          </div>

          <div class="content">
            <div class="searchBox">
              <input type="text" placeholder="输入搜索内容" />
            </div>
            <ul>
              <li v-for="(dataItem, index) in item.mess" :key="index">
                <input
                  type="checkbox"
                  @click="check(item, index)"
                  v-model="dataItem.check"
                />{{ dataItem.text }}
              </li>
            </ul>
          </div>
        </li>
      </ul>
      <div class="btnBox">
        <input type="button" value=">" @click="go(0)" />
        <input type="button" value="<" @click="go(1)" />
      </div>
    </div>
    <page :num="num" class="pageBox" ref="pageComponent">
      <div slot="jump">
        跳转至第
        <input type="text" v-model="jumpPage" />
        页
        <input type="button" value="跳转" @click="jump()" />
      </div>
    </page>
  </div>
</template>

<script>
import page from "../src/components/page.vue";
export default {
  name: "App",
  components: {
    page,
  },
  data() {
    return {
      num: 20,
      jumpPage: "",
      allData: [
        {
          allcheckflag: false,
          mess: [
            {
              id: 1,
              text: "content1",
              check: false,
            },
            {
              id: 2,
              text: "content2",
              check: false,
            },
            {
              id: 3,
              text: "content3",
              check: false,
            },
            {
              id: 4,
              text: "content4",
              check: false,
            },
            {
              id: 5,
              text: "content5",
              check: false,
            },
          ],
        },
        {
          allcheckflag: false,
          mess: [],
        },
      ],
    };
  },
  methods: {
    jump() {
      if (parseInt(this.jumpPage) && parseInt(this.jumpPage)<=this.num && parseInt(this.jumpPage)>0) {
        this.$refs.pageComponent.jump(this.jumpPage);
      }
    },
    check(item, index) {
      item.mess[index].check = !item.mess[index].check;
      var n = 0;
      item.mess.forEach((e) => {
        if (e.check == true) {
          n++;
        }
      });
      if (n != item.mess.length) {
        item.allcheckflag = false;
      } else {
        item.allcheckflag = true;
      }
    },
    allcheck(item) {
      item.allcheckflag = !item.allcheckflag;
      var all = true;
      item.mess.forEach((e) => {
        if (!e.check) {
          all = false;
        }
      });
      item.mess.forEach((e) => {
        if (all) {
          e.check = false;
        } else {
          e.check = true;
        }
      });
    },
    go(i) {
      var arr = [];
      this.allData[i].mess.forEach((item) => {
        if (item.check) {
          this.allData[i].allcheckflag = false;
          item.check = !item.check;
          this.allData[Math.abs(i - 1)].mess.push(item);
          arr.push(item);
        }
      });
      arr.forEach((item) => {
        var idx = this.allData[i].mess.indexOf(item);
        this.allData[i].mess.splice(idx, 1);
      });
    },
  },
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.btnBox {
  position: absolute;
  top: 200px;
  left: 300px;
}
.allBox {
  margin-bottom: 20px;
}
.pageBox {
  display: flex;
  li {
    width: 20px;
    height: 20px;
    border: 1px solid;
    text-align: center;
    margin-left: 5px;
  }
}
ul,
li {
  list-style: none;
  margin: 0;
  padding: 0;
}
.all {
  display: flex;
  .Box {
    border: 1px solid;
    width: 150px;
    margin-left: 100px;
    .headerBox {
      border-bottom: 1px solid;
      .head {
        width: 130px;
        margin: 0 auto;
        text-align: left;
        font-size: 12px;
      }
    }

    .content {
      width: 100%;
      .searchBox {
        margin: 0 auto;
        margin-top: 10px;
        input {
          width: 130px;
        }
      }
      ul {
        width: 130px;
        margin: 0 auto;
        height: 100px;
        overflow-y: scroll;
        margin-top: 10px;
        text-align: left;
      }
    }
  }
}
</style>
