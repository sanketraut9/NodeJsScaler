const express = require('express');
const app = express();

const port = 3000;


function errorHandler(err, req, res, next) {
    const statusCode = err.statusCode || 500;
    
    res.status(statusCode).json({
        error: {
            message: err.message || 'Internal Server Error',
            statusCode: statusCode
        }
    });
}


app.get('/route', (req, res, next) => {
    try {
        throw new Error('Error message')
    } catch(error){
        next(error)
    }
});

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
