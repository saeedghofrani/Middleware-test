const logParam = (request, response, _next) => {

    return response.json({ path: request.originalUrl, success: true, result: req.body });
    
};

module.exports = {
    logParam,
}