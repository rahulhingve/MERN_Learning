// write a function to create a users table in your database.
import { Client } from 'pg'
 
const client = new Client({
  connectionString: "postgresql://postgres:rahul@localhost/postgres"
})

async function insertUsersTable(username:string,password:string,email:string) {
    await client.connect()
    // const result = await client.query(`
    //     INSERT INTO users (username, password , email)
    //     VALUES ('${username}','${password}','${email}')
    // `) THIS ONE IS PRON TO SQL INJECTION WE WONT LET RUN SQL QUERIES
    const result = await client.query(`
        INSERT INTO users (username, password , email)
        VALUES ($1,$2,$3)
    `,[username,password,email])
    console.log(result)
}

insertUsersTable("rahul1","rahul1","rahul1@gmail.com");