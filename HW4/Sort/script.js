
var people={
	table:[
	{
		name:"Alex",
		age:"30",
		city:"Minsk",
		print:function(){
		console.log(`${this.name}-${this.city}-${this.age}`);
	}
},
{
		name:"Mary",
		age:"27",
		city:"Milan",
		print:function(){
		console.log(`${this.name}-${this.city}-${this.age}`);
	}
},
{
		name:"Dima",
		age:"18",
		city:"Rechitsa",
		print:function(){
		console.log(`${this.name}-${this.city}-${this.age}`);
	}
},
{
		name:"Vova",
		age:"50",
		city:"LA",
		print:function(){
		console.log(`${this.name}-${this.city}-${this.age}`);
	}
},
{
		name:"Kate",
		age:"33",
		city:"Moscow",
		print:function(){
		console.log(`${this.name}-${this.city}-${this.age}`);
	}
},
{
		name:"Lisa",
		age:"10",
		city:"NewYork",
		print:function(){
		console.log(`${this.name}-${this.city}-${this.age}`);
	}
},
{
		name:"Vlad",
		age:"60",
		city:"Krakow",
		print:function(){
		console.log(`${this.name}-${this.city}-${this.age}`);
	}
}],

printAll: function(){
	for (var i in this.table){
		this.table[i].print()
	}
}

}
people.table.sort((a,b)=>b.age-a.age)
people.printAll()
