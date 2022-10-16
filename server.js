let express = require('express');
let app = express();
let Port= 8080;

app.set('view engine', 'ejs');

app.get('/',(req, res)=>{
    res.render('page/home');
})

app.listen(Port, ()=>{
    console.log('servidor askSuite rodando');
});