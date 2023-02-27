const express = require("express")
const router = express.Router()

let fruits = [
    {
        name: "Apple",
        color: "Red"
    },
    {
        name: "Banana",
        color: "Yellow"
    },
    {
        name: "Kiwi",
        color: "Green"
    },
    {
        name: "Grape",
        color: "Purple"
    },
]
router.use(express.json())
router.post("/", function(request, response) {
    try{
        fruits.push(request.body)
        response.status(200).send(fruits)
    }
    catch(error){
        response.status(500).send({error: error.message})
    }
})

router.get("/", function(request, response) {
    try{
        response.status(200).send(fruits)
    }
    catch(error){
        response.status(500).send({error: error.message})
    }
})

router.get("/:id", function(request, response) {
    try{
        const fruit = fruits[request.params.id -1]
        response.status(200).send(fruit)
    }
    catch(error){
        response.status(500).send({error: error.message})
    }
})

module.exports = router