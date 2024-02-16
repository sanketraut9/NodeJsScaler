
const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1/testdata').then(()=> console.log('connection  is successfull')).catch((err) => console.error('Coudnt connect to mongoDb', err));



const courseSchema = new mongoose.Schema({
    name: {type:String, required:true, minlength:5, maxlength: 15},
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
        name:'Groovy',
        category: 'Data science',
        creator:'Sara',
        isPublished: true,
        rating: 3.8
    })       //create



    ////Validation: if data is incomplete it gives erro2
    try { 
        // await course.validate()

        const result = await course.save()
        console.log(result);

    } catch (error) {
        console.error(error.message);
    }
        
}

createCourse()
