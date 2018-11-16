var House={
	Flats:[
		{
			Square:100,
			Floor:2,
			Number:1,
			Peoples:[
			{
				name:"Vlad",
				Age:20
			},
			{
				name:"Alex",
				Age:30
			},
			{
				name:"Nastya",
				Age:25
			},
			]
		},
		{
			Square:30,
			Floor:3,
			Number:2,
			Peoples:[
			{
				name:"Mary",
				Age:27
			},
			{
				name:"Max",
				Age:23
			},
			]
		},
		{
			Square:50,
			Floor:6,
			Number:3,
			Peoples:[
			{
				name:"Misha",
				Age:3
			},
			{
				name:"Helen",
				Age:30
			},
			{
				name:"Sveta",
				Age:45
			},
			]
		},
		{
			Square:15,
			Floor:9,
			Number:4,
			Peoples:[
			{
				name:"Dima",
				Age:22
			}
			]
		}
	],
	
	addPeople:function(number,name,age){
		if(this.Flats[number-1]){
			this.Flats[number-1].Peoples.push({name,age})
		}else{console.log("Number not found!")}
	},
	deletePeople:function(number,name){
		if(this.Flats[number-1]){
		this.Flats[number-1].Peoples=this.Flats[number-1].Peoples=this.Flats[number-1].Peoples.filter((el)=>el.name!=name)		
	
		}else{console.log("Number not found!")}

	},
	cleanAllPeoples:function(number){
		if(this.Flats[number-1]){
			this.Flats[number-1].Peoples=[]

		}else{console.log("Number not found!")}
	}

}

House.addPeople(2,"Vladik",21)
House.deletePeople(2,"Max")	
House.cleanAllPeoples(3)
console.log(House)
