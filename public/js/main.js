angular.module('alurapic', ['angularMoment', 'ngTable', 'ngRoute'])
  .config(function ($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $routeProvider.when('/principal', {
      templateUrl: 'partials/principal.html',
      controller: 'BilheteController'
    });

    $routeProvider.when('/teste', {
      templateUrl: 'partials/form.html',
      controller: 'TesteController'
    });




  });