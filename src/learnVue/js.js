const str1 = "klsjdlkfj lksjdlfkj sldkfjl kssj lk jlkj lk j";
const str2 = "jikjkljkjsdkkf kjhskdj ksjdfhiuhwkku kk ksjhf ";
const array1 = [];
const array2 = [];
function stringToArrayByInterval1() {
  var index = 0;
  var myInterval = setInterval(() => {
    array1.push(str1[index]);
    console.log(array1);
    if (array1.length === str1.length) {
      clearInterval(myInterval);
      stringToArrayByInterval2();
    }
    index++;
  }, 100);
}
function stringToArrayByInterval2() {
  var index = 0;
  var myInterval = setInterval(() => {
    array2.push(str2[index]);
    console.log(array2);
    if (array2.length === str2.length) {
      clearInterval(myInterval);
    }
    index++;
  }, 100);
}
stringToArrayByInterval1();
