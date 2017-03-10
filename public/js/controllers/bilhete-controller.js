angular.module('alurapic')
      .controller('BilheteController', lista);


function lista($scope, $http) {
      $scope.bilhetes = [];
      $scope.filtro = '';
      var promise = $http.get('http://localhost:8080/sistema2/lista');
      promise.then(function (retorno) {
            console.log(retorno.data);
            $scope.bilhetes = retorno.data;
      }).catch(function (erro) {
            console.log(erro);
      });

      function teste() {
            console.log("teste");
      }
}