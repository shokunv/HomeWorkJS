var dat=new Date();
var dat2=new Date(dat.getFullYear(),dat.getMonth(),dat.getDate()+1);
var ost=dat2-dat;
alert("До конца дня осталось "+Math.round(ost/1000/60)+" минут");