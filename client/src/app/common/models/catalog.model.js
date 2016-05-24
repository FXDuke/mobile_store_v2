(function() {
  'use strict';

  angular
    .module('client')
    .service('catalogModel', Model);

  /** @ngInject */
  function Model($http, $q) {
  	this.fetchData = function () {
  		return $http({
  			url: "http://localhost:4001/api/v1/phones",
  			method: "GET"
  		}).then(function (response) {
  			debugger;
  			//возвращается новый обьект промис с библиотеки q для того что-бы перерисовать html
  			return $q(function (resolve) {
            	resolve(response.data);
          	});
  		})
  	};
  }
})();