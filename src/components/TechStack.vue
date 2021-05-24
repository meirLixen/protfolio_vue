<template>
  <div id="page2" class="page2">
    <h1>tech stack</h1>
    <div class="tech_stack">
      <div v-if="array[0]" class="technology vue">Vue.js</div>
      <div v-if="array[1]" class="technology react">React</div>
      <div v-if="array[2]" class="technology redux">Redux</div>
      <div v-if="array[3]" class="technology wordpress">WordPress</div>
      <div v-if="array[4]" class="technology bootstrap">Bootstrap</div>
      <div v-if="array[5]" class="technology tailwind">Tailwind</div>
      <div v-if="array[6]" class="technology html">HTML</div>
      <div v-if="array[7]" class="technology css">CSS</div>
      <div v-if="array[8]" class="technology javascript">JavaScript</div>
      <div v-if="array[9]" class="technology node">Node.js</div>
      <div v-if="array[10]" class="technology express">Express</div>
      <div v-if="array[11]" class="technology jwt">JWT</div>
      <div v-if="array[12]" class="technology postgresql">PostgreSQL</div>
      <div v-if="array[13]" class="technology mongodb">MongoDB</div>
      <div v-if="array[14]" class="technology git">Git</div>
      <div v-if="array[15]" class="technology php">PHP</div>
      <div v-if="array[16]" class="technology python">Python</div>
      <div v-if="array[17]" class="technology firebase">Firebase</div>
      <div v-if="array[18]" class="technology postman">Postman</div>
      <div v-if="array[19]" class="technology heroku">Heroku</div>
      <div v-if="array[20]" class="technology linux">Linux</div>
      <div v-if="array[21]" class="technology ffmpeg">
        FFmpeg
      </div>
    </div>
  </div>
</template>

<script>
let IntervalRunning = false;
export default {
  name: "TechStack",
  methods: {
    scrollToPage2: function() {
      this.array = [];
    },
    stringToArrayByInterval1() {
      var myInterval = setInterval(() => {
        this.array.push(true);
        if (this.array.length === 22) {
          clearInterval(myInterval);
          IntervalRunning = false;
        }
      }, 1000);
    },
  },
  mounted() {
    // console.log(document.body.scrollHeight);
    // console.log(document.documentElement.scrollHeight);

    const options = this.options || {
      root: null,
      rootMargin: "0px",
      threshold: 0.9,
    };
    this.observer = new IntersectionObserver((entry) => {
      if (entry && entry[0].isIntersecting && !IntervalRunning) {
        IntervalRunning = true;
        this.stringToArrayByInterval1();
      }
    }, options);
    this.observer.observe(this.$el);
  },
  watch: {
    array: function() {
      if (!IntervalRunning) {
        // console.log(IntervalRunning);
        this.stringToArrayByInterval1();
        IntervalRunning = true;
      }
    },
  },
  data() {
    return {
      array: [],
      observer: null,
    };
  },
};
</script>

<style scoped>
.page2 {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  box-sizing: border-box;
  border-top: 1px solid #ffffff6b;
}
h1 {
  font-size: 3.8rem;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  margin-top: 6rem;
  margin-bottom: 4rem;
  width: 24rem;
  text-align: center;
  padding-top: 0.8rem;
  padding-bottom: 0.8rem;
  padding-left: 0.8rem;
  padding-right: 0.8rem;
  margin-left: auto;
  margin-right: auto;
  background: #cbc2b5b5;
  color: black;
  border-radius: 15px;
  box-shadow: 0px 0px 3px 3px #cbc2b5b5;
  font-family: monospace;
}
.tech_stack {
  /* width: 568px; */
  margin-left: auto;
  margin-right: auto;
  position: relative;
  color: antiquewhite;
  top: 4rem;
}
.technology {
  border: 1.5px #ffffff solid;
  background-color: black;
  color: #e2be90;
  user-select: none;
  animation-name: technology;
  animation-duration: 2s;
  animation-iteration-count: 1;
  animation-timing-function: linear;
  position: absolute;
  width: 150px;
  height: fit-content;
  padding-top: 5px;
  padding-bottom: 5px;
  font-family: system-ui;
  font-size: 14px;
}
@media only screen and (max-width: 600px) {
  .tech_stack {
    transform: scale(0.5);
    left: -72px;
    width: 360px;
  }
}

@media only screen and (min-width: 600px) {
  .tech_stack {
    transform: scale(1);
    width: 570px;
  }
}

@media only screen and (min-width: 768px) {
  .tech_stack {
    transform: scale(1);
    width: 570px;

    /* left: calc(50vw - 18rem); */
  }
  h1 {
    margin-top: 5rem;
    margin-bottom: 3rem;
  }
  /* h1{
    margin-top: 3rem;
    margin-bottom: 0.5rem;
  } */
}

@media only screen and (min-width: 992px) {
  .tech_stack {
    transform: scale(1.2);
    width: 570px;
  }
  h1 {
    margin-top: 5rem;
    margin-bottom: 3rem;
  }
}

@media only screen and (min-width: 1200px) {
  .tech_stack {
    transform: scale(1.2);
    width: 570px;
  }
  h1 {
    margin-top: 4rem;
    margin-bottom: 2rem;
  }
}
@keyframes technology {
  0% {
    transform: rotate(180deg);
    opacity: 0;
    top: -200px;
  }
}

.vue {
  top: calc(178px + 147px);
}
.react {
  top: calc(152px + 147px);
  left: 100px;
  transform: rotate(23deg);
}
.redux {
  top: calc(178px + 147px);
  left: 400px;
}
.wordpress {
  top: calc(162px + 147px);
  left: 227px;
  transform: rotate(17deg);
}
.bootstrap {
  left: 310px;
  top: calc(138px + 147px);
  transform: rotate(6deg);
}
.tailwind {
  top: calc(109px + 147px);
  transform: rotate(-29deg);
}
.html {
  top: calc(117px + 147px);
  left: 400px;
  transform: rotate(22deg);
}
.css {
  left: 164px;
  top: calc(106px + 147px);
  transform: rotate(-6deg);
}
.javascript {
  left: 319px;
  top: calc(65px + 147px);
  transform: rotate(-29deg);
}
.node {
  left: 422px;
  top: calc(49px + 147px);
  transform: rotate(56deg);
}
.express {
  left: 114px;
  top: calc(54px + 147px);
  transform: rotate(13deg);
}
.jwt {
  left: 248px;
  top: calc(31px + 147px);
  transform: rotate(-3deg);
}
.postgresql {
  transform: rotate(-47deg);
  top: calc(51px + 147px);
  left: -7px;
}
.mongodb {
  top: calc(-20px + 147px);
  left: 318px;
  transform: rotate(-15deg);
}
.git {
  top: calc(6px + 147px);
  left: 147px;
  transform: rotate(-5deg);
}
.php {
  left: 205px;
  top: calc(-33px + 147px);
  transform: rotate(-7deg);
}
.python {
  left: 109px;
  top: calc(-48px + 147px);
  transform: rotate(-20deg);
}
.firebase {
  left: 301px;
  top: calc(-72px + 147px);
  transform: rotate(3deg);
}
.postman {
  top: calc(-105px + 147px);
  left: 191px;
  transform: rotate(-3deg);
}
.heroku {
  transform: rotate(-58deg);
  top: calc(-38px + 147px);
  left: 15px;
}
.linux {
  top: calc(-135px + 147px);
  left: 128px;
  transform: rotate(-14deg);
}
.ffmpeg {
  top: calc(-147px + 168px);
  left: 298px;
  transform: rotate(23deg);
}
</style>
// width: 553px; // height: 384px;
