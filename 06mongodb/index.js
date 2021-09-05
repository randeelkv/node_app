const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
    .then(()=> console.log('Connected to Mongodb'))
    .catch(err => console.log('Connection error',err));

const schema_course = new mongoose.Schema({
    name:String,
    author:String,
    tags:[String],
    date:{type:Date , default:Date.now},
    is_published:Boolean
});

const Course = mongoose.model('Course',schema_course);

async function createCourse(){

const course_01 = new Course({
    name:"ReactJS",
    author:"randeelkv",
    tags:["reactjs","frontend"],
    is_published:true
});

const result = await course_01.save();
console.log(result);
}

async function getCourses(){
    const courses = await Course
        .find({author:"randeelkv"})
        .sort({name:1})
        .select({name:1,author:1})
    console.log(courses);
}

getCourses();