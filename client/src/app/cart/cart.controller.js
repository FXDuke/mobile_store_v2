(function () {
    'use strict';

    angular.module('client')
        .controller('CartController', CartController);

    function CartController (CartService, $stateParams, $log) {
        var vm = this;
        vm.totalAll = 0;
        vm.cartAllItems = CartService.getAllCartItems() || [];

        vm.calcTotal = function () {
            vm.totalAll = 0;
            vm.cartAllItems.forEach(function(element) {
                vm.totalAll = vm.totalAll + (element.quantity * element.price);
            })
        }

        vm.delCartItem = function (id) {
            CartService.delCartItem(id);
            vm.calcTotal();
        }

        vm.calcTotal();

        $log.log('Cart controller');
    }
})();
