// app.js
const mysql = require('mysql');

// First you need to create a connection to the db
const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'test1test',
  database: 'mysql'
});

con.connect((err) => {
  if(err){
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});

con.query('SELECT * FROM employees', (err,rows) => {
  if(err) throw err;

  console.log('Data received from Db:\n');
  console.log(rows);
  rows.forEach( (row) => { 
    console.log(`${row.name} is in ${row.location}`); 
  });
});

con.query("INSERT INTO customers (name, location) VALUES ('Brett', 'United States')", (err,rows) => {
  if(err) throw err;
  console.log('Data received from Db:\n');
  console.log(rows);
  rows.forEach( (row) => { 
    console.log(`${row.name} is in ${row.location}`); 
  });
});

con.query('SELECT * FROM employees', (err,rows) => {
  if(err) throw err;

  console.log('Data received from Db:\n');
  console.log(rows);
  rows.forEach( (row) => { 
  	console.log(`${row.name} is in ${row.location}`); 
  });
});

con.end((err) => {
  // The connection is terminated gracefully
  // Ensures all previously enqueued queries are still
  // before sending a COM_QUIT packet to the MySQL server.
});





