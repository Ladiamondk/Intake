/*setting up the database 
Initialize the client - npm init -y
install postgres package - npm install pg
install express.js package - npm install express*/
const {client} = require('pg');

const client = new client({
    host: 'localhost',
    user: 'postgres',
    port: 5432,
    password: "rootUser",
    database: 'postgres'
})

client.connect();

client.query(`Select * from users`, (err, req) => {
    if(!err){
        console.log();
    }
})
