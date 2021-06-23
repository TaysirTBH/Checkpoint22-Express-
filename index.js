const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const exphbs = require('express-handlebars');
app.use(express.static(__dirname+ "/public"));

const port = process.env.PORT || 5000;
app.listen(port, (err)=>{
    if (err) throw err;
    console.log(`Listening to server: http://localhost:${port}`);
});

//Handlebars setting
app.set("view engine", "hbs");
app.engine("hbs", exphbs({
    extname = "hbs",
    defaultLayout: 'index',
    layoutsDir : __dirname + '/views/layouts',
    partialsDir : __dirname+ '/views/partials',


}))
//Landing page
app.get('/', (req,res)=>{
    res.send('Hello!!');
});

