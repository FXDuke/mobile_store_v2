(function () {
    'use strict';

    angular
        .module('client')
        .directive('header', header);

    /** @ngInject */
    function header() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/components/header/header.view.html',
            scope: {},
            controller: HeaderController,
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;

        /** @ngInject */
        function HeaderController() {
            // var vm = this;
        }
    }

})();
