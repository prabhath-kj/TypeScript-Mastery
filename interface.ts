//ineterface

interface Details{
    name:string;
    age:number;
    getName:()=>void
}

let userData:Details={
    name:"prabhath",
    age:25,
    getName:function () {
        console.log(this.name);
        
    }
}
