const requestTime = (req, res, next) => {
    let date = new Date();
    console.log(`Request received at ${date.toLocaleString()}: ${req.method}`);
    next();
}

module.exports = requestTime;