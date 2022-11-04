let express = require('express');
let app = express();
let path = require('path');
let PORT= 3000;

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname,'public')));

app.get('/',(req, res)=>{
    res.render('page/home');
})

app.listen(PORT, ()=>{
    console.log('servidor askSuite rodando');
});