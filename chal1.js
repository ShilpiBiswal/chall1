const heightjohn=1.95;
const heightMark=1.88;
const massJohn=92;
const massMark=78;

const bmiMark=massMark/(heightMark*heightMark);
const bmiJohn=massJohn/(heightjohn*heightjohn);

const markHigherBmi=bmiMark>bmiJohn;

console.log(bmiJohn,bmiMark);
console.log(markHigherBmi);

if(markHigherBmi){
    console.log("Mark's BMI is higher than John's!");
}else{
    console.log("John's BMI is higher than Mark's!");
}

if(markHigherBmi){
    console.log(`Mark's BMI ${bmiMark} is higher than John's BMI ${bmiJohn}`);
}else{
    console.log(`John's BMI ${bmiJohn} is higher than Mark's BMI ${bmiMark}`);
}