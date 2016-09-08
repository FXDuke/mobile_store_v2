(function() {
    'use strict';

    angular
        .module('client')
        .directive('navbar', navbar);


    /** @ngInject */
    function navbar() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/components/navbar/navbar.html',
            scope: {},
            controller: NavbarController,
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;

        /** @ngInject */
        function NavbarController(searchQuery, navbarConfig) {
            var vm = this;
            vm.search = '';

            // set search query when input changed
            vm.searchPhone = function () {
                searchQuery.setSearchQuery(vm.search);
            };

            vm.menuItems = navbarConfig();
        }
    }
})();

//TODO add keypress ENTER trigger and made search
