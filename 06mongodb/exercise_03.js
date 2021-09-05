const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongo-exercises')
    .then(()=>{console.log("Connected Successfully")})
    .catch(err=>{console.log("Connection Error :",err)});

const course_schema = new mongoose.Schema({
    _id:String,
    name:String,
    author:String,
    isPublished:Boolean,
    price:Number,
    tags:[String],
    date:{type:Date,default:Date.now}
});

const Course = new mongoose.model('courses',course_schema);

async function getCourses(){
    return await Course.find({isPublished:true})
                                .or([{name:/.*by.*/i },{price:{$gte:15}}]);
}

// async function updateById(id){
//     const course = await Course.findById(id);
//     if(!course) return "Invalid Value";

//     course.isPublished = true;
//     course.author="test Change";

//     return await course.save();
// }

// async function updateById(id){
//     const result = await Course.findByIdAndUpdate(id,{
//         $set:{
//             author:'Mosh',
//             isPublished:true
//         }
//     },{new:true});
//     return result;
// }
async function deleteRecord(id){
    // const result = await Course.deleteOne({_id:id});
    const result = await Course.findByIdAndDelete(id);
    return result;
}

async function run(){
    // const course = await getCourses();
    // const course = await updateById("5a68fdf95db93f6477053ddd");
    const course = await deleteRecord("5a68fdf95db93f6477053ddd");
    console.log(course);
}

run()