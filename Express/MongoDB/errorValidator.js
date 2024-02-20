//Error Validator


const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1/testdata').then(()=> console.log('connection  is successfull')).catch((err) => console.error('Coudnt connect to mongoDb', err));



const courseSchema = new mongoose.Schema({
    name: {type:String, required:true, minlength:5, maxlength: 15},

    //Custom validator
    tags:{type:Array, validate:{
        validator:function(tags){
           return tags.length > 1
        }
    }}  ,                          

    category:{
        type: String,
        required:true,
        enum: ['DSA', 'Web', 'Mobile', 'Data science']
    },
    creator: {type:String, required:true},
    publishedDate: {type:Date, default:Date.now},
    isPublished: {type:Boolean, required:true},
    rating: {type:Number, required:function(){return this.isPublished}},
})


//Model

const Course = mongoose.model('Class', courseSchema)

async function createCourse(){
    const course = new Course({
        name:'JavaScript',
        tags:['express', 'vue'],
        category: 'Mobile',
        creator:'Sara',
        isPublished: true,
        rating: 4.3
    })       //create



    ////Validation: if data is incomplete it gives erro2
    try { 
        // await course.validate()

        const result = await course.save()
        console.log(result);

    } catch (error) {
        for(field in error.errors){                     ////Error Validator
            console.log(error.errors[field]);
        }
    }
        
}

createCourse()
