const express = require('express');
const routes = require('./routes/root');

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/', routes.router);

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});