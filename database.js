const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456789',
    database: 'clones',
    connectionlimt:10
});
connection.query('select * from clone',(err,result,fields)=>{
    if(err){
        return console.log(err)
    }
    return console.log(result);
})
connection.end();
  