(function() {
    'use strict';

    angular
        .module('client')
        .constant('navbarConfig', function () {
            return [
                {
                    state: 'home',
                    title: 'Home'
                }, {
                    state: 'details',
                    title: 'Details'
                }, {
                    state: 'cart',
                    title: 'Cart'
                }
            ];
        });

})();
