<template>
  <div>
    <div class="bg">
      <div class="jump" @click="jump">
        <span class="number">{{ timeOut }}</span
        >跳过
      </div>
    </div>
    <div class="footer">
      <div class="text">故宫文创</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "flash",
  data() {
    return {
      timeOut: 3,
      inter: "",
    };
  },
  methods: {
    jump() {
      clearInterval(this.inter);
      this.$router.push({
        path: "/login",
      });
    },
  },
  created() {
    this.inter = setInterval(() => {
      this.timeOut -= 1;
      if (this.timeOut == -1) {
        clearInterval(this.inter);
        this.$router.push({
          path: "/login",
        });
      }
    }, 1000);
  },
};
</script>
<style scoped>
.bg {
  position: relative;
  width: 3.75rem;
  height: 6.67rem;
  background: url(../../assets/flashBg.png) no-repeat center center;
  background-size: cover;
}
.number {
  margin-right: 0.05rem;
}
.jump {
  position: absolute;
  width: 0.51rem;
  height: 0.23rem;
  border-radius: 12px;
  background: #333333;
  opacity: 0.5;
  font-size: 0.12rem;
  text-align: center;
  color: #fff;
  top: 0.56rem;
  right: 0.24rem;
}
.footer {
  position: relative;
  height: 1.01rem;
  background: url(../../assets/startLogo.png) no-repeat center 0.12rem;
}
.text {
  position: absolute;
  font-size: 0.12rem;
  left: 1.64rem;
  bottom: 0.15rem;
  color: #333333;
  opacity: 1;
  font-weight: 400;
  line-height: 16px;
}
</style>