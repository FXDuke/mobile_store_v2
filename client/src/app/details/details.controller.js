(function () {
    'use strict';

    angular
        .module('client')
        .controller('DetailController', DetailsController);

    /** @ngInject */
    function DetailsController ($stateParams, $http, $log) {
        var vm = this;

        vm.setImage = function setImage(imageUrl) {
            vm.mainImageUrl = imageUrl;
        };

        function getPhoneDetails() {
            $http({
                method: 'GET',
                url: 'http://localhost:4001/api/v1/phones/' + $stateParams.id
            }).then(function (resp) {
                vm.phone = resp.data;
                vm.setImage(vm.phone.images[0]);
            });
        }

        if ($stateParams.id == '') {
            $http({
                method: 'GET',
                url: 'http://localhost:4001/api/v1/phones'
            }).then(function (resp) {
                $stateParams.id = resp.data[0]._id;
                getPhoneDetails();
            });
        } else {
            getPhoneDetails();
        }

        $log.log('Details controller');
    }
})();
