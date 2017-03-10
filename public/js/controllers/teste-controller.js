angular.module('alurapic').controller('TesteController',function($scope){
     
     $scope.teste = {};

     $scope.submiter = function(){
         console.log($scope.teste);
     }
})