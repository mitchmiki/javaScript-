function grading(grade){
     
    if(grade >=90){
        console.log('The grade is A');
    }
     else if(grade>=80){
        console.log('The grade is A-');
     }
     else if(grade>=70){
        console.log('The grade is B+');
     }
     else if(grade>=60){
        console.log('The grade is B');
     }
     else if(grade>=55){
        console.log('The grade is B-');
     }
     else if(grade>=50){
        console.log('The grade is C+');
     }
     else if(grade>=45){
        console.log('The grade is C');
     }
     else if(grade>=40){
        console.log('The grade is C-');
     }
     else if(grade>=35){
        console.log('The grade is D+');
     }
     else if(grade>=30){
        console.log('The grade is D');
     }
     else if(grade>=25){
        console.log('The grade is D-');
     }
     else{
        console.log('The grade is E');
     }
};
grading(89);
grading(67);