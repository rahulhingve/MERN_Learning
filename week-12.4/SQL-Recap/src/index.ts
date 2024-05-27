// write a function to create a users table in your database.
import { Client } from 'pg'
 
const client = new Client({
  connectionString: "postgresql://postgres:rahul@localhost/postgres"
})

async function insertUsersTable(username:string,password:string,email:string) {
    await client.connect()
    const result = await client.query(`
        INSERT INTO users (username, password , email)
        VALUES ('${username}','${password}','${email}')
    `)
    console.log(result)
}

insertUsersTable("rahul","rahul","rahul@gmail.com");