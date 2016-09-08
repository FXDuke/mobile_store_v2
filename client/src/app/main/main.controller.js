(function () {
    'use strict';

    angular
        .module('client')
        .controller('MainController', MainController);

    /** @ngInject */
    function MainController(searchQuery, navbarConfig, $http, $log, $interval) {
        var vm = this;
        vm.filter = '';

        $interval(function () {
            vm.filter = searchQuery.getSearchQuery();
        }, 500);

        $http({
            method: 'GET',
            url: 'http://localhost:4001/api/v1/phones'
        }).then(function (resp) {
            vm.items = resp.data;
        });

        $log.log('Main controller');
    }
})();
