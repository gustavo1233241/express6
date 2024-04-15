const express = require('express')
const mysql = require('mysql2')
const cors = require('cors')
const app = express()
const mysql_config = require('./mysql_config')
const functions = require('./function')
app.listen(3000, ()=>{




    console.log("Servidor no ceu igual teu pai")
})


app.use(cors())

const connection = mysql.createConnection(mysql_config)

app.get('/', (req, res)=>{


connection.query('SELECT * FROM tasks', (err, results)=>{

if(err){

res.json(functions.response('casa caiu igual o avião dos mamonas', "Erro: "+err.message))


}else{


    res.json(functions.response('tue brabo meu em bro', 'tasks listados com sucesso', results))
}



})

})