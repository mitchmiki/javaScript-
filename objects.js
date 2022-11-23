// property = key +value
const fitBitData = {
    totalSteps         :308727,
    totalMiles         :211.7,
    avgCalorieBurn     :5755,
    workoutsThisWeek   :'5 of 7',
    avgGoodSleep       :'2:13',
    100                :'one hundred'

};
//updating
fitBitData.totalMiles = 300;
fitBitData.totalSteps += 1000;
fitBitData.totalMiles--;
fitBitData.heartStillbeating = true;
console.log(fitBitData );
//use dot notation to access property
console.log(fitBitData.totalMiles);
//anytime you call a variable it has to be in string when using'[]'
console.log(fitBitData['totalSteps']);
const pupils = {
    firstName      :'David',
    lastName       :'jones',
    strengths      :['music','art'],
    exams: {
        midterm  :92,
        final    :88
    }

};
// console.log(pupils.strengths.push('GBV'));
// console.log(pupils.strengths.splice(2,0,'GBV'));
console.log(pupils.strengths[2]= 'GBV');
console.log(pupils.strengths[1]);
console.log(pupils);
// the total examination marks = 180
const finalResult = `the total examination mark is : ${pupils.exams.midterm + pupils.exams.final}`;
console.log(finalResult);
const person = {
    age : 45,
    cohort : {
        cohortOne :15,
        cohortTwo : 19
    }
}
//total number of cohorts is :34!
const person1 = `the total number of  the 2 cohorts is:${person.cohort.cohortOne + person.cohort.cohortTwo}`;
console.log(person1);
//methods of adding other data types
person.gender = 'female'
console.log(person.age);
console.log(person);
// updating objects
person.age = 20;
console.log(person); 
const fNum = {
    one:1,
    two:2,
    three:3
}
const sNum = {
    one:1,
    two:2,
    three:3
}
console.log(typeof fNum);
console.log(typeof sNum);
console.log(fNum ===sNum);
