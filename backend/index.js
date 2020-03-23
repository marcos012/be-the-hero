const express = require('express');

const app = express();

app.get('', (req, res) => {
    return res.jsoon({event: 'a'})
});

app.listen(3333);