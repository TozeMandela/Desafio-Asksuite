exports.Home = ('/',(req, res)=>{
    res.render('page/home');
});

exports.add =  (req, res)=>{
    console.log(res.locals.csrf)
    res.render('page/add')
}