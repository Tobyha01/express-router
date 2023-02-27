const express = require("express")
const router = express.Router()
let users = [
    {
        name: "User 1",
        age: 30
    },
    {
        name: "User 2",
        age: 45
    },
    {
        name: "User 3",
        age: 27
    },
    {
        name: "User 4",
        age: 22
    }
]

router.get("/", function(request, require) {
    try{
        response.status(200).send(users)
    }
    catch(error){
     response.status(500).send({error: error.message})
    }
})

router.get("/:id", function(request, response) {
    try{
        const user = users[request.params.id -1]
        response.status(200).send(user)
    }
    catch(error){
        response.status(500).send({error: error.message})
    }
})

module.exports = router