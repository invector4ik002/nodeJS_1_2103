let express = require('express') //DOC express
let fs = require('fs') //filestream //DOC node JS
let server = express()

//routers
let cartRouter = require('./router/cart_router')


//use
server.use(express.json())
server.use('/cart', cartRouter)

server.get('/catalog', (req, res) => {
    //res.send('Hello User')
    fs.readFile('./server/database/catalog.json', 'utf-8', (err, data) => {
        if (!err) {
            res.send(data)
        } else {
            res.sendStatus(404)
        }
    })
}) //http://localhost:8080/
//server.get('/home') //http://localhost:8080/home/


// '/cart'


server.listen(8080, () => { console.log('server is ON @ 8080') })