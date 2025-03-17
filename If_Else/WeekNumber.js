const args=process.argv.slice(2);
let number=parseInt(args[0]);
if(number==0)
    console.log("Sunday");
if(number==1)
    console.log("Monday");
if(number==2)
    console.log("Tuesday");
if(number==3)
    console.log("Wednesday");
if(number==4)
    console.log("Thursday");
if(number==5)
    console.log("Friday");
if(number==6)
    console.log("Saturday");