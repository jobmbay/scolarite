'use strict';

module.exports = function(server) {
  // Install a `/` route that returns server status
  var router = server.loopback.Router();
  router.get('/', server.loopback.status());
  server.use(router);
};

module.exports = function(app) {
  	var mongoose = require('mongoose');
	mongoose.connect('mongodb://localhost/scolariteEsp', function () {
    console.log('The connextion to the database is succesfull!');

    var bodyParser = require('body-parser');
    var multer = require('multer');
    var xlstojson = require("xls-to-json-lc");
    var xlsxtojson = require("xlsx-to-json-lc");
    var async = require('async');
    

    app.use(bodyParser.json());  

    var storage = multer.diskStorage({ //multers disk storage settings
        destination: function (req, file, cb) {
            cb(null, './uploads/')
        },
        filename: function (req, file, cb) {
            var datetimestamp = Date.now();
            cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length -1])
        }
    });

    var upload = multer({ //multer settings
        storage: storage,
        fileFilter : function(req, file, callback) { //file filter
            if (['xls', 'xlsx'].indexOf(file.originalname.split('.')[file.originalname.split('.').length-1]) === -1) {
                return callback(new Error('Wrong extension type'));
            }
            callback(null, true);
        }
    }).single('file');


      /*app.get('/toutetudiant',function(req,res){
        Post.find({
          include: {
            relation: 'departement', // include the owner object
            scope: { // further filter the owner object
              fields: ['nomDepartement'], // only show two fields
              include: { // include orders for the owner
                relation: 'etudiant', 
                scope: {
                  //where: {departementId: req.body.departement} // only select order with id 5
                }
              }
            }
          }
        },function(err, result)
        {
          if(err)
          {
            console.log(err);
          }
          else
          {
            console.log(result);
            res.send(result);
          }
        });
        
      });*/

    /** API path that will upload the files */
    app.post('/upload', function(req, res) {
        var exceltojson;
        upload(req,res,function(err){
            if(err){
                 res.json({error_code:1,err_desc:err});
                 return;
            }
            /** Multer gives us file info in req.file object */
            if(!req.file){
                res.json({error_code:1,err_desc:"No file passed"});
                return;
            }
            /** Check the extension of the incoming file and 
             *  use the appropriate module
             */
            if(req.file.originalname.split('.')[req.file.originalname.split('.').length-1] === 'xlsx'){
                exceltojson = xlsxtojson;
            } else {
                exceltojson = xlstojson;
            }
            console.log(req.file.path);
            try {
                exceltojson({
                    input: req.file.path,
                    output: null, //since we don't need output.json
                    lowerCaseHeaders:true
                }, function(err,result){
                    if(err) {
                        return res.json({error_code:1,err_desc:err, data: null});
                    } 
                     
                    async.eachSeries(result, function (pos, callback) {
                        async.parallel([
                            function(callback) {
                                app.models.niveau.findOrCreate({
                                  where: {
                                    nomNiveau: pos.niveau
                                  }
                                }, {
                                  nomNiveau: pos.niveau
                                }, callback);
                            }, 
                            function(callback) {
                                app.models.option.findOrCreate({
                                  where: {
                                    nomOption: pos.option
                                  }
                                }, {
                                  nomOption: pos.option
                                }, callback);
                            },
                            function(callback) {
                                app.models.formation.findOrCreate({
                                  where: {
                                    nomFormation: pos.formation
                                  }
                                }, {
                                  nomFormation: pos.formation
                                }, callback);
                            },
                            function(callback) {
                                app.models.departement.findOrCreate({
                                  where: {
                                    nomDepartement: pos.departement
                                  }
                                }, {
                                  nomDepartement: pos.departement
                                }, callback);
                            }
                        ],
                        // optional callback
                        function(err, results) {
                            console.log('results', results)
                            app.models.classe.findOrCreate({
                                  where: {
                                    niveauId: results[0][0].id,
                                    optionId: results[1][0].id,
                                    formationId: results[2][0].id,
                                    departementId: results[3][0].id
                                  }
                                }, {
                                    niveauId: results[0][0].id,
                                    optionId: results[1][0].id,
                                    formationId: results[2][0].id,
                                    departementId: results[3][0].id
                                }, function (err, classe) {
                                    // console.log(err, classe)
                                });

                            app.models.etudiant.create(
                                Object.assign(pos, {
                                    niveauId: results[0][0].id,
                                    optionId: results[1][0].id,
                                    formationId: results[2][0].id,
                                    departementId: results[3][0].id
                                }),
                                function (err, etudiant) {
                                    // console.log(err, etudiant)
                                }
                            );
                            callback(err);
                        });
                    }, function (err) {
                      console.log(err);
                    });
                    
                    res.redirect('http://localhost:9000/');



                    // fin de mes ajout///////////////////
                });
            } catch (e){
                res.json({error_code:1,err_desc:"Corupted excel file"});
            }
        })
       
    });


});
};
