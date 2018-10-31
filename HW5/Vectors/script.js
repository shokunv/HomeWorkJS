var filtered=[];
var arr=[];

for (var i=0;i<30000;i++){
	arr.push({
		x:Math.round(Math.random()*20-10),
		y:Math.round(Math.random()*20-10),
		z:Math.round(Math.random()*20-10)
	})
}
filtered=arr.filter(el=>el.x>=-1&&el.x<=1&&el.y>0&&el.z>0);
filtered=filtered.filter(el=>{
var dl=Math.sqrt(el.x**2+el.y**2+el.z**2)
return	dl>=0&&dl<=3
})
var lenA,lenB;
sorted=filtered.sort((a,b)=>{
	lenA=Math.sqrt(a.x**2+a.y**2+a.z**2);
	lenB=Math.sqrt(b.x**2+b.y**2+b.z**2);
	return lenA>lenB
});
sliced=sorted.slice(sorted.length/2,sorted.length);
var result;
result= sliced.reduce((obj,next)=>{
	return {
		x:obj.x+=next.x,
		y:obj.y+=next.y,
		z:obj.z+=next.z
	}
})
console.log(result)