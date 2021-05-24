<template>
  <svg ref="cursur" x="0px" y="0px" viewBox="0 0 28 28">
    <polygon
      fill="black"
      points="8.2,20.9 8.2,4.9 19.8,16.5 13,16.5 12.6,16.6 "
    />
    <polygon fill="black" points="17.3,21.6 13.7,23.1 9,12 12.7,10.5 " />
    <rect
      x="12.5"
      y="13.6"
      transform="matrix(0.9221 -0.3871 0.3871 0.9221 -5.7605 6.5909)"
      width="2"
      height="8"
    ></rect>
    <polygon points="9.2,7.3 9.2,18.5 12.2,15.6 12.6,15.5 17.4,15.5 " />
  </svg>
</template>

<script>
export default {
  name: "MyCursor",

  methods: {
    moveCursur(event) {
      var win = window;
      var doc = document;
      var docElem = doc.documentElement;
      var body = doc.getElementsByTagName("body")[0];
      var x = win.innerWidth || docElem.clientWidth || body.clientWidth;

      if (x - 15 < event.pageX) {
        return (this.$refs.cursur.style.display = "none");
      }

      this.$refs.cursur.style.display = "block";
      this.$refs.cursur.style.top = event.pageY - 10 + "px";
      this.$refs.cursur.style.left = event.pageX - 11 + "px";
    },
    removeCursur() {
      this.$refs.cursur.style.display = "none";
    },
    myFunction() {
      console.log(123);
    },
  },
};
</script>
<style scoped>
svg {
  pointer-events: none;
  position: absolute;
  width: 30px;
  height: 30px;
  fill: red;
  animation-name: cursur_color;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  display: none;
  z-index: 1000;
}
@keyframes cursur_color {
  0% {
    fill: green;
  }
  50% {
    fill: red;
  }
  100% {
    fill: green;
  }
}
</style>
