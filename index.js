 
 function func()
 {
 var value1=Math.random();
 value1=Math.ceil(value1*6);

 var value2=Math.random();
value2=Math.ceil(value2*6);

document.querySelector("img.img1").setAttribute("src",
"images/dice"+value1+".png");
document.querySelector("img.img2").setAttribute("src",
"images/dice"+value2+".png");
if(value1===value2)
{
    document.querySelector("h2").innerHTML="DRAW";
}
else{
    if(value1>value2){
        document.querySelector("h2").innerHTML="Player 1 Wins🚩";
    }
    else{
        document.querySelector("h2").innerHTML="Player 2 Wins🚩";
    }
}
 }