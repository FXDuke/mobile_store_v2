(function () {
    'use strict';

    angular.module('client')
        .controller('CheckoutController', CheckoutController);

    function CheckoutController (CartService, $stateParams, $log) {
        // var vm = this;

        $log.log('Checkout controller');
    }
})();
