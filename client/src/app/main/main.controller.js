(function() {
  'use strict';

  angular
    .module('client')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($http, mainModel) {
  	var vm = this;

    vm.items = [];
    
  	console.log ('Service enabled!')
    console.log (mainModel)

    mainModel.getAllItems()
      .then(function (response) {
         vm.items  = response.data;
      }, function (reject) {
        console.log(reject);
      });

  }
})();
