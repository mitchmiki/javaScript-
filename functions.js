function grumpus(){
    console.log('ugh....you again....');
    console.log('for the last time....');
    console.log('LEAVE ME ALONE!!!');
}
grumpus();
 
function greet(name){//parametre 
    console.log(`Hi,${name}!`);

};
greet(`cindy`);//argument
//multiply two numbers
function multiply(x,y){
    console.log(x*y);
};
multiply(2,3)
//dividing functions
function divide(x,y){
    console.log(x/y);
};
divide(10,2)
//adding numbers
function add(x,y,z){
    console.log(x+y+z);
};
add(56,28,13)
//square a number
function square(x){
    console.log(x*x);
}
square(8);
function hello(word){
    console.log(`hello${word}!`.toUpperCase());
};
hello(`world`)
// function avg(x,y,z){
//     console.log((x+y+z)/avg.length);
// };
// avg(20,25,30)
function avg(arr){
    let sum=0;
    for( let r of arr){
        sum += r;
    }
    const average = sum /arr.length
    console.log(average);
};
avg([1,2,3,4,5,6]);
//function m,D
//defining functions
function findLarges(x,y){
    if (x>y){
        console.log(`${x} is large`);
    }
    else if (x<y){
        console.log(`${y} is larger`)
    }
    else{
        console.log(`${x} and ${y} are equal`);
    }

    
}
findLarges(6,12)
function add(x,y){
    return x+y;//returns only one value
    // console.log('Hello world');//wont be executed
    // return[x,y]//returnmultiple values
}
const  total=add(6,4);
console.log(total);
function isPurple(color){
    if(color==='red'){
        return true
    }
    else{
        return false
    }
}
const color= isPurple('purple')
console.log(color);
//writ a isValidpassword function
//it accepts two parametres:password and username
//password must:
//be atleast 8 characters
//cannot contain spaces
//cannot contain username
//if all requirements are met return true
//otherwise return false

function isValidpassword(username,password){
    if (password.length<8){
        return false;
    }
    if(password.indexOf(username)!== -1){
        return false;
    }
    if(password.indexOf(" ")!== -1){
        return false;
    }
    else{
        return true;
    }
};
    const ppp= isValidpassword('Mitchelle','kiro1@kim2' );  
    console.log(ppp);
    function password(password,username){
    const tooShort=password.length < 8;
    const hasSpace = password.indexof(' ')!==-1;
    const containsUsername = password.indexOf(username)!==-1
    if (tooShort || hasSpace ||containsUsername) return false;
    else return true; 
    };
    //return !tooShort && hasSpace && containsUsername;
    
    
    //apply a condition
    //if (tooshort || hasSpace ||containUsername)return false;
    //return true;
    //A pangram is a sentence that contains every letter of the alphabet i.e A-z
    //The quick brown fox jumps over the lazy dog
    //write a function isPangram,which checcks to see if a given sentece contains every letter of the alphabet
    //make sure to ignore string casing
     function isPangram(sentence){
        let lowerCased = sentence.toLowerCase();
        for(let char of 'abcdefghijklmnopqrstuvwxyz'){
            if (lowerCased.indexOf(char)===-1){
            return false;
            }
        }
        return true;

     }
     const panGram = isPangram('Waltz, nymph, for quick jigs vex Bud')
     console.log(panGram);
     //sln2
     function isPangram(sentence){
        let lowerCased = sentence.toLowerCase();
        for(let char of 'abcdefghijklmnopqrstuvwxyz'){
            if (!lowerCased.includes(char)===-1){
            return false;
            }
        }
        return true;

     }
     const panGram1 = isPangram('Waltz, nymph, for quick jigs vex Bud')
     console.log(panGram);

     let bird='manderin duck';
     function birdWatch(){
        let bird='golden pheasant';
        bird;//'golden pheasant'
        console.log(bird);
     } 
     birdWatch(); 
     //BLOCK SCOPE
     let radius=8;
     if(radius>0){
        const PI = 3.14;
        let circ = 2*PI *radius;
        console.log(circ);
     }
     //LEXICAL SCOPE-refers to the fact that nested functions are bound to their parent function
     //They are only available in their pa\rent function.
     function outer(){
        let hero = 'Black panther';
        function inner(){
            let cryForHelp = `${hero},please save me!`
            console.log(cryForHelp); 
        }
        inner();
     }
     outer();
     function outter(){
        let movie = 'accident man';//available across the whole function
        console.log(movie.toUpperCase());
        function innerr(){
            let movie = 'shooter';//available only inside the nested function
        console.log(movie . toUpperCase());
     //more nesting
     function extras(){
        console.log(movie.toUpperCase());//looks to the nearest nested movie function
     }
     extras();
        }
        innerr();
    }
    outter();
    //fuction axpression
    const sqquare= function(num){
        return num * num; 
    }
     console.log(sqquare(7));

     //REASONS WHY FUCTIONS ARE STORED I9N A VARIABLE
     //1. in JavaScript functions are objects
     //-This means we can put them in avariable 
     //-we can store alot of thnem in an array
     //-we can even pass them arround as arguments
     //use console.dir in the browser to prove that functions are objects.
     function callTwice(func){
        func();
        func();
     } 
     function laugh(){
        console.log('kichekoooooo');
     }
     callTwice(laugh);
     //returns function
     function makeBetweenFunc(min,max){
        return function (val){
            return val >=min && val <= max;
        }
     } 
     const inAgeRange = makeBetweenFunc(18,100);
     console.log(inAgeRange(17));
     console.log(inAgeRange(68));
         //callback fuction
    //a function passed as an argument of another function
    //which is then invoked inside the outerfunction
       //HOISTING
       //variables declared
       {
        var X = 1;
       };
       console.log(X);

       console.log(sqqquare(5));
       function sqqquare(m){
        return m*m
       };
       console.log(animal);
       var animal = 'lion'
       console.log(animal);

       //automatic repeat a certian number of times
       function rage(){
        console.log('I hate everything');
       };
       function rptNTimes(action,num){
        for(let i=0;i< num;i++){
            action();
        }
       }
       rptNTimes(rage,13);
     
     function add(x,y){
        return x+y;
     } 
    //  function add(x,y){
    //     return x+y;
    //     }
    //     add(2,6);
        function multiply(x,y){
            return x*y;
        }
        function divide(x,y){
        return x/y;
        } 
        function subtract(x,y){
            return x-y;
        }
        const calc={
            team1:add,
            team2:multiply,
            team3:divide,
            team4:subtract
            
        }
        console.log(calc.team1(4,6));
        console.log(calc.team2(4,3));
        console.log(calc.team3(4,2));
        console.log(calc.team4(5,1));
         
        const calc1 =[add, multiply,divide,subtract];

        for(let  calc of calc1){
            let calc2 = calc(2,3);
            console.log(calc2); 
        }
