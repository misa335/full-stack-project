const express = require('express');
const path = require('path');
// const bodyParser = require('body-parser');
const app = express();
const {knex} = require('./server/knex');
const cors = require('cors');
require('dotenv').config();

app.use(cors());

// app.use(express.static(__dirname + '/dist'));
app.use(express.static(path.join(__dirname, 'public')));


const port = process.env.PORT || 4000;

app.use(express.json());
// app.use(express.urlencoded)({extended:false});

app.listen(port, () => {
    console.log("connected!!✨", port);
});

//endpoints
//Get all songs info
app.get('/song', async(req, res) => {
    await knex.select().from('song_list').then((datas) => {
        res.send(datas);
    }).catch((err) => console.log("error:",err));
});

//Get single song info
app.get('/song/:title', async(req, res) => {
    await knex.select().from('song_list').then((datas) => {
        res.send(datas.filter(data => data.song_title.toLowerCase() === req.params.title.toLowerCase()));
    }).catch((err) => console.log("error:",err));
});

//add song info
app.post('/song', async (req, res) => {
    await knex('song_list').insert({
    artist_name: req.body.artistName,
    song_title: req.body.trackName,
    })
    .then(() => knex.select().from('song_list'))
    .then((datas) => res.send(datas))
    .catch((err) => console.log("error:",err));
});

//Delete song info
app.delete('/song/:id', async (req, res) => {
    await knex('song_list').where('id', req.params.id)
                           .del()
                           .then(() => knex.select().from('song_list'))
                           .then((datas) => res.send(datas))
                           .catch((err) => console.log("error:",err));
});