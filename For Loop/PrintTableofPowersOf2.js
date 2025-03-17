const args=process.argv.slice(2);
let n=parseInt(args[0]);
function printTable(n){
    console.log(`Table of ${n}:`);
    for(let i=1;i<=10;i++){
        console.log(n+" * "+i+" = "+n*i);
    }
    console.log("\n");
}
for(let i=0;i<=n;i++){
    printTable(Math.pow(2,i));
}