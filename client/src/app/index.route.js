(function() {
  'use strict';

  angular
    .module('client')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('details', {
        url: '/details/:id',
        templateUrl: 'app/details/details.view.html',
        controller: 'DetailsController',
        controllerAs: 'details'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
