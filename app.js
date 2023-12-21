//web server
const express = require('express');
const bodyParser = require('body-parser');
const {Pool} = require('pg');
var path = require('path');

const app =express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//connect to Postgress
const pool = new Pool({
    user: 'postgres',
    host:'localhost',
    database:'test',
    password: '102019',
    port: 5432,
})
app.get('/', (req,res) => {
    res.send(`Hello World`)
})
//handle form submission
app.post('/registration', async(req, res) => {
    try {
        const {dg1, dg2} = req.body;

        const result = await pool.query('INSERT INTO patient (todaydate, rootsemail) VALUES ($1, $2)', [dg1, dg2]);

        console.log(result.rows[0]);

        res.send('Form submitted successfully!');
    } catch(error){
        console.error('Error processing form data:', error);
        res.status(500).send('Internal Server Error');
    }
})
//listen on the port
app.listen(port, () => {
    console.log(`Intake form is running on port${port}`)
})
