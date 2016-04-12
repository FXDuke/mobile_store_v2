(function() {
  'use strict';

  angular
    .module('client')
    .controller('DetailsController', DetailsController);

  /** @ngInject */
  function DetailsController($http, $stateParams, detailsModel) {
    console.log("Details ctrl init")
    
    var vm = this;

    vm.largeImg = null;
    vm.phone = {};
    vm.comments = [];
    vm.newComments = {
        "item_id":  $stateParams.id, 
        "text": null, 
        "author": null, 
        "item_rating": 0
      };

    // $http({
    //     method: "GET",
    //     url: "http://localhost:4001/api/v1/comments/"+$stateParams.id
    //   }).then(function (response) {
    //     vm.comments = response.data;
    //   })

    detailsModel.getCommentsItems($stateParams.id)
      .then(function (response) {
        vm.comments = response;
      }, function (reject) {
        console.log(reject);
      });

    vm.setCommentsItems = function () {
      detailsModel.setCommentsItems(vm.newComments)
        .then(function (response) {
          debugger;
          vm.comments.push(response);
        }, function (reject) {
          console.log(reject);
        });
    }
    

    
    detailsModel.fetchData($stateParams.id)
      .then(function (response) {
        vm.phone  = response;
        vm.largeImg = response.images[0];
      }, function (reject) {
        console.log(reject);
      });

      vm.changeImg = function (newImgUrl) {
        vm.largeImg = newImgUrl;
      }

  }
})();
