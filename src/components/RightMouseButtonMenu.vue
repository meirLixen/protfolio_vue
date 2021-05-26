<template>
  <div ref="menu" class="menu">
    <div class="backwards" v-on:click="clickBackwards">
      <span class="keyboard_shortcut">חץ לשמאל + Alt</span>
      <span class="description_button">אחורה</span>
    </div>
    <div class="forward" v-on:click="clickForward">
      <span class="keyboard_shortcut">חץ לימין + Alt</span>
      <span class="description_button">קדימה</span>
    </div>
    <div class="reload" v-on:click="clickReload">
      <span class="keyboard_shortcut">Ctrl+R</span>
      <span class="description_button">טעינה מחדש</span>
    </div>
    <div class="save_as" v-on:click="clickSaveAs">
      <span class="keyboard_shortcut">Ctrl+S</span>
      <span class="description_button">שמירה בשם</span>
    </div>
    <div class="printing" v-on:click="clickPrinting">
      <span class="keyboard_shortcut">Ctrl+P</span>
      <span class="description_button">הדפסה</span>
    </div>
    <div class="download_cv" v-on:click="clickDownloadCV">
      <span class="description_button">הורד קורות חיים</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "RightMouseButtonMenu",
  methods: {
    divAppClick() {
      this.$refs.menu.style.display = "none";
    },
    clickBackwards() {
      window.history.go(-1);
    },
    clickForward() {
      window.history.go(+1);
    },
    clickReload() {
      location.reload();
    },
    clickSaveAs() {
      function download(data, filename, type) {
        var file = new Blob([data], { type: type });
        if (window.navigator.msSaveOrOpenBlob)
          // IE10+
          window.navigator.msSaveOrOpenBlob(file, filename);
        else {
          // Others
          var a = document.createElement("a"),
            url = URL.createObjectURL(file);
          a.href = url;
          a.download = filename;
          document.body.appendChild(a);
          a.click();
          setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
          }, 0);
        }
      }
      download(
        document.documentElement.innerHTML,
        "portfolio_meir",
        "text/html"
      );
    },
    clickPrinting() {
      window.print();
    },
    clickDownloadCV() {
      var link = document.createElement("a");
      link.href = "../../public/meir_cv.pdf";
      link.download = "meir_cv.pdf";
      link.dispatchEvent(new MouseEvent("click"));
    },
    contextMenu(event) {
      event.preventDefault();
      var myVar = 333;
      if (event.pageX < 333) {
        myVar -= 333 - event.pageX;
      }
      this.$refs.menu.style.display = "block";
      this.$refs.menu.style.top = event.pageY + "px";
      this.$refs.menu.style.left = event.pageX - myVar + "px";
    },
  },
};
</script>
<style scoped>
.menu {
  user-select: none;
  font-family: sans-serif;
  width: 333px;
  z-index: 100;
  height: 170px;
  background-color: white;
  position: absolute;
  display: none;
  padding-top: 3px;
  font-size: 17px;
}
.menu div {
  display: flex;
  height: 26px;
  /* vertical-align: middle; */
  align-items: center;
  justify-content: center;
}
.menu div:hover {
  background-color: rgba(0, 0, 0, 0.178);
}
.menu .reload {
  border-bottom: 1px solid;
  border-color: #00000021;
}
.menu .save_as {
  margin-top: 5px;
}
.menu .printing {
  border-bottom: 1px solid;
  border-color: #00000021;
}
.download_cv {
  margin-top: 5px;
}
.download_cv a {
  text-decoration: none;
  color: black;
  cursor: none;
}
.menu div .description_button {
  margin-left: auto;
  margin-right: 35px;
  opacity: 0.9;
}
.menu div .keyboard_shortcut {
  margin-right: auto;
  margin-left: 23px;
  opacity: 0.7;
}
</style>
// document.execCommand("copy"); // document.documentElement.innerHTML; // a
href="/images/myw3schoolsimage.jpg" download // var userLang =
navigator.language || navigator.userLanguage; window.open('file.doc')
