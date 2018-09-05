module.exports = () => {
    return function (req, res, next) {
        req.requestTime = Date.now()
        next()
    }
}