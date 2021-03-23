const express = require('express');
const path = require('path');
// const bodyParser = require('body-parser');
const app = express();
require('dotenv').config();

app.use(express.static(__dirname + '/dist'));
app.use(express.static(path.join(__dirname, 'public')));


const port = process.env.PORT || 4000;

app.use(express.json())
// app.use(express.urlencoded)({extended:false});


app.listen(port, () => {
    console.log("connected!!✨", port);
});

app.use('/api', (req, res) => {
    res.send('Yaaay! Connected!!✨');
});

//Get all songs info
app.get('/api', async(req, res) => {
    let result = {};
    await knex.select().from('song_list').then((datas) => {
        res.send(datas);
    }).catch((err) => console.log("error:",err));
});

//Get Single song info
app.get('/api/:param', async(req, res) => {
    await knex.select().from('song_list').then((datas) => {
        res.send(datas.filter(data => data.artist_name === parseInt(req.params.param)));
    }).catch((err) => console.log("error:",err));
});

//add song info
app.post('/api/cafe/post', async (req, res) => {
    await knex('cafe_list').insert({
    name: req.body.name,
    recommend: req.body.recommend
    })
    .then(() => knex.select().from('cafe_list'))
    .then((datas) => res.send(datas))
    .catch((err) => console.log("error:",err));
});

//Delete song info
app.delete('/api/cafe/delete/:id', async (req, res) => {
    await knex('cafe_list').where('id', req.params.id)
                           .del()
                           .then(() => knex.select().from('cafe_list'))
                           .then((datas) => res.send(datas))
                           .catch((err) => console.log("error:",err));
});