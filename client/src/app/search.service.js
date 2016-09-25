(function() {
    'use strict';

    angular
        .module('client')
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
