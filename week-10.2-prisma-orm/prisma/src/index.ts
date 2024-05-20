import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(username:string,password:string,firstName:string,lastName:string){

const res = await  prisma.user.create({
    data: {
        email: username,
        password,
        firstName,
        lastName
    }
})
console.log(res)

}
insertUser("rahul1@gmail.com","password", "rahul","pawar")