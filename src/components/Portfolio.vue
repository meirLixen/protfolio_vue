<template>
  <div id="page3" class="page3">
    <div class="images">
      <img :class="[arrayClasses[0], 'img1']" :src="addToraImg" alt="img" />
      <img :class="[arrayClasses[1], 'img2']" :src="businessesImg" alt="img" />
      <img
        :class="[arrayClasses[2], 'img3']"
        :src="dashboardAdminImg"
        alt="img"
      />
      <img :class="[arrayClasses[3], 'img4']" :src="loginImg" alt="img" />
      <img :class="[arrayClasses[4], 'img5']" :src="noOkDealImg" alt="img" />
      <img :class="[arrayClasses[5], 'img6']" :src="signUpImg" alt="img" />
      <img
        :class="[arrayClasses[6], 'img7']"
        :src="settingsAccountImg"
        alt="img"
      />
      <img :class="[arrayClasses[7], 'img8']" :src="toraImg" alt="img" />
      <img :class="[arrayClasses[8], 'img9']" :src="okDealImg" alt="img" />
    </div>
  </div>
</template>
<script>
import addToraImg from "../../public/add tora.png";
import businessesImg from "../../public/bussinces.png";
import dashboardAdminImg from "../../public/deshbord admin.png";
import loginImg from "../../public/login.png";
import noOkDealImg from "../../public/no deal.png";
import signUpImg from "../../public/regenstrd.png";
import settingsAccountImg from "../../public/settingsAcounts.png";
import toraImg from "../../public/tora.png";
import okDealImg from "../../public/yes deal.png";
var class1 = "left_img";
var class2 = "central_img";
var class3 = "right_img";
var class4 = "outgoing_img";
var class5 = "hidden_images";
var index = 0;

export default {
  name: "Protfolio",
  created() {
    setInterval(() => {
      if (index < 6) {
        for (let index2 = 0; index2 < this.arrayClasses.length; index2++) {
          this.arrayClasses[index2] = class5;
        }
        this.arrayClasses[index] = class1;
        this.arrayClasses[index + 1] = class2;
        this.arrayClasses[index + 2] = class3;
        this.arrayClasses[index + 3] = class4;
      } else if (index === 6) {
        for (let index2 = 0; index2 < this.arrayClasses.length; index2++) {
          this.arrayClasses[index2] = class5;
        }
        this.arrayClasses[index] = class1;
        this.arrayClasses[index + 1] = class2;
        this.arrayClasses[index + 2] = class3;
        this.arrayClasses[0] = class4;
      } else if (index === 7) {
        for (let index2 = 0; index2 < this.arrayClasses.length; index2++) {
          this.arrayClasses[index2] = class5;
        }
        this.arrayClasses[index] = class1;
        this.arrayClasses[index + 1] = class2;
        this.arrayClasses[0] = class3;
        this.arrayClasses[1] = class4;
      } else if (index === 8) {
        for (let index2 = 0; index2 < this.arrayClasses.length; index2++) {
          this.arrayClasses[index2] = class5;
        }
        this.arrayClasses[index] = class1;
        this.arrayClasses[0] = class2;
        this.arrayClasses[1] = class3;
        this.arrayClasses[2] = class4;
      }

      index++;
      if (index === 9) {
        index = 0;
      }
    }, 4000);
  },
  data() {
    return {
      arrayClasses: new Array(9),
      addToraImg,
      businessesImg,
      dashboardAdminImg,
      loginImg,
      noOkDealImg,
      signUpImg,
      settingsAccountImg,
      toraImg,
      okDealImg,
    };
  },
};
</script>
<style scoped>
.page3 {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  box-sizing: border-box;
  border-top: 1px solid #ffffff6b;
}
.images {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.images img {
  width: 29rem;
  height: auto;
  position: absolute;
}
/* .myimg {
  animation-name: left_img;
  animation-duration: 1s;
  animation-timing-function: linear;
  animation-iteration-count: 1;
}
@keyframes left_img {
  from {
    transform: rotateY(65deg);
  }
  to {
    transform: rotateY(0deg);
  }
}
@keyframes right_img {
  from {
    transform: rotateY(-65deg);
  }
  to {
    transform: rotateY(0deg);
  }
} */
.left_img {
  opacity: 0.2;
  left: -4rem;
  -webkit-transform: rotateY(65deg) scale(0.9);
  -ms-transform: rotateY(65deg) scale(0.9);
  transform: rotateY(65deg) scale(0.9);
  animation-name: to_left_img;
  animation-duration: 2s;
  animation-timing-function: linear;
  animation-iteration-count: 1;
}
@keyframes to_left_img {
  from {
    opacity: 0;
  left: -8rem;
  
  
  }
}
.central_img {
  transform: rotateY(0deg);
  animation-name: to_central_img;
  animation-duration: 2s;
  animation-timing-function: linear;
  animation-iteration-count: 1;
}
@keyframes to_central_img {
  from {
    opacity: 0.2;
  left: -4rem;
  -webkit-transform: rotateY(65deg) scale(0.9);
  -ms-transform: rotateY(65deg) scale(0.9);
  transform: rotateY(65deg) scale(0.9);
  }
  to{
      opacity: 1;
  left: 17.5rem;
  -webkit-transform: rotateY(0deg) scale(1);
  -ms-transform: rotateY(0deg) scale(1);
  transform: rotateY(0deg) scale(1);
  }
}
.right_img {
  opacity: 0.2;
  -webkit-transform: rotateY(-65deg) scale(0.9);
  -ms-transform: rotateY(-65deg) scale(0.9);
  transform: rotateY(-65deg) scale(0.9);
  left: 39rem;
}
.outgoing_img {
  display: none;
}
.hidden_images {
  display: none;
}
</style>
