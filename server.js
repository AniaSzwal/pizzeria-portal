/* global require, process */

const fs = require('fs'); //file system
const path = require('path'); //sluzy do modyfikacji konwersji sciezek do plikow
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('build/db/app.json');
const middlewares = jsonServer.defaults({
    static: 'build',
    noCors: false,
});
const port = process.env.PORT || 3131;

server.get(/^\/panel.*/, (req,res) =>{  //jezeli URL zaczyna sie od /panel...
    if(req.url === '/panel'){
        req.url += '/';
    }
    const filePath = __dirname+req.url.replace('/panel', '/build'); //...wtedy ma byc zwrocony plik z katalou build...
    if(fs.existsSync(filePath)){ //...jezeli istnieje
        res.sendFile(filePath);
    } else { //...jezeli nie ma takiego pliku o jaki bylo wyslane rządanie...
        res.sendFile(path.join(__dirname+'/build/index.html')); //...wtedy ma zostac zwrocony plik indexHTML z katalogu build
    }
});

server.use(function(req, res, next) {//czy rządany adres ma przedrostek /api...
    const api = /^\/api(.*)$/.exec(req.url);

    if (api && api.length > 1) { //..jesli tak to zapytanie zostanie obsluzone przez json-server...
        req.url = api[1] || '/';
    } else { //..jesli to nie jest zapytanie do api chcemy potraktowac to zapytanie tak, jakby dotyczylo ono podkatalogu front w katalogu build
        req.url = '/front' + req.url;
    }
    next();
});

server.use(middlewares);
server.use(router);

server.listen(port);