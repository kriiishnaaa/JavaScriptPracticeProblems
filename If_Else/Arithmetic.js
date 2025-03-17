const args=process.argv.slice(2);
let a=parseInt(args[0]);
let b=parseInt(args[1]);
let c=parseInt(args[2]);
let exp1=a+b*c;
let exp2=a%b+c;
let exp3=c+Math.floor(a/b);
let exp4=a*b+c;
let maxValue = exp1;
if (exp2 > maxValue) maxValue = exp2;
if (exp3 > maxValue) maxValue = exp3;
if (exp4 > maxValue) maxValue = exp4;

let minValue = exp1;
    if (exp2 < minValue) minValue = exp2;
    if (exp3 < minValue) minValue = exp3;
    if (exp4 < minValue) minValue = exp4;


console.log("max value: "+maxValue);
console.log("min value: "+minValue);