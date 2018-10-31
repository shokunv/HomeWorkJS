var str=("(())()(())");
var a=0;
var b=0;
for (var i in str){
	switch(str[i]){
		case "(":a++
		break;
		case ")":b++
		break;
	}};
	if(a==b){
	console.log("true");
}else{console.log("false")}
