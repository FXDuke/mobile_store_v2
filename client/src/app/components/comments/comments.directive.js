(function() {
  'use strict';

  angular
    .module('client')
    .directive('comments', Directive);

  /** @ngInject */
  function Directive() {
    return {
      restrict: 'E',
      templateUrl: 'app/components/comments/comments.view.html',
      scope: {
        comment: "="
      },
      controller: controller
    }
  }

  function controller ($scope) {
    debugger;
    console.log('Navbar init')
  }
})();
