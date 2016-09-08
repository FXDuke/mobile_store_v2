(function() {
    'use strict';

    angular
        .module('client', ['ngAnimate', 'ui.router'])
        .service('searchQuery', function () {
            var _search = '';
            return {
                setSearchQuery: function (search) {
                    _search = search;
                },
                getSearchQuery: function () {
                    return _search;
                }
            }
        });

})();
