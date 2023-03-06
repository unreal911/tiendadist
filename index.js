const express = require('express')
const cors = require('cors')
const app = express()
const path = require('path')
const port = 3000
app.use(cors())
app.use(express.static(__dirname + '/public'))

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './public/index.html'))
})
app.get('/', (req, res) => {
    console.log(path.resolve(__dirname, '/public/index.html'))

})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))