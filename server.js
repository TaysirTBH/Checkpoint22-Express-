const express = require('express');
const app = express();


const port = process.env.PORT || 5000;
app.listen(port, (err)=>{
    if (err) throw err;
    console.log(`Listening to server: http://localhost:${port}`);
});

//EJS setting
app.set("view engine", "ejs");

// middleware & static files
app.use(express.static('public'));

//Custom Middleware 
const day= new Date().getDay();
const hours=new Date().getHours();

app.use((req,res,next)=>{
    day === 0 || day === 6 || 17 <= hours || hours <9 ?
    res.status(423).render('423', { title: 'Error' })
    :next();   // to the next middelware! 
})

//Landing page
app.get('/', (req, res) => {
res.render('index', { title: 'Home' });
});

app.get('/services', (req, res) => {
  res.render('services', { title: 'Services' });
});

app.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact US' });
});