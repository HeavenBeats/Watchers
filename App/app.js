const express = require('express');
const request = require('request');
const path = require('path');
const bodyparser = require('body-parser');

const app = express();

const hostname = '127.0.0.1';
const port = 4201;

//TODO: nog invullen
//google login
const clientID = '608199425119-8qgi8dtetl1op6mnudku000kdrvvn37k.apps.googleusercontent.com'
const secret = '7-tc0suN0bYYjtE3CoEv1gcw'
const redirectUrl = 'http%3A%2F%2Flocalhost%3A4201%2FredirectFromGoogle'
var accesstoken;

// Point static path to dist folder
app.use(express.static(path.join(__dirname, 'dist'))); 
app.use(bodyparser.json());

//redirect naar google login
app.get('/googleLogin', (req, res, next) =>{
    res.redirect('https://accounts.google.com/o/oauth2/v2/auth' +
        '?client_id=' + clientID +
        '&redirect_uri=' + redirectUrl + 
        '&scope=profile http://mail.google.com' + 
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
            res.redirect("http://localhost:" + port);
        }
        else{
            res.writable('an error occured with google api')
        }
    })

});

app.listen(port, hostname);