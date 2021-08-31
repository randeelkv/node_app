const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());

const port_no = process.env.PORT || 3010;

const courses = [
    {id:1,name:"SAP Fiori"},
    {id:2,name:"Javascript essentials"},
    {id:3,name:"GIT for SAP"}
];
const course_schema = Joi.object({
    name:Joi.string().min(3).required()
});

app.get('/',(req,res)=>{
    res.send('hello world');
});

app.get('/api/courses',(req,res)=>{
    res.send(courses);
});

app.post('/api/courses',(req,res)=>{
    const result = course_schema.validate(req.body);
    if(result.error) return res.status(400).send(result.error.details[0].message);
    const course = {
        id : courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});


app.put('/api/courses/:id',(req,res)=>{
    //lookup for course
    //if not available return 404
    const course =  courses.find(c => c.id === parseInt(req.params.id));
    if(!course) return res.status(404).send('The Course not found');

    //validate request
    //if not valid return 400
    const { error} = course_schema.validate(req.body);
    if(error)return res.status(400).send(error.details[0].message);
    //update record
    course.name = req.body.name;
    //return updated value
    res.send(course);
});

app.get('/api/courses/:id',(req,res)=>{
    const course =  courses.find(c => c.id === parseInt(req.params.id));
    if(!course){
        return res.status(404).send('The Course not found');
    }else{
        res.send(course);
    }
    res.send(req.query);
});

app.delete('/api/courses/:id',(req,res)=>{
    const course =  courses.find(c => c.id === parseInt(req.params.id));
    if(!course) return res.status(404).send('The Course not found');
    
    const index = courses.indexOf(course);
    courses.splice(index,1);

    res.send(course);
});

app.listen(port_no,()=>{
    console.log(`Listening to port ${port_no}`);
});