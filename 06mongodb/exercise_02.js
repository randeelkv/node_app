const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongo-exercises')
    .then(()=>{console.log("Connected Successfully")})
    .catch(err=>{console.log("Connection Error :",err)});

const course_schema = new mongoose.Schema({
    name:String,
    author:String,
    isPublished:Boolean,
    price:Number,
    tags:[String],
    date:{type:Date,default:Date.now}
});

const Course = new mongoose.model('courses',course_schema);

async function getCourses(){
    return await Course.find({isPublished:true,tags:{$in:['frontend','backend']}})
                            // .or([{tags:'frontend'},{tags:'backend'}]) // other solution
                            .sort({price:-1})
                            .select('name author');
}

async function run(){
    const course = await getCourses();
    console.log(course);
}

run()