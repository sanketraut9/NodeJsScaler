const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/testDatabase').then(()=> console.log('Connection is successfull')).catch(err => console.error('Coudnt connect to mongoDb', err))


//Schema

const courseSchema = new mongoose.Schema({
    name: String,
    creator: String,
    publishDate: {type:Date, default:Date.now},
    isPublished: Boolean
})


//Model

const Course = mongoose.model('couse', courseSchema)

async function createCourse(){
    const course = new Course({
        name:'JavaScript',
        creator:'Sanket',
        isPublished: true
    })
    
    const result = await course.save()
    console.log(result);
}


async function getCourses(){
    const courses  = await Course.find({creator:'Sanket'}).select({name:1, publishDate:1}).sort({name:1})
    console.log(courses);
}


// createCourse()
getCourses()