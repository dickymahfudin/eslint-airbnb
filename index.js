const express = require('express');

const app = express();
app.listen(3100, () => {
  console.log('object');
});

class A {
  speak() {
    console.log('Test');
  }
}
const tes = new A();
tes.speak();

// class A {
//   constructor() {
//     this.a = 'hi';
//   }

//   print() {
//     console.log(this.a);
//   }

//   sayHi() {
//     console.log('hi');
//   }
// }

// let a = new A();
// a.sayHi(); // => "hi"

const obj = {
  a: 1,
  b: () => console.log('OK'),
};
console.log(obj);
function func(params) {
  return `this ${params}`;
}
func('ok');

const funcArr = (a, b) => a + b;

console.log(funcArr(3, 2));
const data = {
  name: 'name',
  address: 'address',
  phone: 'phone',
  email: 'email',
};

const anakinSkywalker = 'Anakin Skywalker';
const lukeSkywalker = 'Luke Skywalker';

// bad
const obj1 = {
  episodeOne: 1,
  twoJediWalkIntoACantina: 2,
  lukeSkywalker,
  episodeThree: 3,
  mayTheFourth: 4,
  anakinSkywalker,
};

console.log({ data, obj1 });

const array = [{ a: 2 }, { a: 2 }, { a: 2 }, { a: 2 }];
array.forEach((element) => {
  console.log(element.a);
});
