//dtabase
require("./conncet")

//server
const express = require('express')
const app = express()
const port = 3000

//nothing

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/home',(req,res)=>res.sendFile(__dirname + "/template/index.html"))
app.use(express.static(__dirname + '/template'));


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
