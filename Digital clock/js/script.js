const clock=document.querySelector(".clock");


function run_clock()
{




    var time=new Date();


var hrs=new Date().getHours();

var min=new Date().getMinutes();

var sec=new Date().getSeconds();

var txt ="AM";

if(hrs>12)
{
    hrs=hrs-12;
    txt="PM";
}
else if(hrs==0)
{
    hrs=12;
    txt="AM";
}

hrs=hrs<10?'0'+hrs:hrs;
min=min<10?'0'+min:min;
sec=sec<10?'0'+sec:sec;

 clock.innerHTML=`${hrs} : ${min}: ${sec} ${txt}`;
}

run_clock();
setInterval(run_clock,1000);


