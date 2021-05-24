<template>
  <div
    class="App"
    ref="App"
    v-on="{
      mousemove: divAppMouseMove,
      mouseout: divAppMouseOut,
      contextmenu: divAppContextMenu,
      click: divAppClick,
    }"
  >
    <!-- <div class="page1"> -->
    <NameAndProfession v-on:scrollToPage2="scrollToPage2" />
    <!-- </div> -->
    <!-- <div class="page2"> -->
    <TechStack ref="refTechStack" />
    <!-- </div> -->
    <RightMouseButtonMenu ref="menu" />
    <MyCursor ref="cursor" />
  </div>
</template>

<script>
import TechStack from "./components/TechStack";
import NameAndProfession from "./components/NameAndProfession";
import MyCursor from "./components/MyCursor";
import RightMouseButtonMenu from "./components/RightMouseButtonMenu";
export default {
  name: "App",
  data() {
    return {
      scrollToPage2: () => {
        this.$refs.refTechStack.scrollToPage2();
      },
    };
  },
  methods: {
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

  components: {
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
  /* .technology {
    transform: scale(2);
  } */
}

@media only screen and (min-width: 600px) {
  html {
    font-size: 12px;
  }
  /* .technology {
    transform: scale(2);
  } */
}

@media only screen and (min-width: 768px) {
  html {
    font-size: 14px;
  }
  /* .technology {
    transform: scale(2);
  } */
}

@media only screen and (min-width: 992px) {
  html {
    font-size: 16px;
  }
  /* .technology {
    transform: scale(2);
  } */
}

@media only screen and (min-width: 1200px) {
  html {
    font-size: 18px;
  }
  /* .technology {
    transform: scale(2);
  } */
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
  background-image: url("../public/123323423423.png");
  background-size: 100px;
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
