angular.module('alurapic').controller('BilheteController', function($scope,$http){
      
      $scope.bilhetes = [];

      var promise  = $http.get('http://localhost:8080/sistema2/lista');
      promise.then(function(retorno){
          console.log(retorno.data);
          $scope.bilhetes = retorno.data;
      }).catch(function(erro){
         console.log(erro);
      });
});