const Quarto = require('../Models/QuartoModel');

exports.Home = ('/',(req, res)=>{
    res.render('page/home');
});

exports.add =  (req, res)=>{
    res.render('page/add', {csrf: res.locals.csrf})
}

exports.register = (req,res)=>{
    console.log(req.body);
    const quarto = new Quarto(req.body);
    quarto.register()

    res.redirect('back');
}