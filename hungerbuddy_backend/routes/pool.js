var mysql=require('mysql')
var pool=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'123',
    database:'hungersbuddy',
    multipleStatements:true,
    connectionLimit:100,
})
module.exports=pool
