(function() {
  'use strict';

  angular
    .module('client')
    .service('catalogModel', Model);

  /** @ngInject */
  function Model($http, $q, constant) {
  	this.fetchData = function () {  	
  		return $http({
  			url: constant.baseUrl + "phones",
  			method: "GET"
  		}).then(function (response) {
  			//возвращается новый обьект промис с библиотеки q для того что-бы перерисовать html
  			return $q(function (resolve) {
            	resolve(response.data);
          	});
  		})
  	};
  	this.getOne = function (id) {
  		return $http({
  			url: constant.baseUrl+"phones/"+id,
  			method: "GET"
  		}).then(function (response) {
  			//возвращается новый обьект промис с библиотеки q для того что-бы перерисовать html
  			return $q(function (resolve) {
            	resolve(response.data);
          	});
  		})
  	} 
  }
})();