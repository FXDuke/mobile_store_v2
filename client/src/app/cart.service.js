(function() {
    'use strict';

    angular
        .module('client')
        .service('CartService', CartService);

    /** @ngInject */
    function CartService () {
        var _cartAllItems = [];

        return {
            setCartItem: function (item) {
                var inCart = false,
                    cartItem = item,
                    cartIndex = undefined;
                cartItem.quantity = 1;
                _cartAllItems.forEach(function(element, index) {
                    if (element._id == cartItem._id) {
                        inCart = true;
                        cartIndex = index;
                        cartItem.quantity = element.quantity + 1;
                    }
                })

                if (!inCart) {
                    _cartAllItems.push(cartItem);
                } else {
                    _cartAllItems[cartIndex].quantity += 1;
                }
            },
            delCartItem: function (item) {
                var cartIndex = undefined;
                _cartAllItems.forEach(function(element, index) {
                    if (element._id == item._id) {
                        cartIndex = index;
                    }
                })

                if (cartIndex != undefined) {
                    _cartAllItems.splice(cartIndex, 1);
                }

            },
            getAllCartItems: function () {
                return _cartAllItems;
            }
        }
    }

})();
