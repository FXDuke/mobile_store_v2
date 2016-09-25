(function () {
    'use strict';

    angular
        .module('client')
        .config(routerConfig);

    /** @ngInject */
    function routerConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/main/main.html',
                controller: 'MainController',
                controllerAs: 'vm'
            })
            .state('details', {
                url: '/details/:id',
                templateUrl: 'app/details/details.view.html',
                controller: 'DetailController',
                controllerAs: 'vm'
            })
            .state('cart', {
                url: '/cart',
                templateUrl: 'app/cart/cart.view.html',
                controller: 'CartController',
                controllerAs: 'vm'
            })
            .state('checkout', {
                url: '/checkout',
                templateUrl: 'app/checkout/checkout.view.html',
                controller: 'CheckoutController',
                controllerAs: 'vm'
            });

        $urlRouterProvider.otherwise('/');
    }

})();
