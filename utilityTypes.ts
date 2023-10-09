//Readonly

// type User={
//   name:string;
//   age:number;
// }


// const user:Readonly<User>={
//     name:"pppp",
//     age:23
// }

//Required

// type User={
//     name:string;
//     age?:number;
//   }
  
  
//   const user:Required<User>={
//       name:"pppp",
//       age:23
//   }


//Partial

// type User={
//     name:string;
//     age:number;
//   }
  
  
//   const user:Partial<User>={
//       name:"pppp",
//       age:23
//   }

  //Pick

//   type User={
//     name:string;
//     age:number;
//   }
  
  
//   const user:Pick<User,"age">={
//       age:23
//   }


// Omit 

type User={
    name:string;
    age:number;
  }
  
  
  const user:Omit<User,"age">={
      name:"gg"
  }

  //Record

  type Food =Record<string,string>

  const food:Food={
    chiken:"good"
  }