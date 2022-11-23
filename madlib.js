function madlib(adjectives,noun,verb,adverb){
    
    return`The ${adjectives} ${noun} ${verb} very ${adverb}`;
}

madlib('black','dog','run','quickly');
let mad=madlib('black','dog','run','quickly')
console.log(mad);
//write function
//pass arguments adjective precidence
//use return function instead of console.log
//call 3 functions with dfrnt sentences
function madlib(adjective,noun,verb,adverb){
    return `The ${adjective} ${noun} ${verb} very ${adverb}`;
}
let mad1=madlib( 'beautiful','models','walk','elegantly');
console.log(mad1);
let mad2=madlib( 'final','exam','ranked','poorly');
console.log(mad2);
let mad3=madlib('hub','ladies','are','dedicated' );
console.log(mad3);
