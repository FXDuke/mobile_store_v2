(function() {
  'use strict';

  angular
    .module('client')
    .directive('navbar', Directive);

  /** @ngInject */
  function Directive($http) {
    return {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.view.html',
      controller: NavbarController
    }
  }

  function NavbarController () {
    console.log('Navbar init')
  }
})();
