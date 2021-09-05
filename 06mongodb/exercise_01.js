const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongo-exercises')
    .then(()=> console.log('Connected to Mongodb'))
    .catch(err => console.log('Connection error',err));

const schema_course = new mongoose.Schema({
        name:String,
        author:String,
        tags:[String],
        date:{type:Date , default:Date.now},
        isPublished:Boolean,
        price:Number
    });

const Course = new mongoose.model('courses',schema_course);

async function getCourses(){
    return await Course.find({isPublished:true,tags:"backend"}).sort({name:1}).select({name:1,author:1});
}

async function run(){
    const courses = await getCourses();
    console.log(courses);
}

run();