const express = require("express")
const router = express.Router()
const {check, validationResult} = require("express-validator")

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

router.use(express.json())

router.post("/", [check("name").trim(" ").not().isEmpty()], async function(request, response) {
    try{
        const user = request.body
        users.push(request.body)
        const errors = validationResult(request)
        if(!errors.isEmpty()){
            response.status(400).send(errors/* , {errors: errors['msg'] = "Please Enter Required Input!"} */)
        }
        else{
            response.status(200).send({user, users})
        }
    }
    catch(error){
        response.status(500).send({error: error.message})
    }
})

router.get("/", function(request, response) {
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

router.put("/:id", function(request, response) {
    try{
        users[request.params.id -1] = request.body
        response.status(200).send(users)
    }
    catch(error){
        response.status(500).send({error: error.message})
    }
})

router.delete("/:id", function(request, response) {
    try{
        const user = users.splice([request.params.id -1], 1)
        response.status(200).send(user) 
    }
    catch(error){
        response.status(500).send({error: error.message})
    }
})

module.exports = router