require('./db');
const express = require('express')
var cors = require('cors') 


const app = express()
const port = 5000

app.use(cors())
app.use(express.json())

// Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))


app.listen(port, () => {
  console.log(`iNotebook backend listening at http://localhost:${port}`)
})

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQxMGMyOWE3NDgzMTg0YzQ1YTc3OGQ3In0sImlhdCI6MTY3ODgyNDcxMn0.5gmEjWhg52ICWJ_vyRE0g__-GAqO2zuaEHHcmrhMULY