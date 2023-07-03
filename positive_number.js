// Question 1
let a, b;
function positive_number(a) {
  if (a > 0) {
    console.log("The number is positive");
  } else {
    console.log("The number is not positive");
  }
}

positive_number(5);

// Question 2
var largest = (arr) => {
  let large = [0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > large) {
      large = arr[i];
    }
  }
  return large;
};

// Question-3
const arr = [20, 100, 500];
const largest_number = largest(arr);
console.log(largest_number);

const obj = {
  radius: 2,
  height: 2,
  area: function () {
    const pi = Math.PI;
    return pi * Math.pow(obj.radius, 2) * obj.height;
  },
};

const area = obj.area();
console.log(area);

// Question-4

var temp = "hi";
function display() {
  console.log(temp);
  //   var temp = "bye";   variable will be declared but not assigned a value .so,output is undefined.
}
display();
