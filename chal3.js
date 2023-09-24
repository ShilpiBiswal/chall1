const avgDolphin=(97+112+101)/3;
const avgKoalas=(109+95+123)/3;
console.log(avgDolphin);
console.log(avgKoalas);

/*
if(avgDolphin>avgKoalas){
    console.log("the dolphins win!!!");
}else if(avgDolphin<avgKoalas){
    console.log("the koalas win!!!");
}else if(avgDolphin==avgKoalas){
    console.log("its a tie!!!");
}
*/

const minscore=100;
if(avgDolphin>avgKoalas && avgDolphin>=minscore){
    console.log("the dolphins win!!!");
}else if(avgDolphin< avgKoalas && avgKoalas>=minscore){
    console.log("the koalas win!!!");
}else if(avgDolphin==avgKoalas && avgDolphin,avgKoalas>=minscore){
    console.log("its a tie!!!");
}
