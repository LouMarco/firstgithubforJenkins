const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World! Changed!!! \nProject NOT IN git directory!!! \nand changed in github!!!\nand changed in ATOM on the desktop!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
