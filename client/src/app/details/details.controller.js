(function() {
  'use strict';

  angular
    .module('client')
    .controller('DetailsController', DetailsController);

  /** @ngInject */
  function DetailsController($http) {
    console.log("Details ctrl init")
    var vm = this;

    vm.coments = {
      "text": "comment for comment asdasdasdasdasdasdasd",
      "author": "test authordfsdfsdfdsf"
    }

    $http({
      method: "GET",
      url: "http://localhost:4001/api/v1/comments/5706d89c40fe4998057b4fea"
    }).then(function (resp) {
      vm.comments = resp.data;
    })
  }
})();
