const express = require('express');
const request = require('request');
const path = require('path');
const bodyparser = require('body-parser');

const app = express();
app.use(bodyparser.json());

const hostname = 'localhost';
const port = 4201;


//google login
const clientID = '608199425119-8qgi8dtetl1op6mnudku000kdrvvn37k.apps.googleusercontent.com'
const secret = '7-tc0suN0bYYjtE3CoEv1gcw'
const redirectUrl = 'http%3A%2F%2F'+hostname+'%3A'+port+'%2FredirectFromGoogle'
var accesstoken;

// Point static path to dist folder
app.use(express.static(path.join(__dirname, 'dist'))); 

//redirect naar google login
app.get('/googleLogin', (req, res, next) =>{
    res.redirect('https://accounts.google.com/o/oauth2/v2/auth' +
        '?client_id=' + clientID +
        '&redirect_uri=' + redirectUrl + 
        '&scope=profile' + 
        '&response_type=code')
});

//redirect van google OAuth
app.get('/redirectFromGoogle', (req, res, next) =>{
    //authorization code gegeven door google
    let code = req.query["code"];

    //post to google to get acces token
    let url = 'https://www.googleapis.com/oauth2/v4/token' +
    '?code=' + code +
    '&client_id=' + clientID +
    '&client_secret=' + secret + 
    '&redirect_uri=' + redirectUrl +
    '&grant_type=authorization_code';

    request.post(url, (error, resp, body) =>{
        if(!error){
            //store token in a cookie
            accesstoken = JSON.parse(body).access_token;
            res.cookie('auth', accesstoken, {maxAge: 60000});
            res.redirect("http://"+hostname+ ":" + port);
        }
        else{
            res.writable('an error occured with google api')
        }
    })
});

//TMDB API
var api_key = '770566d6ba890b029a0d3a76b450f680';
var api_read_key = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NzA1NjZkNmJhODkwYjAyOWEwZDNhNzZiNDUwZjY4MCIsInN1YiI6IjVhZWM1MjUxYzNhMzY4NzIwNDAwODM1NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Xz4jkHFBUWLgbLEqiEVkb4u3eafM-seKpeKdyRKFeYg'

var TMDBrouter = express.Router();
app.use('/tmdb', TMDBrouter);

//series
TMDBrouter.route('/populartv')
    .get((req, res) => {
        res.redirect(`https://api.themoviedb.org/3/tv/popular?api_key=${api_key}&sort_by=popularity.desc`);
    })
TMDBrouter.route('/populartv/:page')
    .get((req, res) =>{
        var page = req.params.page;
        res.redirect(`https://api.themoviedb.org/3/tv/popular?api_key=${api_key}&sort_by=popularity.desc&page=${page}`);
    })
TMDBrouter.route('/serie/:id')
    .get((req, res) => {
        var id = req.params.id;
        res.redirect(`https://api.themoviedb.org/3/tv/${id}?api_key=${api_key}`)
    })

//movies
TMDBrouter.route('/popularmovie')
    .get((req, res) => {
        res.redirect(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&sort_by=popularity.desc`);
    })
TMDBrouter.route('/popularmovie/:page')
    .get((req, res) =>{
        var page = req.params.page;
        res.redirect(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&sort_by=popularity.desc&page=${page}`);
    })
TMDBrouter.route('/movie/:id')
    .get((req, res) =>{
        var id = req.params.id;
        res.redirect(`https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`)
    })

//cast
TMDBrouter.route('/cast/:id')
    .get((req, res) =>{
        var id = req.params.id;
        res.redirect(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${api_key}`)
    })

//search
TMDBrouter.route('/search/movie/:query')
    .get((req, res) =>{
        var query = req.params.query;
        res.redirect(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${query}`)
    })
TMDBrouter.route('/search/movie/:query/:page')
    .get((req, res) =>{
        var query = req.params.query;
        var page = req.params.page;
        res.redirect(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${query}&page=${page}`)
    })
TMDBrouter.route('/search/serie/:query')
    .get((req, res) =>{
        var query = req.params.query;
        res.redirect(`https://api.themoviedb.org/3/search/tv?api_key=${api_key}&query=${query}`)
    })
TMDBrouter.route('/search/serie/:query/:page')
    .get((req, res) =>{
        var query = req.params.query;
        var page = req.params.page;
        console.log("query: " + query);
        console.log("page: " + page); 
        res.redirect(`https://api.themoviedb.org/3/search/tv?api_key=${api_key}&query=${query}&page=${page}`)
    })
    
app.listen(port, hostname);