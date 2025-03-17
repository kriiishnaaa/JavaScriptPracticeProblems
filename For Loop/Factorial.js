const args = process.argv.slice(2);
const n = parseInt(args[0]);

let fact=1;
for(let i=2;i<=n;i++){
    fact*=i;
}
console.log(fact);