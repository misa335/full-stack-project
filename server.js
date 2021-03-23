const express = require('express');
// const bodyParser = require('body-parser');
const app = express();
require('dotenv').config();

app.use(express.static(__dirname + '/dist'));

const port = process.env.PORT || 4000;

app.use(express.json())
app.use(express.urlencoded)({extended:true});


app.listen(port, () => {
    console.log("connected!!✨", port);
});

app.use('/api', (req, res) => {
    res.send('Yaaay! Connected!!✨');
});