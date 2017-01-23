require('./connexion/connexion-db.js');

//var http= require('http');
var express = require('express');
var path= require('path');
var app = express();
var multer = require('multer');
var cheminFile="";

//var server=http.createServer(app);
//var io =require('socket.io').listen(server);
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null,__dirname+'/src/app/uploads/')
  },
  filename: function (req, file, cb) {
    cheminFile=Date.now()+path.extname(file.originalname);
    cb(null, cheminFile);
        var Document = config.models.Document;
        Document.find({
        
        }).sort({
          date:-1
        }).exec(function(err,result){
            if(err)
                {
                console.log(err);
                res.send('Unexpected error!');
                return;
            }
            console.log(result[0]);


            Document.update(
              { 
                _id:result[0]._id
               },
               { $set:
                  {
                    chemin:cheminFile
                  }
               },function(err,result){
                if(err)
                    {
                    console.log(err);
                    res.send('Unexpected error!');
                    return;
                }
                console.log(result);
            });


        });
  }
});
var upload = multer({ storage: storage });
var cors = require('cors');
app.use(cors());
app.post('/uploads', upload.single('file'), function (req, res, next) {
  res.send('Ok');
});

var config = {	
    models: {}
};
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
   .use(express.static(__dirname + '/release'))
   .use(express.static(__dirname + '/'))
   .use(express.static(__dirname + '/src/app/'))

.get('/',function(req,res){
    res.sendFile(__dirname + '/release/index.html');
 });

config.models.Utilisateur = require('./models/Utilisateur')
config.models.Formation = require('./models/Formation')
config.models.Departement = require('./models/Departement')
config.models.Etudiant = require('./models/Etudiant')
config.models.Inscription = require('./models/Inscription')
config.models.Departement_Formation = require('./models/Departement_Formation')


//io.sockets.on('connection',function (socket){

require("./api/authentification/inscription")(app, config);
require("./api/authentification/connexion")(app, config);
require("./api/authentification/getUser")(app, config);
require("./api/authentification/updateUser")(app, config);
require("./api/authentification/getFormation")(app, config);
require("./api/authentification/getMatiere")(app, config);
require("./api/authentification/setCours")(app, config);
require("./api/authentification/deleteCours")(app, config);
require("./api/authentification/updateSkedule")(app, config);
require("./api/authentification/getSkedule")(app, config);
require("./api/authentification/getEvents")(app, config);
require("./api/authentification/addEvent")(app, config);
require("./api/authentification/deleteEvent")(app, config);
require("./api/authentification/deleteEventComment")(app, config);
require("./api/authentification/addEventComment")(app, config);
require("./api/authentification/addHint")(app, config);
require("./api/authentification/getHint")(app, config);

//});
app.listen(8080, function () {
    console.log('The server is listening to the port 8080');
});