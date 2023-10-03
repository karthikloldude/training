const readlineSync=require("readline-sync");

const username=readlineSync.question("may i know ur namre ");
const userAge=readlineSync.question("may i know ur age ");
const yearofbirth=2022- userAge;
console.log(`You were born in the year ${yearofbirth}`);
console.log(username);
console.log("01"==1)/*it shows as true as it converts string into number so then we need to apply strict equality which is ===*/
console.log("01"===1);/*NULL=0 WHEN COMPARED TO SOME NUMBER*/
/*null=0 when null compared to == then it will be nothing*/