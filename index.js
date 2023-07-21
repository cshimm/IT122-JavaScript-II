import express from 'express';
import cors from 'cors';
import { Game } from "./models/Game.js";

const app = express();
app.set('port', process.env.PORT || 3000);
app.use(express.static('./public')); // set location for static files
app.use('/api', cors());
app.use(express.json());
app.set('view engine', 'ejs');

app.get('/api/games', (req, res)=> {
    Game.find({}).lean()
        .then((games) => {
            res.json(games);
        }).catch(err => res.status(500).send('Database Error occurred'));
});
app.get('/api/games/:title', (req, res) => {
    Game.findOne({ title: req.params.title }).lean()
        .then((game) => {
            res.json(game);
        }).catch(err => res.status(500).send('Database Error occurred'));
});
app.post('/api/games/update/:title', (req, res) => {
    const newGame = { title:'updated', yearReleased: '9999', genre:'updateGenre', studio:'updateStudio' }
    Game.updateOne({ title: req.params.title }, newGame, { upsert:true }).lean()
        .then((game) => {
            res.json(game);
        }).catch(err => res.status(500).send('Database Error occurred'));
})
app.delete('/api/games/delete/:title', (req, res) => {
    Game.deleteOne({title: req.params.title}).lean()
        .then((game) => {
            res.json(game);
        }).catch(err => res.status(500).send('Database Error occurred'));
})
app.get('/', (req,res) => {
    renderHomeGamesList(res);
});

app.get('/games/:title', (req, res) => {
    Game.findOne({ title: req.params.title }).lean()
        .then((game) => {
            res.render('detail', {game});
        });
});

app.get('/delete/:title', (req, res) => {
    Game.deleteOne( {title: req.params.title }).lean()
        .then(() => {
            console.log("delete successful")
            renderHomeGamesList(res);
        });
});
app.get('/about', (req, res) => {
    res.type('text/html');
    res.send('About page');
});

app.use((req, res) => {
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not found');
});

app.listen(app.get('port'), () => {
    console.log('Express started');
});

const renderHomeGamesList = (res) => {
    Game.find({}).lean()
        .then((games) => {
            res.render('home', { games });
        }).catch(err => console.log(err));
}