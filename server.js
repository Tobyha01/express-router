const express = require("express")
const app = express()
const port = 3000
const fruitsRouter = require("./routes/fruits")
const fruitsRouter = require("./routes/users")
// Express Routes




app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
