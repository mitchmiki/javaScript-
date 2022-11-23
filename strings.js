let animal="dog";
console.log(animal.length);
//access individual in a string
 console.log(animal[3]);
 let msg ='I am queen';
 console.log(msg);
 //changing case method
 let yellMsg=msg.toUpperCase();
 console.log(yellMsg);
 let angry = "LeaVe mE AloNe";
 let lower = angry.toLowerCase();
 console.log(lower);
 //trim method
 let greetings ="    leave me alone please     ";
 console.log(greetings);
 let newGreetings =greetings.trim();
 console.log(newGreetings);
 let tvshow ="catdog";
 let firstIndex = tvshow.indexOf('cat');
 console.log(firstIndex);

 //slice method (omits last index when you add two dfrnt indexes...wiil count upto next immidiate to the one provided)
 let str ='lokichogio';
 console.log(str);
 let partofstr =str.slice(2,6);
 console.log(partofstr);
 //.replace method(1st argument is what u want to change,2nd argument is what will be newly placed want to replace (teehee) with(haha) this will change the first 'teehee' or word)replace all will replacec everything with the new specified.
 let annoyingLaugh ='teehee so funny! teehee';
 let fAnnoyingLaugh = annoyingLaugh.replaceAll('teehee','haha');
console.log(fAnnoyingLaugh);
let song = 'london calling';
console.log(song);
let myName = 'mitchelle\najiambo';
console.log(myName);
let mwaName='mitchelle"\ajiambi"'
console.log(mwaName);
let me='hello//world'
console.log(me);



