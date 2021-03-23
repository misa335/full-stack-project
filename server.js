const express = require('express');
const path = require('path');
// const bodyParser = require('body-parser');
const app = express();
const moment = require('moment');
const {knex} = require('./server/knex');
require('dotenv').config();

// app.use(express.static(__dirname + '/dist'));
app.use(express.static(path.join(__dirname, 'public')));


const port = process.env.PORT || 4000;

app.use(express.json());
// app.use(express.urlencoded)({extended:false});


app.listen(port, () => {
    console.log("connected!!✨", port);
});

// app.use('/api', (req, res) => {
//     res.send('Yaaay! Connected!!✨');
// });

//Get all songs info
app.get('/song', async(req, res) => {
    await knex.select().from('song_list').then((datas) => {
        res.send(datas);
    }).catch((err) => console.log("error:",err));
});

// //Get Single song info
// app.get('/api/:song', async(req, res) => {
//     await knex.select().from('song_list').then((datas) => {
//         res.send(datas.filter(data => data.song_title === req.params.song));
//     }).catch((err) => console.log("error:",err));
// });

// //add song info
// app.post('/api', async (req, res) => {
//     await knex('song_list').insert({
//     artist_name: req.body.artistName,
//     song_title: req.body.trackName,
//     date: moment().format('l')
//     })
//     .then(() => knex.select().from('song_list'))
//     .then((datas) => res.send(datas))
//     .catch((err) => console.log("error:",err));
// });

// //Delete song info
// app.delete('/api/:song', async (req, res) => {
//     await knex('song_list').where('song_title', req.params.song_title)
//                            .del()
//                            .then(() => knex.select().from('song_list'))
//                            .then((datas) => res.send(datas))
//                            .catch((err) => console.log("error:",err));
// });