<template>
  <div v-if="nameAndProfessionDisplayEnded" class="container">
    <svg>
      <circle class="stroke-red"  />
      <circle class="stroke-green"  />
    </svg>
    <!-- <div class="border"> -->
    <div class="scroll_to_page_2" v-on:click="scrollToPage2">
      Explore more
    </div>
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  methods: {
    scrollToPage2: function() {
      window.location.href = "#page2";
      this.$emit("scrollToPage2");
    },
  },

  name: "ScrollToPage2",
  props: ["nameAndProfessionDisplayEnded"],
};
</script>

<style scoped>
svg {
  animation-name: svg;
  animation-duration: 12s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  position: absolute;
  height: 18rem;
  width: 18rem;
}
@keyframes svg {
  from {
    transform: rotate(0deg);
  }
  to{transform: rotate(360deg);}
}
.stroke-red {
  r: 9rem;
  cx: 9rem;
  cy: 9rem;
  stroke: #de9804;
  fill: none;
  stroke-width: 16rem;
}

.stroke-green {
  stroke: white;
  r: 9rem;
  cx: 9rem;
  cy: 9rem;
  /* cx="125" cy="125" r="125" */
  fill: none;
  stroke-dasharray: 0.6rem, 0.6rem;
  stroke-width:16rem;
}
.container {
  /* top: 10rem; */
  width: 15.2rem;
  height: 4rem;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  animation-name: scroll_to_page_2_button;
  animation-duration: 1.5s;
  animation-iteration-count: 1;
}
.border {
  position: absolute;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 16rem;
  width: 16rem;
  background-image: linear-gradient(red, yellow);
  /* background: linear-gradient(45deg, rgb(0,143,104), rgb(250,224,66)) 1; */
  /* background-color: red; */
  /* border-image: linear-gradient(45deg, rgb(0,143,104), rgb(250,224,66)) 1; */
}
.scroll_to_page_2 {
  font-size: 1.8rem;
  font-family: cursive;
  letter-spacing: 2px;
  background: black;
  position: absolute;
  box-sizing: border-box;
  height: 3.7rem;
  width: 14.9rem;
  color: aliceblue;
  padding-top: 0.4rem;
  padding-bottom: 0.4rem;
  padding-left: 1rem;
  padding-right: 1rem;
  overflow: hidden;
  white-space: nowrap;
  user-select: none;
}
@keyframes scroll_to_page_2_button {
  from {
    opacity: 0;
    transform: scale(0);
  }
}
</style>
