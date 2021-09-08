var scoreMath = 80;
var scoreSimon = 45;
var limit = 51;
if((scoreMath >= limit) && (scoreSimon >= limit)){
    console.log("Both Students passed the examn!");
    console.log("Math Score: "+ scoreMath);
    console.log("Simon score: " + scoreSimon);
}
else if((scoreMath >= limit)){
    console.log("Math pass the exam!");
    console.log("Math Score: "+ scoreMath);
}
else if((scoreSimon >= limit)){
    console.log("Simon pass the examn!");
    console.log("Simon score: " + scoreSimon);

}
else{
    console.log("Both student failed the exam!");
}


