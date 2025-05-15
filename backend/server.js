
import express from 'express';
import  module from 'module';

// const path = require('path');
// const filepath = require('path');



const app = express();
// const PORT = process.env.PORT || 3000;
app.use(express.static('dist'));
app.get('/api/jokes', (req, res) => {
    const jokes = [
        { id: 1, title:'First joke', joke: 'Why did the chicken cross the road? To get to the other side!' },
        { id: 2, title:'Second joke', joke: 'Why don\'t scientists trust atoms? Because they make up everything!' },
        { id: 3, title:'Third joke', joke: 'What do you call fake spaghetti? An !' },
        { id: 4, title:'Fourth joke', joke: 'Why did the scarecrow win an award? Because he was outstanding in his field!' },
        { id: 5, title:'Fifth joke', joke: 'Why don\'t skeletons fight each other? They don\'t have the guts!' },
        { id: 6, title:'Sixth joke', joke: 'What do you call cheese that isn\'t yours? Nacho cheese!' },
        { id: 7, title:'Seventh joke', joke: 'Why did the bicycle fall over? Because it was two-tired!' },
        { id: 8, title:'Eighth joke', joke: 'What do you call a bear with no teeth? A gummy bear!' },
        { id: 9, title:'Ninth joke', joke: 'Why did the math book look sad? Because it had too many problems!' },
        { id: 10, title:'Tenth joke', joke: 'What do you call a fish with no eyes? Fsh!' }
    ];
    res.json(jokes);    
    })



app.listen(5000, () => {
    console.log('Server is running on port 5000');
    })
