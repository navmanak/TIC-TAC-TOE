const express = require('express')
require('dotenv').config()
const app = express()

const port = process.env.PORT || 5000
app.use(express.static('./public'))

app.listen(port, () => {
    console.log('listening on 5000..')
})