import { PrismaClient } from "@prisma/client";



const prisma = new PrismaClient();

// async function insertUser(username:string,password:string,firstName:string,lastName:string,email:string){
//    const userData = await prisma.user.create({
//       data:{
//         username,
//         password,
//         firstName,
//         lastName,
//         email
//       }
//     })
//     console.log(userData);
// }

// insertUser('rahul','rahul','rahul','rahul','rahul');
/////////////////////////////////////////////////////////////////////////////////////////////////////////



// interface UpdateParams {
//     firstName: string;
//     lastName: string;
// }

// async function updateUser(username: string, {

//     firstName,
//     lastName
// }: UpdateParams) {

//     const updateData = await prisma.user.update({
//         where:{username},
//         data:{
//             firstName,
//             lastName
//         }
//     });
//     console.log(updateData);
// }
// updateUser('rahul',{
//     firstName:"rahulboltey",
//     lastName:"ha sahi bat hai"
// })

async function getUser(username:string) {

    const findUser = await prisma.user.findFirst({
        where :{username}
        
    })
    console.log(findUser)
}

getUser('rahul');