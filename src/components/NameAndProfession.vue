<template>
  <div class="page1">
    <h1 class="hello">Hello!</h1>
    <div class="name_and_profession">
      <div class="name">
        <span
          class="span_name_and_profession"
          v-for="(letter, index) in name"
          :key="index"
          >{{ letter }}</span
        >
      </div>
      <div class="profession">
        <span
          class="span_name_and_profession"
          v-for="(letter, index) in profession"
          :key="index"
          >{{ letter }}</span
        >
      </div>
    </div>
    <ScrollToPage2
      v-on:scrollToPage2="scrollToPage2"
      :nameAndProfessionDisplayEnded="nameAndProfessionDisplayEnded"
    />
  </div>
</template>

<script>
import ScrollToPage2 from "./ScrollToPage2";
const myName = "My name is Meir Lixenbrg.";
const myProfession = "a full stack developer.";

export default {
  name: "NameAndProfession",
  components: {
    ScrollToPage2,
  },
  created() {
    const stringToArrayByInterval1 = () => {
      var index = 0;
      var myInterval = setInterval(() => {
        this.name.push(myName[index]);
        if (this.name.length === myName.length) {
          clearInterval(myInterval);
          stringToArrayByInterval2();
        }
        index++;
      }, 100);
    };
    const stringToArrayByInterval2 = () => {
      var index = 0;
      var myInterval = setInterval(() => {
        this.profession.push(myProfession[index]);
        if (this.profession.length === myProfession.length) {
          clearInterval(myInterval);
          this.nameAndProfessionDisplayEnded = true;
        }
        index++;
      }, 100);
    };
    setTimeout(() => {
      stringToArrayByInterval1();
    }, 1000);
  },

  data() {
    return {
      nameAndProfessionDisplayEnded: false,
      name: [],
      profession: [],
      scrollToPage2: () => {
        this.$emit("scrollToPage2");
      },
    };
  },
};
</script>

<style scoped>
.page1 {
  width: 100vw;
  height: 100vh;

  overflow: hidden;
  box-sizing: border-box;
}
.hello {
  background: url("../../public/םתמחונת רקע חדשה.jpg") repeat center center;
  color: transparent;
  font-size: 8rem;
  -webkit-background-clip: text;
  background-clip: text;
  background-size: 5px;
  user-select: none;
  margin-top: 5rem;
  margin-bottom: 0px;
  /* margin-bottom: 22px; */
}

.name_and_profession {
  font-size: 2.2rem;
  font-family: cursive;
  letter-spacing: 2px;
  color: antiquewhite;
  text-align: left;
  margin-right: auto;
  margin-left: auto;
  width: 31rem;
  user-select: none;
  margin-top: 3rem;
  margin-bottom: 8rem;
}
.profession {
  margin-left: 31px;
  width: 28rem;
}
.span_name_and_profession {
  animation-name: span_color;
  animation-duration: 3s;
  animation-iteration-count: 1;
}
@keyframes span_color {
  from {
    color: red;
  }
  to {
    color: antiquewhite;
  }
}
@media only screen and (max-width: 600px) {
  .name_and_profession {
    width: 33rem;
  }
}

@media only screen and (min-width: 600px) {
  .name_and_profession {
    width: 32rem;
  }
}

@media only screen and (min-width: 768px) {
}

@media only screen and (min-width: 992px) {
}

@media only screen and (min-width: 1200px) {
}
</style>
