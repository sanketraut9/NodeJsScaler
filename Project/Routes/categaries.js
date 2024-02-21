const express = require('express');
const Joi = require('joi');
const router = express.Router();
const mongoose = require('mongoose')



const categorySchema = new mongoose.Schema({
    name:{type:String, required: true, minlength: 3, maxlength:20}
})

const Category = mongoose.model('Category', categorySchema)

// const categaries = [
//     {id : 1, name:'Web'},
//     {id : 2, name:'Mobile'},
//     {id : 3, name:'Photography'}
// ]


router.get('/api/categories', async (req, res) =>{
    let categories = await Category.find()
    res.send(categories);
})


router.post('/api/categories', async (req, res) =>{

    const {error} = validateData(req.body)
    if(error) res.status(400).send(error.details[0].message)

    const category = new Category({
        name: req.body.name
    });
    await category.save();
    res.send(category)
});

router.put('/api/categories/:id', async (req, res) =>{
const category = await Category.findByIdAndUpdate(req.params.id, {name: req.body.name}, {new: true})

    if(!category) return res.status(404).send('The category with the given Id was not present')

    const {error} = validateData(req.body)
    if(error) res.status(400).send(error.details[0].message)

    res.send(category)
});

router.delete('/api/categories/:id', async (req, res) =>{
    const category = await Category.findByIdAndDelete(req.params.id)
    // find(c => c.id === parseInt(req.params.id));

    if(!category) return res.status(404).send('The category with the given Id was not present')

    res.send(category)
});

router.get('/api/categories/:id', async (req, res) =>{
    const category = await Category.findById(req.params.id)
    if(!category) return res.status(404).send('The category with the given Id was not present')
    res.send(category)
});




function validateData(category){
    const schema = Joi.object({
        name: Joi.string().min(3).required()
    });
    return schema.validate(category)
}


module.exports = router; 