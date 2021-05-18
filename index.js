const mongoose= require('mongoose');
mongoose.connect('mongodb://localhost:27017/movieApp', {useNewUrlParser: true, useUnifiedTopology:true})
.then(()=>{
    console.log("connection open!!")
}) .catch((err)=>{
    console.log("oh no error found")
    console.log(err)
})

const movieSchema= new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
})

const Movie= mongoose.model('Movie',movieSchema);

// Movie.insertMany([
//     {title: 'Amelie', year: 2001,score:8.3, rating: 'R'},
//     {title: 'Alien',year: 1979, score:8.1, rating: 'R'},
//     {title: 'The Iron Gaint',year: 1999,score: 7.5,rating: 'PG'},
//     {title: 'Stand By Me', year: 1986, score: 7.3, rating:'PG-13'}
// ]).then(data=>{
//     console.log("it worked");
//     console.log(data);
// })