'use strict';

/*Zadanie pierwsze*/

var hello = 'Hello';
var world = 'World';
var helloWorld = hello + ' ' + world;
/*console.log(helloWorld);*/

/*Zadanie drugie*/

var multiply = function multiply(a) {
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return a * b;
};
/*console.log(multiply(4))*/

/*Zadanie trzecie*/

var ave1 = 0;
var average1 = function average1() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return args.forEach(function (arg) {
    return ave1 = ave1 + arg / args.length;
  });
};
/*average(5, 10, 2, 3, 30);
console.log(ave);*/

/*Zadanie czwarte*/

var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
var ave2 = 0;
var average2 = function average2() {
  for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  return args.forEach(function (grad) {
    return ave2 = ave2 + grad / grades.length;
  });
};
average.apply(undefined, grades);
/*console.log(ave);*/

/*Zadanie piąte*/

var array = [1, 4, 'Iwona', false, 'Nowak'];
var third = array[2],
    fifth = array[4];

var firstName = '' + third;
var lastName = '' + fifth;
/*console.log(`${firstName} ${lastName}`);*/
