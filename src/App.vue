// :style="{ backgroundImage: 'url(' + getImgUrl('./aaa.png') + ')' }" //
:style="{ backgroundImage: 'url(' + image + ')' }"

<template>
  <div>
    <div
      v-if="load"
      :style="{ backgroundImage: 'url(' + image + ')' }"
      class="App"
      ref="App"
      v-on="{
        mousemove: divAppMouseMove,
        mouseout: divAppMouseOut,
        contextmenu: divAppContextMenu,
        click: divAppClick,
      }"
    >
      <NameAndProfession v-on:scrollToPage2="scrollToPage2" />
      <TechStack ref="refTechStack" />
      <Protfolio/>
      <RightMouseButtonMenu ref="menu" />
      <MyCursor ref="cursor" />
    </div>
    <img @load="a" :src="image" alt="" :style="{ display: 'none' }" />
  </div>
</template>

<script>
// const myBackgroundImage = require("./aaa.png")
import myBackgroundImage from "../public/bbbbbbbbbbbbb.png";
import TechStack from "./components/TechStack";
import NameAndProfession from "./components/NameAndProfession";
import MyCursor from "./components/MyCursor";
import RightMouseButtonMenu from "./components/RightMouseButtonMenu";
import Protfolio from "./components/Portfolio"
export default {
  name: "App",
  data() {
    return {
      load: false,
      image: null,
      scrollToPage2: () => {
        this.$refs.refTechStack.scrollToPage2();
      },
    };
  },
  methods: {
    a() {
      
        this.load = true;
        console.log(444);
     
    },
    divAppClick() {
      this.$refs.menu.divAppClick();
    },
    divAppMouseMove(event) {
      var win = window;
      var doc = document;
      var docElem = doc.documentElement;
      var body = doc.getElementsByTagName("body")[0];
      var x = win.innerWidth || docElem.clientWidth || body.clientWidth;
      if (x - 15 < event.pageX) {
        this.$refs.App.style.cursor = "grabbing";
      } else {
        this.$refs.App.style.cursor = "none";
      }
      this.$refs.cursor.moveCursur(event);
    },
    divAppMouseOut() {
      this.$refs.cursor.removeCursur();
    },
    divAppContextMenu(event) {
      this.$refs.menu.contextMenu(event);
    },
  },
  mounted() {
    this.image = myBackgroundImage;
  },
  components: {
    Protfolio,
    MyCursor,
    RightMouseButtonMenu,
    NameAndProfession,
    TechStack,
  },
};
</script>

<style>
@media only screen and (max-width: 600px) {
  html {
    font-size: 10px;
  }
}

@media only screen and (min-width: 600px) {
  html {
    font-size: 12px;
  }
}

@media only screen and (min-width: 768px) {
  html {
    font-size: 14px;
  }
}

@media only screen and (min-width: 992px) {
  html {
    font-size: 16px;
  }
}

@media only screen and (min-width: 1200px) {
  html {
    font-size: 18px;
  }
}
body {
  overflow: hidden;
  margin: 0px;
}
.App {
  height: 100vh;
  width: 100vw;
  text-align: center;
  overflow: scroll;
  cursor: none;
  overflow-x: hidden;
  /* background-image: url("../public/background.png"); */
  /* background-size: 100px; */
  background-repeat: repeat;
  -webkit-print-color-adjust: exact;
  scroll-behavior: smooth;
}
.App::-webkit-scrollbar {
  width: 1rem;
}

.App::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 5px;
}

.App::-webkit-scrollbar-thumb {
  background: url("../public/םתמחונת רקע חדשה.jpg") repeat center center;
  background-size: 5px;
  border-radius: 5px;
}
</style>

// document.body.style
