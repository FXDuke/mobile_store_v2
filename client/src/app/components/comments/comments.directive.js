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
      controller: controllerFunction
    }
  }

  function controllerFunction ($scope) {
    debugger
    console.log('Comments init')
  }
})();