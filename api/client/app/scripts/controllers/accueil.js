'use strict';

/**
 * @ngdoc function
 * @name jobmbayeProjectAngularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jobmbayeProjectAngularApp
 */
angular.module('scolariteApp')
  .controller('AccueilCtrl', function (API_URL,$scope, $http, $q) {


    $scope.effectif={};
    $scope.effectif.sexe={};
    $scope.effectif.sexe.infoM=0;
    $scope.effectif.sexe.infoF=0;
    $scope.effectif.sexe.civilM=0;
    $scope.effectif.sexe.civilF=0;
    $scope.effectif.sexe.gcbaM=0;
    $scope.effectif.sexe.gcbaF=0;
    $scope.effectif.sexe.mecaM=0;
    $scope.effectif.sexe.mecaF=0;
    $scope.effectif.sexe.elecM=0;
    $scope.effectif.sexe.elecF=0;
    $scope.effectif.sexe.gestionM=0;
    $scope.effectif.sexe.gestionF=0;
    $scope.effectif.annee={};
    $scope.id={};
    $scope.id.info="587eb5be0c317d4472a56a5d";
    $scope.id.gcba="587eb5be0c317d4472a56a5b";
    $scope.id.civil="587eb5be0c317d4472a56a5c";
    $scope.id.meca="587eb5be0c317d4472a56a60";
    $scope.id.elec="587eb4ed672c04e871b62785";
    $scope.id.gestion="587eb5be0c317d4472a56a5f";

    var promesses=[];
    promesses.push($http.get(API_URL + '/departement/' + $scope.id.info + '/etudiants/count'));
    promesses.push($http.get(API_URL + '/departement/' + $scope.id.civil + '/etudiants/count'));
    promesses.push($http.get(API_URL + '/departement/' + $scope.id.gcba + '/etudiants/count'));
    promesses.push($http.get(API_URL + '/departement/' + $scope.id.meca + '/etudiants/count'));
    promesses.push($http.get(API_URL + '/departement/' + $scope.id.elec + '/etudiants/count'));
    promesses.push($http.get(API_URL + '/departement/' + $scope.id.gestion + '/etudiants/count'));

    var promessesGF=[];
    promessesGF.push($http.get(API_URL + '/departement/' + $scope.id.info + '/etudiants'));
    promessesGF.push($http.get(API_URL + '/departement/' + $scope.id.civil + '/etudiants'));
    promessesGF.push($http.get(API_URL + '/departement/' + $scope.id.gcba + '/etudiants'));
    promessesGF.push($http.get(API_URL + '/departement/' + $scope.id.meca + '/etudiants'));
    promessesGF.push($http.get(API_URL + '/departement/' + $scope.id.elec + '/etudiants'));
    promessesGF.push($http.get(API_URL + '/departement/' + $scope.id.gestion + '/etudiants'));

    $q.all(promessesGF).then(function(data){
        for(var i=0;i<data[0].data.length;i++)
        {
            if(data[0].data[i].sexe=="Masculin")
                $scope.effectif.sexe.infoM+=1;
            else
                $scope.effectif.sexe.infoF+=1;
        }
        for(var i=0;i<data[1].data.length;i++)
        {   
            if(data[1].data[i].sexe=="Masculin")
                $scope.effectif.sexe.civilM+=1;
            else
                $scope.effectif.sexe.civilF+=1;
        }
        for(var i=0;i<data[2].data.length;i++)
        {
            if(data[2].data[i].sexe=="Masculin")
                $scope.effectif.sexe.gcbaM+=1;
            else
                $scope.effectif.sexe.gcbaF+=1;
        }
        for(var i=0;i<data[3].data.length;i++)
        {
            if(data[3].data[i].sexe=="Masculin")
                $scope.effectif.sexe.mecaM+=1;
            else
                $scope.effectif.sexe.mecaF+=1;
        }
        for(var i=0;i<data[4].data.length;i++)
        {
            if(data[4].data[i].sexe=="Masculin")
                $scope.effectif.sexe.elecM+=1;
            else
                $scope.effectif.sexe.elecF+=1;
        }
        for(var i=0;i<data[5].data.length;i++)
        {
            if(data[5].data[i].sexe=="Masculin")
                $scope.effectif.sexe.gestionM+=1;
            else
                $scope.effectif.sexe.gestionF+=1;
        }

        //Effectif par année//
        $scope.effectif.annee.a2012=0;
        $scope.effectif.annee.a2013=0;
        $scope.effectif.annee.a2014=0;
        $scope.effectif.annee.a2015=0;
        $scope.effectif.annee.a2016=0;
        $scope.effectif.annee.a2017=0;
        for(var j=0;j<6;j++){
            for(var i=0;i<data[j].data.length;i++)
            {
                if(data[j].data[i].anneeAcademique=="2016")
                    $scope.effectif.annee.a2016+=1;
                if(data[j].data[i].anneeAcademique=="2012")
                    $scope.effectif.annee.a2012+=1;
                if(data[j].data[i].anneeAcademique=="2013")
                    $scope.effectif.annee.a2013+=1;
                if(data[j].data[i].anneeAcademique=="2014")
                    $scope.effectif.annee.a2014+=1;
                if(data[j].data[i].anneeAcademique=="2015")
                    $scope.effectif.annee.a2015+=1;
                if(data[j].data[i].anneeAcademique=="2017")
                    $scope.effectif.annee.a2017+=1;
            }
        }

        $scope.chartline1={
        chart: {
            type: 'line',
            options3d: {
                enabled: true,
                alpha: 45,
                beta: 0
            }
        },
        title: {
            text: ' Evolution des Effectifs Total par ans'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                depth: 35,
                dataLabels: {
                    enabled: true,
                    format: '{point.name}'
                }
            }
        },
        xAxis: {
            categories: ['2012', '2013', '2014', '2015', '2016', '2017']
        },
        yAxis: {
            title: {
                text: 'Variations des Effectifs'
            }
        },
series: [ {
            name: 'Effectifs Total',
            data: [$scope.effectif.annee.a2012 || 0, $scope.effectif.annee.a2013 || 0, $scope.effectif.annee.a2014 || 0, $scope.effectif.annee.a2015 || 0, $scope.effectif.annee.a2016 || 0 , $scope.effectif.annee.a2017 || 0]
        }]
    };


        $scope.chartline={   

      chart: {
            type: 'line'
        },
        title: {
            text: 'Effectifs  Filles/Garcons par departement'
        },
        subtitle: {
            text: 'Source: ESP.com'
        },
        xAxis: {
            categories: ['Informatique', 'Electrique', 'Civil', 'Biologie', 'Mecanique', 'Gestion']
        },
        yAxis: {
            title: {
                text: 'Variations des Effectifs'
            }
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true
                },
                enableMouseTracking: false
            }
        },
        series: [{
            name: 'Filles',
            data: [$scope.effectif.sexe.infoF || 0, $scope.effectif.sexe.elecF || 0, $scope.effectif.sexe.civilF || 0, $scope.effectif.sexe.gcbaF || 0,$scope.effectif.sexe.mecaF || 0, $scope.effectif.sexe.gestionF || 0]
        }, {
            name: 'Garcons',
            data: [$scope.effectif.sexe.infoM || 0, $scope.effectif.sexe.elecM || 0 , $scope.effectif.sexe.civilM || 0, $scope.effectif.sexe.gcbaM || 0,$scope.effectif.sexe.mecaM || 0, $scope.effectif.sexe.gestionM || 0]
        }]
    };


         //<//Donut_chart//

    $scope.chartDonut={
        chart: {
            type: 'bar',
            options3d: {
                enabled: true,
                alpha: 45,
                beta: 0
            }
        },
        title: {
            text: ' '
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
         xAxis: {
            categories: ['Informatique', 'Electrique', 'Civil', 'Biologie', 'Mecanique', 'Gestion']
             },
        series: [{
            type: 'bar',
            name: 'Garcons',
            data: [$scope.effectif.sexe.infoM || 0, $scope.effectif.sexe.elecM || 0 , $scope.effectif.sexe.civilM || 0, $scope.effectif.sexe.gcbaM || 0,$scope.effectif.sexe.mecaM || 0, $scope.effectif.sexe.gestionM || 0]
        }, {
            type: 'bar',
            name: 'Filles',
            data: [$scope.effectif.sexe.infoF || 0, $scope.effectif.sexe.elecF || 0, $scope.effectif.sexe.civilF || 0, $scope.effectif.sexe.gcbaF || 0,$scope.effectif.sexe.mecaF || 0, $scope.effectif.sexe.gestionF || 0]
        }]
    };

    $scope.chartline={   

      chart: {
            type: 'line'
        },
        title: {
            text: 'Effectifs  Filles/Garcons par departement'
        },
        subtitle: {
            text: 'Source: ESP.com'
        },
        xAxis: {
            categories: ['Informatique', 'Electrique', 'Civil', 'Biologie', 'Mecanique', 'Gestion']
        },
        yAxis: {
            title: {
                text: 'Variations des Effectifs'
            }
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true
                },
                enableMouseTracking: false
            }
        },
        series: [{
            name: 'Filles',
            data: [$scope.effectif.sexe.infoF || 0, $scope.effectif.sexe.elecF || 0, $scope.effectif.sexe.civilF || 0, $scope.effectif.sexe.gcbaF || 0,$scope.effectif.sexe.mecaF || 0, $scope.effectif.sexe.gestionF || 0]
        }, {
            name: 'Garcons',
            data: [$scope.effectif.sexe.infoM || 0, $scope.effectif.sexe.elecM || 0 , $scope.effectif.sexe.civilM || 0, $scope.effectif.sexe.gcbaM || 0,$scope.effectif.sexe.mecaM || 0, $scope.effectif.sexe.gestionM || 0]
        }]
    };


    }, function(data){

    });

    $q.all(promesses).then(function(data){
        console.log(data);
        $scope.effectif.info=data[0].data.count;
        $scope.effectif.civil=data[1].data.count;
        $scope.effectif.gcba=data[2].data.count;
        $scope.effectif.meca=data[3].data.count;
        $scope.effectif.elec=data[4].data.count;
        $scope.effectif.gestion=data[5].data.count;

               //<//Area_cchart//
     $scope.chartArea= {
        chart: {
            type: 'area',
            options3d: {
                enabled: true,
                alpha: 45,
                beta: 0
            }
        },
        title: {
            text: ' Diagramme des Effectifs Total par departement'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
         xAxis: {
            categories: ['Informatique', 'Electrique', 'Civil', 'Biologie', 'Mecanique', 'Gestion']
             },

        plotOptions: {
            area: {
                allowPointSelect: true,
                cursor: 'pointer',
                depth: 35,
                dataLabels: {
                    enabled: true,
                    format: '{point.name}'
                }
            }
        },
        series: [{
            type: 'area',
            name: 'Effectifs Total',
            data: [
                ['Informatique', $scope.effectif.info],
                ['Electrique', $scope.effectif.elec],
                ['Civil', $scope.effectif.civil],
                ['Biologie  ', $scope.effectif.gcba],
                ['Mecanique', $scope.effectif.meca],
                ['Gestion', $scope.effectif.gestion]
            ]
        }]
    };

        //<//Pie_cchart// 

    $scope.chartConfig={
        chart: {
            type: 'pie',
            options3d: {
                enabled: true,
                alpha: 45,
                beta: 0
            }
        },
        title: {
            text: ' '
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                depth: 35,
                dataLabels: {
                    enabled: true,
                    format: '{point.name}'
                }
            }
        },
        series: [{
            type: 'pie',
            name: 'Effectifs Total',
            data: [
                ['Informatique', $scope.effectif.info],
                ['Electrique', $scope.effectif.elec],
                ['Civil', $scope.effectif.civil],
                ['Biologie  ', $scope.effectif.gcba],
                ['Mecanique', $scope.effectif.meca],
                ['Gestion', $scope.effectif.gestion]
            ]
        }]
    };

          //<//Pie_cchart// 

         //<//Responsive_cchart//

    $scope.chartResponsive= {
        chart: {
            type: 'bar',
            options3d: {
                enabled: true,
                alpha: 45,
                beta: 0
            }
        },
        title: {
            text: ' '
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
         xAxis: {
            categories: ['Informatique', 'Electrique', 'Civil', 'Biologie', 'Mecanique', 'Gestion']
             },

        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                depth: 35,
                dataLabels: {
                    enabled: true,
                    format: '{point.name}'
                }
            }
        },
        series: [{
            type: 'bar',
            name: 'Effectifs Total',
            data: [
                ['Informatique', $scope.effectif.info],
                ['Electrique', $scope.effectif.elec],
                ['Civil', $scope.effectif.civil],
                ['Biologie  ', $scope.effectif.gcba],
                ['Mecanique', $scope.effectif.meca],
                ['Gestion', $scope.effectif.gestion]
            ]
        }]
    };

    $('#small').click(function () {
        chart.setSize(400, 300);
    });

    $('#large').click(function () {
        chart.setSize(600, 300);
    });

            //<//Responsive_cchart//
    }, function(data){

    });

    $scope.nombre={};
    



      

     

     
        //<//Area_cchart//

    

   


 

});
