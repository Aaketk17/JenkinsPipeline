const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const server = require('http').createServer(app)
const bodyParser = require('body-parser')

app.use(cors())
app.use(morgan('common'))
app.use(express.json())

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Helllo this is a sample route')
})

app.get('/sample', (req, res) => {
  res.json({
    body: 'This is a second route',
    code: 200,
  })
})

server.listen(8000, () => {
  console.log(`Server is listing at port Number 8000`)
})
