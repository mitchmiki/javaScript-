//for loops
// for (
//     [initialExpression];
//     [condition];
//     [increamentExpression]
//    )
// TYPES OF LOOPS
// for loop
// while loop
// for.....of loop
// for.....in loop
        // start @ 1  stop @10 add 1 each time
// for ( let i = 1;  i <=10;    i++)

// )
for ( let i = 1;  i <= 10; i++){
    console.log(i);
}
for ( let n = 0;  n <= 20; n++){
    console.log(n);
}
for(let m = 20; m>=1 ;m--){
    console.log(m);
}
//nesting loops
let str='LOL'
for ( let i=0; i<=4;i++){
    console.log("outer:",i);
    for( let i = 0; i<str.length; i++);{
    console.log('inner:',str[i]);
}
}
let num=0;{
    while (num<10){
        console.log(num);num++
    }
}let subreddits = [ 'soccer','popheads','cringe','books'];
for (let sub of subreddits){
    // do this for every item in subreddits array:
    console.log(`${sub} - ww. reddit.com/r/${sub}`);
}
//nested for of loops
const magicSquare= [
    [2,7,6],
    [9,5,1],
    [4,3,8]
];
for (let row of magicSquare){
    let sum= 0;
    for (let num of row){
        sum += num;
    } console.log(`Row of ${row} sums to ${sum}`);
    // console.log(magicSquare[0][1][2]);//acessing elements within a nested array
        
    }
    for ( let row of magicSquare){
        console.log(row);
        let sum =0;
        for( let num of row ){
            // console.log(num);
            sum += num;
        }
        console.log(`Row of${row} sums to ${sum}`);
    }
    const movieReviews = {
        Amadeus:10,
        Arrival:9.5,
        Alien:9,
        Amelie:8
    };
    // we can loop ovetrkeys in an objectusing object,keys()..method
    for( let movie of Object.keys(movieReviews) ){
        let score = movieReviews[movie];
        console.log(movie);
        console.log(`I rated ${movie} ${score}/10`);
    }
    // QUIZ 
    //create object of foot ball teams the key being their scores and positions in EPL
    const footBallTeams ={
        Arsenal :10,
        ManCity :9,
        Manunited:9.5,
        Chelsea  :8.5,
        Liverpool:8
    };
    for( let football of Object.keys(footBallTeams)){
        // console.log(football);
        let position = footBallTeams[football];
        console.log(` ${football} is position ${position} in EPL`);
    } 
    //for.....in
    const jeopardyWinnings = {
        regularplay           :  2522700,
        watsonchallenge       :  300000,
        tournamentofChampions :  500000,
        battleofTheDecades    :  100000
    };
    let total=0;
    for ( let key in jeopardyWinnings){
        total+=jeopardyWinnings[key];
        console.log(key );
    }
        let total2 = 0;
        for (let key in jeopardyWinnings){
            total2+=jeopardyWinnings[key];     
    }
    console.log(`ken jenning's total winnings: $${total2}`);
        

    

