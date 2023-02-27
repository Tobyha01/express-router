const express = require("express")
const router = express.Router()
const {check, validationResult} = require("express-validator")

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
router.post("/", [check("color").trim().not().isEmpty()], function(request, response) {
    try{
        fruits.push(request.body)
        const errors = validationResult(request)
        // 'Result'[errors][0]['msg'] = 'test'
        if(!errors.isEmpty()){
            response.status(400).send(errors)
        }
        else{
            response.status(200).send(fruits)
        }
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

router.put("/:id", function(request, response) {
    try{
        // let fruit = fruits[request.params.id -1]
        // fruit = request.body
        fruits[request.params.id -1] = request.body
        response.status(200).send(fruits)
    }
    catch(error){
        response.status(500).send({error: error.message})
    }
})

router.delete("/:id", function(request, response) {
    try{
        const fruit = fruits.splice([request.params.id -1], 1)
        response.status(200).send({fruit, fruits})
    }
    catch(error){
        response.status(500).send({error: error.message})
    }
})

module.exports = router