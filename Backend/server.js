require('dotenv').config()


const express = require('express')
const app = express()
const port = process.env.PORT
const path = require('path')
const cors = require('cors')

const morgan = require('morgan');


// MIDDLEWARES ----
app.use(cors())
app.use(morgan("default"));
console.log()

app.use(express.static(path.join(__dirname, '../frontend',"public")))








app.listen(port, () => {
  console.log(` app listening on port ${port}`)
})