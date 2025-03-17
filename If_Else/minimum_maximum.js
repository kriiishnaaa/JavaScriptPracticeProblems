let number1=Math.floor(Math.random()*1000);
let number2=Math.floor(Math.random()*1000);
let number3=Math.floor(Math.random()*1000);
console.log("All three: "+number1+" "+number2+" "+number3);
if(number1<number2){
    if(number2>number3){
        console.log("Maximum of all "+number2);
    }
    else{
        console.log("Maximum of all: "+number3);
    }
}
else{
    if(number1>number3){
        console.log("Maximum of all: "+number1);
    }
    else{
        console.log("Maximum of all: "+number3);
    }
}

if(number1>number2){
    if(number2<number3){
        console.log("Minimum of all "+number2);
    }
    else{
        console.log("Minimum of all: "+number3);
    }
}
else{
    if(number1<number3){
        console.log("Minimum of all: "+number1);
    }
    else{
        console.log("Minimum of all: "+number3);
    }
}