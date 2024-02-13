const express = require('express')
screen = require('./screen')
const app = express()

app.get('/employees', (req, res) => {
    res.send('hello world')
    console.log()
})

const port = 3080;
app.listen(port, function (){
    screen.clear();
    screen.write('Se activo el puerto', port)
})
