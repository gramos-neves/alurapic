angular.module('alurapic').filter('formatarData', function () {
    return function (input) {
        if (!input) {
            return '';
        }
        return moment(input).format("L");
    }
})