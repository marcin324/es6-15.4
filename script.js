/*Zadanie pierwsze*/

const hello = 'Hello';
const world = 'World';
const helloWorld = `${hello} ${world}`;


/*Zadanie drugie*/

const multiply = (a, b = 1) => a * b;


/*Zadanie trzecie*/

let ave1 = 0;
const average1 = (...args) => args.forEach(arg => ave1 = ave1 + arg / args.length);


/*Zadanie czwarte*/

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
let ave2 = 0;
const average2 = (...args) => args.forEach(grade => {return ave2 = ave2 + grade / grades.length});
average2(...grades);


/*Zadanie piąte*/

const array = [1, 4, 'Iwona', false, 'Nowak'];
const [ , , third, , fifth] = array;
const firstName = `${third}`;
const lastName = `${fifth}`;