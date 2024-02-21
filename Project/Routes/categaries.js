const express = require('express');
const Joi = require('joi');
const router = express.Router();
const joi = require('joi')




const categaries = [
    {id : 1, name:'Web'},
    {id : 2, name:'Mobile'},
    {id : 3, name:'Photography'}
]


router.get('/api/categary', (req, res) =>{
    res.send(categaries);
})


router.post('/api/categary', (req, res) =>{


    const {error} = validateData(req.body)
    if(error) res.status(400).send(error.details[0].message)

    const categary = {
        id: categaries.length + 1,
        name: req.body.name
    };
    categaries.push(categary)
    res.send(categary)
});

router.put('/api/categary/:id', (req, res) =>{
    const categary = categaries.find(c => c.id === parseInt(req.params.id));

    if(!categary) return res.status(404).send('The category with the given Id was not present')

    categary.name = req.body.name;
    res.send(categary)
});

router.delete('/api/categary/:id', (req, res) =>{
    const categary = categaries.find(c => c.id === parseInt(req.params.id));

    if(!categary) return res.status(404).send('The category with the given Id was not present')

    const index = categaries.indexOf(categary);
    categaries.splice(index, 1);
    res.send(categary)
});

router.get('/api/categary/:id', (req, res) =>{
    const categary = categaries.find(c => c.id === parseInt(req.params.id));

    if(!categary) return res.status(404).send('The category with the given Id was not present')
    res.send(categary)
});




function validateData(categary){
    const schema = {
        name: Joi.string().min(3).required('')
    }
    return Joi.validate(categary, schema)
}


module.exports = router; 