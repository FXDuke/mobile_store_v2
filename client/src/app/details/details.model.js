(function() {
  'use strict';

  angular
    .module('client')
    .service('detailsModel', DetailsModel);

  /** @ngInject */
  function DetailsModel($http, $stateParams) {
  	console.log ('Details ctrl init')
  	

  	this.getCommentsItems = function (id) {
      
      return $http({
        method: "GET",
        url: "http://localhost:4001/api/v1/comments/" + id
      }).then(function (response) {
        return response.data;
      });
  	}

    this.setCommentsItems = function (data) {
      
      return $http({
        method: "POST",
        url: "http://localhost:4001/api/v1/comments/",
        data:data
      }).then(function (response) {
        return response.data;
      });
    }

    this.fetchData = function (id) {
      var url = 'http://localhost:4001/api/v1/phones/' + id;

      return $http({
        method: "GET",
        url: url
      }).then(function (response) {
        return response.data;
      })
    };
  }
})()