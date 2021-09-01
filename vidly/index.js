const Joi = require('joi')
const express = require('express');
const app = express();

app.use(express.json());

let port = process.env.PORT || 3010;

const genres = [
    {id:1, name :"Biography"},
    {id:2, name :"thriller"},
    {id:3, name :"funny"},
];
const genre_schema =  Joi.object({
    name:Joi.string().min(4).required()
})

app.get('/',(req,res)=>{
    res.send('Hello Vidly');
});

app.get('/api/genres',(req,res)=>{
    res.send(genres);
});

app.get('/api/genres/:id',(req,res)=>{
    const genre = genres.find(g => g.id === parseInt(req.params.id));
    if(!genre) return res.status(404).send('Genre Could not Found');
    else return res.send(genre);
});

app.post('/api/genres/',(req,res)=>{
    const {error} = genre_schema.validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    
    const genre = {
        id : genres.length + 1,
        name: req.body.name
    }
    genres.push(genre);
    res.send(genre);
});

app.put('/api/genres/:id',(req,res)=>{
    const genre = genres.find(g => g.id === parseInt(req.params.id));
    if(!genre) return res.status(404).send('Genre Could not Found');


    const {error} = genre_schema.validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    genre.name = req.body.name;
    res.send(genre);
});


app.delete('/api/genres/:id',(req,res)=>{
    const genre = genres.find(g => g.id === parseInt(req.params.id));
    if(!genre) return res.status(404).send('Genre Could not Found');
    
    const index = genres.indexOf(genre);
    genres.splice(index,1);

    res.send(genre);
});

app.listen(port,()=>{
    console.log(`you are listening to ${port}`);
});