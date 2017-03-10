angular.module('alurapic').controller('BilheteController', function($scope,$http){
      
      $scope.bilhetes = [];

      $http.get('http://localhost:8080/sistema2/lista')
      .success(function(retorno){
          console.log(retorno);
          $scope.bilhetes = retorno;
      })
      .error(function(erro){
          console.log(erro);
      })

/*
      var promise  = $http.get('http://localhost:8080/sistema2/lista');
      promise.then(function(retorno){
          console.log(retorno.data);
          $scope.bilhetes = retorno.data;
      }).catch(function(erro){
         console.log(erro);
      });
*/

     

});