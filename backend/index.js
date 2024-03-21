const express = require('express');
const routes = require('./routes/root');
const httperrors = require('http-errors');
const requestTime = require('./middleware/request-time');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(requestTime);

app.use('/', routes.router);

app.use((_req, _res, next) => {
    next(httperrors(404));
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});