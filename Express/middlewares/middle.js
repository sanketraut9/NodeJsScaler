function myMiddleware(req, res,next){
    console.log('I am middleware');
    next()
}

module.exports = myMiddleware