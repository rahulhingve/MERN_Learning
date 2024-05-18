import { Client } from 'pg'
 
const client = new Client({
    connectionString: ""
})





// async function createUsersTable() {
// await client.connect()
//     const result = await client.query(`
    
//     CREATE TABLE users (
//         id SERIAL PRIMARY KEY,
//         username VARCHAR(50) UNIQUE NOT NULL,
//         email VARCHAR(255) UNIQUE NOT NULL,
//         password VARCHAR(255) NOT NULL,
//         created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
//     );

//     `)
//     console.log(result)
    
// }


async function insertInUserTable(){

await client.connect()

const insertResult = await client.query(`

INSERT INTO users(username, email,password)
VALUES ('rahul','hehe@gmail.com','123@123123');

`)
console.log(insertResult)

}
// createUsersTable();
insertInUserTable()