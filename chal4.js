const bill=Number(prompt('what is the bill'));

const tip=bill>=50 && bill<=300? 1.5*bill: 0.2*bill;
console.log(tip);

const totalvalue=(bill+tip);

console.log(`the bill was ${bill}, the tip was ${tip}, and the total value is ${totalvalue}`);




