require('dotenv').config();
let path = require('path');
let express = require('express');
let app = express();
const Router = require('./router');

const mongoose = require('mongoose');
mongoose.connect(process.env.CONNECTBD).then(()=>{
    app.emit('is connected');
    console.log('BD connect com sucesso...');
}).catch((e)=>{ 
    console.log('Erro in connect to BD', e);
});

const MongoStore = require('connect-mongo');
const session = require('express-session');
const flash = require('connect-flash');
const helmet = require('helmet');
const csrf = require('csurf');

const {CSRF} = require('./MIDDLEWARE/csrfMiddle')

app.use(helmet());
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname,'public')));
app.use(express.json());
app.use(session({
    secret: process.env.SECRET,
    Store: MongoStore.create({mongoUrl: process.env.CONNECTBD}),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 1,
        httpOnly: true 
    }
}));

app.use(flash());
app.use(csrf());

app.use(CSRF)
app.use('/', Router)

app.on('is connected', ()=>{
    app.listen(process.env.PORT, ()=>{
        console.log('servidor askSuite rodando');
    });
})