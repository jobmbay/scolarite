'use strict';

/**
 * @ngdoc function
 * @name jobmbayeProjectAngularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jobmbayeProjectAngularApp
 */
angular.module('scolariteApp')
  .controller('StatistiqueCtrl', function (API_URL, $scope, $http, Etudiant, Departement, Option, Niveau, Formation, Classe) {

    $scope.stat={};
    var departement;
    var option;
    var formation;
    var niveau;
    var etudiant;
    var resultats=[];
    $scope.affiche={};
    $scope.resultats=[];
    $scope.affiche.departement=true;
    $scope.affiche.niveau=true;
    $scope.affiche.formation=true;
    $scope.affiche.option=true;
    $scope.affiche.Tab=true;
    $scope.affiche.graph0=true;
    $scope.affiche.sexe=true;
    $scope.affiche.nationalite=true;
    $scope.affiche.bac=true;
    $scope.affiche.nature=true;
    $scope.affiche.age=true;

    $http.get(API_URL + '/departement').then(function(data){
      $scope.departements=data.data;
    }, function(data){
      console.log(data);
    });
    $http.get(API_URL + '/option').then(function(data){
      $scope.options=data.data;
    }, function(data){
      console.log(data);
    });
    $http.get(API_URL + '/formation').then(function(data){
      $scope.formations=data.data;
    }, function(data){
      console.log(data);
    });
    $http.get(API_URL + '/niveau').then(function(data){
      $scope.niveaux=data.data;
    }, function(data){
      console.log(data);
    });
    $http.get(API_URL + '/etudiant').then(function(data){
      $scope.etudiants=data.data;
    }, function(data){
      console.log(data);
    });
    $http.get(API_URL + '/classe').then(function(data){
      $scope.classes=data.data;
    }, function(data){
      console.log(data);
    });

    //document.addEventListenner()
    

    $scope.generateStatistique = function()
    {
      resultats=[];
      $scope.test= {
        include : ['departement','formation','option','classe','niveau']
      }
      Etudiant.find({filter:$scope.test},
        function(value,resheader){
        $scope.resultats = _.filter(value,function(etudiant){
            return etudiant.departement;
          })

        if($scope.stat.sexe.trim()!='Tous les sexes' && $scope.stat.sexe!= undefined)
        {     
          $scope.affiche.sexe=false;
          for(var j=0;j<$scope.resultats.length;j++)
            {
              if($scope.resultats[j].sexe.trim() ==
                  $scope.stat.sexe.trim())
              {
                resultats.push($scope.resultats[j]);
              }
            }
             console.log(resultats);
          $scope.resultats=resultats;
        }
        else
        {
          $scope.affiche.sexe=true;
        }
        resultats=[];

        if($scope.stat.seriebac.trim()!='Toutes les series' && $scope.stat.seriebac!= undefined)
        {     
          $scope.affiche.bac=false;
          for(var j=0;j<$scope.resultats.length;j++)
            {
              if($scope.resultats[j].seriebac.trim() ==
                  $scope.stat.seriebac.trim())
              {
                resultats.push($scope.resultats[j]);
              }
            }
             console.log(resultats);
          $scope.resultats=resultats;
        }
        else
        {
          $scope.affiche.bac=true;
        }

        resultats=[];

        if($scope.stat.nature.trim()!='Toutes les natures' && $scope.stat.nature!= undefined)
        {     
          $scope.affiche.nature=false;
          for(var j=0;j<$scope.resultats.length;j++)
            {
              if($scope.resultats[j].nature.trim() ==
                  $scope.stat.nature.trim())
              {
                resultats.push($scope.resultats[j]);
              }
            }
             console.log(resultats);
          $scope.resultats=resultats;
        }
        else
        {
          $scope.affiche.nature=true;
        }

        resultats=[];

        if($scope.stat.paysnaissance.trim()!='Tous les nationalites' && $scope.stat.paysnaissance!= undefined)
        {     
          $scope.affiche.paysnaissance=false;
          for(var j=0;j<$scope.resultats.length;j++)
            {
              if($scope.resultats[j].paysnaissance.trim() ==
                  $scope.stat.paysnaissance.trim())
              {
                resultats.push($scope.resultats[j]);
              }
            }
             console.log(resultats);
          $scope.resultats=resultats;
        }
        else
        {
          $scope.affiche.paysnaissance=true;
        }
        resultats=[];

        if($scope.stat.departement.trim()!='Tous les departements' && $scope.stat.departement!= undefined)
        {     
          $scope.affiche.departement=false;
          for(var j=0;j<$scope.resultats.length;j++)
            {
              if($scope.resultats[j].departement.nomDepartement.trim() ==
                  $scope.stat.departement.trim())
              {
                resultats.push($scope.resultats[j]);
              }
            }
             console.log(resultats);
          $scope.resultats=resultats;
        }
        else
        {
          $scope.affiche.departement=true;
        }
        resultats=[];
        if($scope.stat.option.trim()!='Toutes les options' && $scope.stat.option!= undefined)
        {     
          $scope.affiche.option=false;
          for(var j=0;j<$scope.resultats.length;j++)
            {
              if($scope.resultats[j].option.nomOption.trim() ==
                  $scope.stat.option.trim())
              {
                resultats.push($scope.resultats[j]);
              }
            }
             console.log(resultats);
          $scope.resultats=resultats;
        }
        else
        {
          $scope.affiche.option=true;
        }
        resultats=[];
        if($scope.stat.formation.trim()!='Toutes les formations' && $scope.stat.formation!= undefined)
        {     
          $scope.affiche.formation=false;
          for(var j=0;j<$scope.resultats.length;j++)
            {
              if($scope.resultats[j].formation.nomFormation.trim() ==
                  $scope.stat.formation.trim())
              {
                resultats.push($scope.resultats[j]);
              }
            }
             console.log(resultats);
          $scope.resultats=resultats;
        }
        else
        {
          $scope.affiche.formation=true;
        }
        resultats=[];
        if($scope.stat.niveau.trim()!='Tous les niveaux' && $scope.stat.niveau!= undefined)
        {     
          $scope.affiche.niveau=false;
          for(var j=0;j<$scope.resultats.length;j++)
            {
              if($scope.resultats[j].niveau.nomNiveau.trim() ==
                  $scope.stat.niveau.trim())
              {
                resultats.push($scope.resultats[j]);
              }
            }
          $scope.resultats=resultats;
        }
        else
        {
          $scope.affiche.niveau=true;
        }
        resultats=[];
        

        },function(error){
          console.log(error);
        });
    };
      

    $scope.selectGraph=function(){
        if ($scope.stat.Graph0=="Diagramme Circulaire"){
            $scope.affiche.graph0=true;
        }
        else{
             $scope.affiche.graph0=false;
         }

        if ($scope.stat.Graph0=="Diagramme en barre"){
            $scope.affiche.graph2=true;
          $scope.affiche.graph0=false;
        }
        else{
             $scope.affiche.graph2=false;
         }
         if ($scope.stat.Graph0=="Diagramme en courbe"){
            $scope.affiche.graph1=true;
            $scope.affiche.graph2=false;
          $scope.affiche.graph0=false;
        }
        else{
             $scope.affiche.graph1=false;
         }
         if ($scope.stat.Graph0=="Diagramme en barre Filles/Garcons"){
            $scope.affiche.graph3=true;
            $scope.affiche.graph1=false;
            $scope.affiche.graph2=false;
          $scope.affiche.graph0=false;
        }
        else{
             $scope.affiche.graph3=false;
         }
         if ($scope.stat.Graph0=="Diagramme en Area"){
            $scope.affiche.graph4=true;
            $scope.affiche.graph3=false;
            $scope.affiche.graph1=false;
            $scope.affiche.graph2=false;
          $scope.affiche.graph0=false;
        }
        else{
             $scope.affiche.graph4=false;
         }

        }
    $scope.AfficheGraph=function(){
             $scope.affiche.graph=true;
             $scope.affiche.Tab=false;             
        }
    $scope.AffichTableau=function(){
             $scope.affiche.graph=false;
             $scope.affiche.Tab=true;             
        }


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
                ['Informatique', 760],
                ['Electrique', 350],
                {
                    name: 'Civil',
                    y: 580,
                    sliced: true,
                    selected: true
                },
                ['Biologie', 200],
                ['Mecanique', 210],
                ['Gestion', 810]
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
                ['Informatique', 760],
                ['Electrique', 350],
                {
                    name: 'Civil',
                    y: 580,
                    sliced: true,
                    selected: true
                },
                ['Biologie', 200],
                ['Mecanique', 210],
                ['Gestion', 810]
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
                ['Informatique', 760],
                ['Electrique', 350],
                {
                    name: 'Civil',
                    y: 580,
                    sliced: true,
                    selected: true
                },
                ['Biologie', 200],
                ['Mecanique', 210],
                ['Gestion', 810]
            ]
        }]
    };

    //<//Area_cchart//

    

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
            data: [300, 250, 200, 150,230, 200]
        }, {
            type: 'bar',
            name: 'Filles',
            data: [200, 150, 100, 170,160, 400]
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
            
            name: 'Garcons',
            data: [300, 250, 200, 150,230, 200]
        }, {
            
            name: 'Filles',
            data: [200, 150, 100, 170,160, 400]
        }]
    };

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
                ['Informatique', 760],
                ['Electrique', 350],
                {
                    name: 'Civil',
                    y: 580,
                    sliced: true,
                    selected: true
                },
                ['Biologie', 200],
                ['Mecanique', 210],
                ['Gestion', 810]
            ]
        }]
    };

    //<//Area_cchart//
    $scope.pays={};
  $scope.pays=[ 
  {name: 'Afghanistan', code: 'AF'}, 
  {name: 'Åland Islands', code: 'AX'}, 
  {name: 'Albania', code: 'AL'}, 
  {name: 'Algeria', code: 'DZ'}, 
  {name: 'American Samoa', code: 'AS'}, 
  {name: 'AndorrA', code: 'AD'}, 
  {name: 'Angola', code: 'AO'}, 
  {name: 'Anguilla', code: 'AI'}, 
  {name: 'Antarctica', code: 'AQ'}, 
  {name: 'Antigua and Barbuda', code: 'AG'}, 
  {name: 'Argentina', code: 'AR'}, 
  {name: 'Armenia', code: 'AM'}, 
  {name: 'Aruba', code: 'AW'}, 
  {name: 'Australia', code: 'AU'}, 
  {name: 'Austria', code: 'AT'}, 
  {name: 'Azerbaijan', code: 'AZ'}, 
  {name: 'Bahamas', code: 'BS'}, 
  {name: 'Bahrain', code: 'BH'}, 
  {name: 'Bangladesh', code: 'BD'}, 
  {name: 'Barbados', code: 'BB'}, 
  {name: 'Belarus', code: 'BY'}, 
  {name: 'Belgium', code: 'BE'}, 
  {name: 'Belize', code: 'BZ'}, 
  {name: 'Benin', code: 'BJ'}, 
  {name: 'Bermuda', code: 'BM'}, 
  {name: 'Bhutan', code: 'BT'}, 
  {name: 'Bolivia', code: 'BO'}, 
  {name: 'Bosnia and Herzegovina', code: 'BA'}, 
  {name: 'Botswana', code: 'BW'}, 
  {name: 'Bouvet Island', code: 'BV'}, 
  {name: 'Brazil', code: 'BR'}, 
  {name: 'British Indian Ocean Territory', code: 'IO'}, 
  {name: 'Brunei Darussalam', code: 'BN'}, 
  {name: 'Bulgaria', code: 'BG'}, 
  {name: 'Burkina Faso', code: 'BF'}, 
  {name: 'Burundi', code: 'BI'}, 
  {name: 'Cambodia', code: 'KH'}, 
  {name: 'Cameroon', code: 'CM'}, 
  {name: 'Canada', code: 'CA'}, 
  {name: 'Cape Verde', code: 'CV'}, 
  {name: 'Cayman Islands', code: 'KY'}, 
  {name: 'Central African Republic', code: 'CF'}, 
  {name: 'Chad', code: 'TD'}, 
  {name: 'Chile', code: 'CL'}, 
  {name: 'China', code: 'CN'}, 
  {name: 'Christmas Island', code: 'CX'}, 
  {name: 'Cocos (Keeling) Islands', code: 'CC'}, 
  {name: 'Colombia', code: 'CO'}, 
  {name: 'Comoros', code: 'KM'}, 
  {name: 'Congo', code: 'CG'}, 
  {name: 'Congo, The Democratic Republic of the', code: 'CD'}, 
  {name: 'Cook Islands', code: 'CK'}, 
  {name: 'Costa Rica', code: 'CR'}, 
  {name: 'Cote D\'Ivoire', code: 'CI'}, 
  {name: 'Croatia', code: 'HR'}, 
  {name: 'Cuba', code: 'CU'}, 
  {name: 'Cyprus', code: 'CY'}, 
  {name: 'Czech Republic', code: 'CZ'}, 
  {name: 'Denmark', code: 'DK'}, 
  {name: 'Djibouti', code: 'DJ'}, 
  {name: 'Dominica', code: 'DM'}, 
  {name: 'Dominican Republic', code: 'DO'}, 
  {name: 'Ecuador', code: 'EC'}, 
  {name: 'Egypt', code: 'EG'}, 
  {name: 'El Salvador', code: 'SV'}, 
  {name: 'Equatorial Guinea', code: 'GQ'}, 
  {name: 'Eritrea', code: 'ER'}, 
  {name: 'Estonia', code: 'EE'}, 
  {name: 'Ethiopia', code: 'ET'}, 
  {name: 'Falkland Islands (Malvinas)', code: 'FK'}, 
  {name: 'Faroe Islands', code: 'FO'}, 
  {name: 'Fiji', code: 'FJ'}, 
  {name: 'Finland', code: 'FI'}, 
  {name: 'France', code: 'FR'}, 
  {name: 'French Guiana', code: 'GF'}, 
  {name: 'French Polynesia', code: 'PF'}, 
  {name: 'French Southern Territories', code: 'TF'}, 
  {name: 'Gabon', code: 'GA'}, 
  {name: 'Gambia', code: 'GM'}, 
  {name: 'Georgia', code: 'GE'}, 
  {name: 'Germany', code: 'DE'}, 
  {name: 'Ghana', code: 'GH'}, 
  {name: 'Gibraltar', code: 'GI'}, 
  {name: 'Greece', code: 'GR'}, 
  {name: 'Greenland', code: 'GL'}, 
  {name: 'Grenada', code: 'GD'}, 
  {name: 'Guadeloupe', code: 'GP'}, 
  {name: 'Guam', code: 'GU'}, 
  {name: 'Guatemala', code: 'GT'}, 
  {name: 'Guernsey', code: 'GG'}, 
  {name: 'Guinea', code: 'GN'}, 
  {name: 'Guinea-Bissau', code: 'GW'}, 
  {name: 'Guyana', code: 'GY'}, 
  {name: 'Haiti', code: 'HT'}, 
  {name: 'Heard Island and Mcdonald Islands', code: 'HM'}, 
  {name: 'Holy See (Vatican City State)', code: 'VA'}, 
  {name: 'Honduras', code: 'HN'}, 
  {name: 'Hong Kong', code: 'HK'}, 
  {name: 'Hungary', code: 'HU'}, 
  {name: 'Iceland', code: 'IS'}, 
  {name: 'India', code: 'IN'}, 
  {name: 'Indonesia', code: 'ID'}, 
  {name: 'Iran, Islamic Republic Of', code: 'IR'}, 
  {name: 'Iraq', code: 'IQ'}, 
  {name: 'Ireland', code: 'IE'}, 
  {name: 'Isle of Man', code: 'IM'}, 
  {name: 'Israel', code: 'IL'}, 
  {name: 'Italy', code: 'IT'}, 
  {name: 'Jamaica', code: 'JM'}, 
  {name: 'Japan', code: 'JP'}, 
  {name: 'Jersey', code: 'JE'}, 
  {name: 'Jordan', code: 'JO'}, 
  {name: 'Kazakhstan', code: 'KZ'}, 
  {name: 'Kenya', code: 'KE'}, 
  {name: 'Kiribati', code: 'KI'}, 
  {name: 'Korea, Democratic People\'S Republic of', code: 'KP'}, 
  {name: 'Korea, Republic of', code: 'KR'}, 
  {name: 'Kuwait', code: 'KW'}, 
  {name: 'Kyrgyzstan', code: 'KG'}, 
  {name: 'Lao People\'S Democratic Republic', code: 'LA'}, 
  {name: 'Latvia', code: 'LV'}, 
  {name: 'Lebanon', code: 'LB'}, 
  {name: 'Lesotho', code: 'LS'}, 
  {name: 'Liberia', code: 'LR'}, 
  {name: 'Libyan Arab Jamahiriya', code: 'LY'}, 
  {name: 'Liechtenstein', code: 'LI'}, 
  {name: 'Lithuania', code: 'LT'}, 
  {name: 'Luxembourg', code: 'LU'}, 
  {name: 'Macao', code: 'MO'}, 
  {name: 'Macedonia, The Former Yugoslav Republic of', code: 'MK'}, 
  {name: 'Madagascar', code: 'MG'}, 
  {name: 'Malawi', code: 'MW'}, 
  {name: 'Malaysia', code: 'MY'}, 
  {name: 'Maldives', code: 'MV'}, 
  {name: 'Mali', code: 'ML'}, 
  {name: 'Malta', code: 'MT'}, 
  {name: 'Marshall Islands', code: 'MH'}, 
  {name: 'Martinique', code: 'MQ'}, 
  {name: 'Mauritania', code: 'MR'}, 
  {name: 'Mauritius', code: 'MU'}, 
  {name: 'Mayotte', code: 'YT'}, 
  {name: 'Mexico', code: 'MX'}, 
  {name: 'Micronesia, Federated States of', code: 'FM'}, 
  {name: 'Moldova, Republic of', code: 'MD'}, 
  {name: 'Monaco', code: 'MC'}, 
  {name: 'Mongolia', code: 'MN'}, 
  {name: 'Montserrat', code: 'MS'}, 
  {name: 'Morocco', code: 'MA'}, 
  {name: 'Mozambique', code: 'MZ'}, 
  {name: 'Myanmar', code: 'MM'}, 
  {name: 'Namibia', code: 'NA'}, 
  {name: 'Nauru', code: 'NR'}, 
  {name: 'Nepal', code: 'NP'}, 
  {name: 'Netherlands', code: 'NL'}, 
  {name: 'Netherlands Antilles', code: 'AN'}, 
  {name: 'New Caledonia', code: 'NC'}, 
  {name: 'New Zealand', code: 'NZ'}, 
  {name: 'Nicaragua', code: 'NI'}, 
  {name: 'Niger', code: 'NE'}, 
  {name: 'Nigeria', code: 'NG'}, 
  {name: 'Niue', code: 'NU'}, 
  {name: 'Norfolk Island', code: 'NF'}, 
  {name: 'Northern Mariana Islands', code: 'MP'}, 
  {name: 'Norway', code: 'NO'}, 
  {name: 'Oman', code: 'OM'}, 
  {name: 'Pakistan', code: 'PK'}, 
  {name: 'Palau', code: 'PW'}, 
  {name: 'Palestinian Territory, Occupied', code: 'PS'}, 
  {name: 'Panama', code: 'PA'}, 
  {name: 'Papua New Guinea', code: 'PG'}, 
  {name: 'Paraguay', code: 'PY'}, 
  {name: 'Peru', code: 'PE'}, 
  {name: 'Philippines', code: 'PH'}, 
  {name: 'Pitcairn', code: 'PN'}, 
  {name: 'Poland', code: 'PL'}, 
  {name: 'Portugal', code: 'PT'}, 
  {name: 'Puerto Rico', code: 'PR'}, 
  {name: 'Qatar', code: 'QA'}, 
  {name: 'Reunion', code: 'RE'}, 
  {name: 'Romania', code: 'RO'}, 
  {name: 'Russian Federation', code: 'RU'}, 
  {name: 'RWANDA', code: 'RW'}, 
  {name: 'Saint Helena', code: 'SH'}, 
  {name: 'Saint Kitts and Nevis', code: 'KN'}, 
  {name: 'Saint Lucia', code: 'LC'}, 
  {name: 'Saint Pierre and Miquelon', code: 'PM'}, 
  {name: 'Saint Vincent and the Grenadines', code: 'VC'}, 
  {name: 'Samoa', code: 'WS'}, 
  {name: 'San Marino', code: 'SM'}, 
  {name: 'Sao Tome and Principe', code: 'ST'}, 
  {name: 'Saudi Arabia', code: 'SA'}, 
  {name: 'Senegal', code: 'SN'}, 
  {name: 'Serbia and Montenegro', code: 'CS'}, 
  {name: 'Seychelles', code: 'SC'}, 
  {name: 'Sierra Leone', code: 'SL'}, 
  {name: 'Singapore', code: 'SG'}, 
  {name: 'Slovakia', code: 'SK'}, 
  {name: 'Slovenia', code: 'SI'}, 
  {name: 'Solomon Islands', code: 'SB'}, 
  {name: 'Somalia', code: 'SO'}, 
  {name: 'South Africa', code: 'ZA'}, 
  {name: 'South Georgia and the South Sandwich Islands', code: 'GS'}, 
  {name: 'Spain', code: 'ES'}, 
  {name: 'Sri Lanka', code: 'LK'}, 
  {name: 'Sudan', code: 'SD'}, 
  {name: 'Suriname', code: 'SR'}, 
  {name: 'Svalbard and Jan Mayen', code: 'SJ'}, 
  {name: 'Swaziland', code: 'SZ'}, 
  {name: 'Sweden', code: 'SE'}, 
  {name: 'Switzerland', code: 'CH'}, 
  {name: 'Syrian Arab Republic', code: 'SY'}, 
  {name: 'Taiwan, Province of China', code: 'TW'}, 
  {name: 'Tajikistan', code: 'TJ'}, 
  {name: 'Tanzania, United Republic of', code: 'TZ'}, 
  {name: 'Thailand', code: 'TH'}, 
  {name: 'Timor-Leste', code: 'TL'}, 
  {name: 'Togo', code: 'TG'}, 
  {name: 'Tokelau', code: 'TK'}, 
  {name: 'Tonga', code: 'TO'}, 
  {name: 'Trinidad and Tobago', code: 'TT'}, 
  {name: 'Tunisia', code: 'TN'}, 
  {name: 'Turkey', code: 'TR'}, 
  {name: 'Turkmenistan', code: 'TM'}, 
  {name: 'Turks and Caicos Islands', code: 'TC'}, 
  {name: 'Tuvalu', code: 'TV'}, 
  {name: 'Uganda', code: 'UG'}, 
  {name: 'Ukraine', code: 'UA'}, 
  {name: 'United Arab Emirates', code: 'AE'}, 
  {name: 'United Kingdom', code: 'GB'}, 
  {name: 'United States', code: 'US'}, 
  {name: 'United States Minor Outlying Islands', code: 'UM'}, 
  {name: 'Uruguay', code: 'UY'}, 
  {name: 'Uzbekistan', code: 'UZ'}, 
  {name: 'Vanuatu', code: 'VU'}, 
  {name: 'Venezuela', code: 'VE'}, 
  {name: 'Viet Nam', code: 'VN'}, 
  {name: 'Virgin Islands, British', code: 'VG'}, 
  {name: 'Virgin Islands, U.S.', code: 'VI'}, 
  {name: 'Wallis and Futuna', code: 'WF'}, 
  {name: 'Western Sahara', code: 'EH'}, 
  {name: 'Yemen', code: 'YE'}, 
  {name: 'Zambia', code: 'ZM'}, 
  {name: 'Zimbabwe', code: 'ZW'} 
  ]; 
window.addEventListener("change", function(){
    $scope.generateStatistique();
});
window.addEventListener("load", function(){
    $scope.generateStatistique();
});

  });