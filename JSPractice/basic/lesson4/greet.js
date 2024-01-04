//the hour based greeting application

let time=4;

if(time >= 6 && time < 12){
  console.log("Good Morning");
}

else if(time>=12 && time<18){
  console.log("Good Afternoon");
}

else if(time>=18 && time<21){
  console.log("Good Evening");
}

else{
  console.log("Good Night");
}