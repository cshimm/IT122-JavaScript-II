import express from 'express';
import { getAll, getItem } from "./data.js"

const app = express();
app.set('port', process.env.PORT || 3000);
app.use(express.static('./public')); // set location for static files
app.set('view engine', 'ejs')
const games = getAll();

app.get('/', (req,res) => {
    console.log(req.url);
    res.render('home', { games } );
});

app.get('/games/:title', (req, res) => {
    let game = getItem(req.params.title);
    if (game) {
        res.render('detail', { game })
    }
});
app.get('/about', (req,res) => {
    res.type('text/html');
    res.send('About page');
});

app.use((req,res) => {
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not found');
});

app.listen(app.get('port'), () => {
    console.log('Express started');
});