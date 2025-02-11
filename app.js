const express = require("express")
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.get('/', (req, res)=>{
    res.render('books');
});

app.listen(3000, ()=>{
    console.log("Your app is running on http://localhost:3000");
})