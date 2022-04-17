const logParam = (request, response, _next) => {

    console.log(request.body); 
    return response.json({ path: request.originalUrl, success: true, result: request.body });

};

module.exports = {
    logParam,
}