type personDetails={
    name:string;
    age:number;
    place:string;
}


let person:personDetails={
    name:"prabhath",
    age:25,
    place:"cherthala"
}

function getPerson(person:personDetails):string{
    return person.name
}

const resultPerson=getPerson(person)
