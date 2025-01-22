const app = require('./src/app')
const dbconnect = require('./src/db/db')
dbconnect()



app.listen(3000, ()=>{
    console.log("Server running on port 3000")
})