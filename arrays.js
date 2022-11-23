//creating arrays
let student = [];

student[0] = 'femi';
student[1] = 'devs';
//push method
student.push('busia');
console.log(student);
//an array of strings
let colors=['red','orange','yellow'];
console.log(colors);
//an array of numbers
let lottoNums = [19,22,56,12,51];
console.log(lottoNums);
//a mixed array
let stuff = [true,68,'cat',null];
console.log(stuff);
let fruits = ['orange','apples','20','false','undefined']
fruits[1] ='milk';
//pop method
fruits.pop();
fruits.shift();
fruits.unshift('orange')

// console.log(fruits.length);
console.log(fruits);


let footballTeams = ['manchester United','arsenal','chelsea'];
let numOfTeams = [4,6,1];
//merge arrays-concat
let merged = footballTeams.concat(numOfTeams);
let newlyMerged = numOfTeams.concat(footballTeams);
console.log(newlyMerged);
console.log(merged);
//join
let items = [1,2,"fruits",false,true];
console.log(items);
let sliced = items.slice(1, 4);
console.log(sliced);
 console.log( items .includes("fruits"))
console.log(items.join('!'));
//reverse -reverses an array
let reversed = items.reverse();
console.log(reversed);
//slice-copy portion of an array(slice doesnt change original item)
//splice
let splicer = ['orange','apples','watermelon','mangoes','guava'];
//removing and adding an item using splice-changes original array
splicer.splice(2, 1);
//add items using splice
splicer.splice(0 , 0, 'grapes');
//replace using splice
splicer.splice(0,1,'banana');
console.log(splicer);
//sorting arrays
let sorter = ['crocodile','lizard', 'chameleon' ,'salamander'];
let sorted = sorter.sort();
console.log(sorted);
//NEST ARRAYS
const  color  = [
    ['red','crimson'],
    ['orande','dark orange'],
    ['yellow','golden rod'],
    ['green','olive'],
    ['blue','navy blue'],
    ['purple','orchid']
]
// console.log(color);
//ADDING TO A NESTED ARRAY
// color.push(['white', 'off white']);
color[6] =['white','off white'];
console.log(color);
let concatinated  = color[2].concat(color[4] ).reverse();
console.log(concatinated.join('-') .toUpperCase() .repeat(2));
const details= [
    ['age','20'],
    ['city','Tulsa'],
    ['zip','91003'],
    ['admin',true]
]
console.log(details.join(':'));
const age =details[0] .join(':')
console.log(age);
const city =details[1] .join(':')
console.log(city);
const zip =details[2] .join(':')
console.log(zip);
const admin =details[3] .join(':')
console.log( admin);
const newlyConcatinated = age.concat(city).concat(zip).concat(admin);
console.log(newlyConcatinated);

