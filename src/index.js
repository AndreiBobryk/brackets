 module.exports = function check(str, bracketsConfig) {

  let arr = bracketsConfig.map((item) => {
    return item.join("");
  });

  let strTemp = str;
  let i = 0;

  let count = 0;

  while (count < arr.length) {
    if (str.indexOf(arr[i]) !== -1) {
      str =
      str.slice(0, str.indexOf(arr[i])) + str.slice(str.indexOf(arr[i]) + 2);
        console.log(strTemp)
        count =0;
        i=0;
    } else {
      count++;
      i++;
    }
    if (i === arr.length) {
      i = 0;
    }
  }

  if(str) {
    return false;
  } else {
    return true;
  }


}
