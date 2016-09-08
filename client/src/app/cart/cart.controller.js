(function () {
    angular.module('client')
        .controller('CartController', CartController);

    function CartController ($stateParams, $log) {
        var vm = this;

        vm.menuItems = [
            {
                state: 'home',
                title: 'to home'
            },
            {
                state: 'details.test',
                title: 'to test1'
            },
            {
                state: 'details.test2',
                title: 'to test2'
            }
        ];

        $log.log('Cart controller');
    }
})();
