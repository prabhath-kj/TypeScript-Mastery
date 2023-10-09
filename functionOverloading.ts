// one way of function overloading

// function add(num1:number|string,num2:number|string):number|string{
//    if(typeof num1=="string"|| typeof num2=="string"){
//     return num1+""+num2;
//    }else{
//     return num1+num2;
//    }
// }


// add(2,2)
// add("2","2")


//second way

function add(num1:number,num2:number):number
function add(num1:string,num2:string):string
function add(num1:any,num2:any):any{
    return num1+num2
}

add(2,2)
add("2","2")