const app = require('./src/app')

const dotenv = require("dotenv");
dotenv.config();

const dbconnect = require('./src/db/db')
dbconnect()

const port  = process.env.PORT;

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
})