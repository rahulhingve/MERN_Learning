// interface User {
//     name: string,
//     age:number,
//     email:String,


// }


// type updateProps = Pick<User,"name"|"age">

// type optionalProps = Partial<updateProps>

// function updatetheprops(updatedprops:optionalProps){


// }

// updatetheprops({
//     name:"rahul",
//     age:20,
    
// })

// function sumOfAge(user1:User,user2:User){

//     return user1.age+user2.age;

// }

// const ans = sumOfAge({name:"tango",age:20},{name:"charlie",age:18});
// console.log(ans)

import { z } from "zod";
import  express  from "express";








const userProSchema = z.object({
    
})