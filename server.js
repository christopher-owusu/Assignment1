const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

const students = [
    {
        "name": "Kelvin Owusu",
        "dob": "19/10/1999",
        "program": "BSC ICTD",
        "level": "400",
        "image": "/images/ch.jpeg"
    },
    {
        "name": "Amankwah Seth",
        "dob": "19/10/1999",
        "program": "BSC CS",
        "level": "200",
        "image": "/images/ma.jpeg"
    },
    {
        "name": "Richmond Maa",
        "dob": "19/10/1999",
        "program": "BSC IT",
        "level": "300",
        "image": "/images/to.jpeg"
    }
]


app.get('/', (req, res)=>{
    res.render("home", {
        students
    });
});


app.get('/student/:id', (req, res)=>{
       const id = req.params.id;
       const student = students[id];
    res.render("details", {
        student,
        title: 'Details'
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`Server is listening on port ${PORT}`);
});

