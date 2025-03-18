const array = new Array(100);
array.push(1);
console.log("array", array);

const array2 = [1, 2, 3, 4];
console.log("array", array2);

const array3 = [...array2, 5];
console.log("array", array3);

const array4 = array3.map((item) => {
  return item * 2;
});
console.log("array", array4);
