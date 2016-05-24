(function() {
  'use strict';

  angular
    .module('client')
    .directive('navBar', function() {
      return {
        restrict: 'E',
        templateUrl: 'app/common/directives/navbar/navbar.view.html',
        controller : Controller,
        link: function (scope, el, attr) {
          var menu = el.find('ul');                 
          menu.on('click', function (e) {
            var menuItems = $(this).find('li');           
            
            if(e.target.classList.contains("menu-item")) {              
              $.each(menuItems, function(i, el) {
                if($(el).find('a').hasClass('active')){     
                  $(el).find('a').removeClass('active');
                };
              });               
              $(e.target).addClass('active');
            }
          })
        },
        controllerAs : 'vm',
        bindToController: true
      }
    }); 

    function Controller () {
      var vm = this;

      vm.menuItems = [
        "About",
        "Catalog",
        "Basket"
      ]
    }  
})();

