const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/testDatabase').then(()=> console.log('Connection is successfull')).catch(err => console.error('Coudnt connect to mongoDb', err))


//Schema

const courseSchema = new mongoose.Schema({
    name: String,
    creator: String,
    publishDate: {type:Date, default:Date.now},
    isPublished: Boolean,
    rating:Number
})


//Model

const Course = mongoose.model('couse', courseSchema)

async function createCourse(){
    const course = new Course({
        name:'python',
        creator:'Ron',
        isPublished: true,
        rating: 2.2
    })       //create
    
    const result = await course.save()
    console.log(result);
}

// createCourse()

//Comparision operator::
// eq(equal) // gt(greater than) // gte(greater than equal)
// lt(less than)  // lte(less than equal)  // in   //not in

// Logical operatore::
// or     //and

async function getCourses(){
    const courses  = await Course.find({rating : {$in : [2.2, 3.2]}}).select({name:1, publishDate:1}).or([{creator:'Dyana'}, {rating: 3.2}])
    console.log(courses);
}        //reading

// getCourses()



//UpdateCourse

async function updateCourse(id){
    let course = await Course.findById(id)

    if(!course) return;

    course.name = 'mongodb'
    course.creator = 'sam'

    const updatedCourse = await course.save()

    console.log(updatedCourse);
}         //updating

// updateCourse('65ce0342cdb196e950993dd7')






//Delete

async function deleteCourse(id){
    let course = await Course.findByIdAndDelete(id)
    
    console.log(course);
}

deleteCourse('65ce03551cbdfbfdef015e75')