(function() {
  'use strict';

  angular
    .module('client')
    .controller('CatalogController', MainController);

  /** @ngInject */
  function MainController(catalogModel, constant) {
  	var vm = this;

  	vm.items = [];
  	
  	catalogModel.fetchData().then(function (response) {
  		response = response.map(function (item) {
  			item.imgUrl = constant.baseUrl + item.imgUrl;
  			return item;
  		});

  		vm.items = response;
  	});

  }
})();
