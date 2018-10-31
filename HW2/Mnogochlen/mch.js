var n=prompt("Vvedite N:");
n=Number(n);
var a0=prompt("Vvedite a0:");
a0=Number(a0);
var x=prompt("Vvedite x:");
x=Number(x);
var rez=0;
for(i=0;i<=n;i++){
	
	rez+=a0*i*x**i;
}
console.log(a0+rez);