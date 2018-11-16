var Buhgaltery={
	Workers:[
	{
	name:"Maxim",
	age:"29",
	department:"Development",
	salary:600,
	expirience:40,
	print:function(){
		console.log(`${this.name}-${this.salary}`);
	}
	},
	{
	name:"Anton",
	age:"40",
	department:"Security",
	salary:100,
	expirience:3*12,
	print:function(){
		console.log(`${this.name}-${this.salary}`);
	}
	},
	{
	name:"Janet",
	age:"50",
	department:"Cleaning",
	salary:350,
	expirience:5*12,
	print:function(){
		console.log(`${this.name}-${this.salary}`);
	}
	},
	{
	name:"Mary",
	age:"27",
	department:"Development",
	salary:2000,
	expirience:15,
	print:function(){
		console.log(`${this.name}-${this.salary}`);
	}
	},
	{
	name:"Denis",
	age:"40",
	department:"Security",
	salary:800,
	expirience:8*12,
	print:function(){
		console.log(`${this.name}-${this.salary}`);
	}
	},
	{
	name:"Dasha",
	age:"19",
	department:"Development",
	salary:700,
	expirience:10,
	print:function(){
		console.log(`${this.name}-${this.salary}`);
	}
	}],
	
	printAll:function(){
		for (var i in this.Workers){
			this.Workers[i].print()
		}
	},

	addWorker: function(name,age,department,salary,expirience){
		this.Workers.push({name,age,department,salary,expirience,
			print:function(){
				console.log(`${this.name}-${this.salary}`)
			}
		});
	},
	deleteWorkers:function(name){
		for(var i in this.Workers){
			if (this.Workers[i].name==name){
				delete this.Workers[i];
			}
		}
	},
	sortWorkers:function(){
		this.Workers.sort((a,b)=>a.salary-b.salary);
		var sum=this.Workers.reduce((p,c)=>p+c.salary,0)
		console.log("summ zp= "+ sum);
	},
	sortSalary:function(){
		var max=this.Workers.reduce((p,c)=>p.salary>c.salary?p:c,0);
		var min=this.Workers.reduce((p,c)=>p.salary<c.salary?p:c,0);
		var sum=this.Workers.reduce((p,c)=>p+c.salary,0);
		var sred=Math.round(sum/this.Workers.length);
		console.log(`max salary:${max.name}-${max.salary}, min salary:${min.name}-${min.salary}, sred salary=${sred}`)
	},
	

}


Buhgaltery.addWorker("Masha",25,"Security",500,60)
Buhgaltery.deleteWorkers("Mary")
Buhgaltery.sortWorkers()
Buhgaltery.sortSalary()

Buhgaltery.printAll()
