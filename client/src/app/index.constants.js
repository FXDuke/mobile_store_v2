/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('client')
    .service('constant', function () {
    	return {
	    	baseUrl: "http://localhost:4001/api/v1/"
	    }
    })
})();