const logParam = (request, response, _next) => {

    console.log(request.body);
    console.log(response.locals.message);
    
    return response.json({
        path: request.originalUrl,
        success: true,
        result: {
            id: request.body.data,
            message: response.locals.message,
            input: request.body.input
        }
    });

};

module.exports = {
    logParam,
}