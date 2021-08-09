<template>
  <div id="special">
    <div class="hxjzg" v-for="(item,index) in element" :key="index" @transitionend="transitionend" :class="{transform:transform}" :style="{ 
      top: item.top, 
      left: item.left, 
      color: item.color 
    }">
      {{ item.hxjzg }}
    </div>
  </div>
</template>

<script>
export default {
  name: "special",
  methods: {
    clickFn(e) {
      this.transform = false;
      this.element.push({
        top: e.pageY + "px",
        left: e.pageX - 20 + "px",
        color: this.isColor[this.num],
        hxjzg: this.hxjzg[this.num],
      });
      this.num++;
      if (this.num >= 11) this.num = 0;
      setTimeout(() => {
        this.transform = true;
      }, 0);
    },
    transitionend() {
      this.element.shift();
    },
  },
  data() {
    return {
      element: [],
      transform: false,
      num: 0,
      isColor: [
        "red",
        "royalblue",
        "orange",
        "green",
        "blue",
        "orangered",
        "red",
        "red",
        "orange",
        "crimson",
        "brown",
        "mediumblue",
      ],
      hxjzg: [
        "♥富强♥",
        "♥民主♥",
        "♥文明♥",
        "♥和谐♥",
        "♥自由♥",
        "♥平等♥",
        "♥公正♥",
        "♥法治♥",
        "♥爱国♥",
        "♥敬业♥",
        "♥诚信♥",
        "♥友善♥",
      ],
    };
  },
  mounted() {
    document.documentElement.addEventListener("click", (e) => {
      this.clickFn(e);
    });
  },
};
</script>

<style scoped>
  #special {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: -100px;
    left: 0;
    z-index: 9999;
    background-color: aqua;
  }
  .hxjzg {
    position: absolute;
    z-index: 999;
    font-size: 12px;
    cursor: default;
    transition: all 0.5s;
    -moz-user-select: none; /*火狐*/
    -webkit-user-select: none; /*webkit浏览器*/
    -ms-user-select: none; /*IE10*/
    -khtml-user-select: none; /*早期浏览器*/
    user-select: none;
  }
  .transform {
    transform: translateY(-30px);
  }
</style>