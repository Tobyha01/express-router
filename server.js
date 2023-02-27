const express = require("express")
const app = express()
const port = 3000
const fruitsRouter = require("./routes/fruits")
const usersRouter = require("./routes/users")

// Express Routes
app.use("/fruits", fruitsRouter)
app.use("/users", usersRouter)

app.listen(port, () => {
    console.log(`App listening on port http://localhost:${port}/fruits`)
    console.log(`App listening on port http://localhost:${port}/users`)
})
