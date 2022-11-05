exports.CSRF = (req, res, next)=>{
    res.locals.csrf = req.csrfToken();
    next();
}

exports.error = (err, req, res, next)=>{
    if(err) res.redirect('404');
    return;
}