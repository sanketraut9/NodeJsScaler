function myMiddleware2(req, res,next){
    console.log('I am 2nd middleware');
    next()
}

module.exports = myMiddleware2