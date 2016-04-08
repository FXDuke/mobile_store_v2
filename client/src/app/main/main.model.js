(function() {
  'use strict';

  angular
    .module('client')
    .service('mainModel', MainModel);

  /** @ngInject */
  function MainModel($http) {
  	console.log ('Service enabled!')
  	

  	this.getAllItems = function () {
  		return $http({
  			method: 'GET',
  			url: 'http://localhost:4001/api/v1/phones'
  		});
  	}

  }
})()