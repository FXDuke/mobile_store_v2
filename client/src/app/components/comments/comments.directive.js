(function() {
    'use strict';

    angular
        .module('client')
        .directive('comments', comments)
        .directive('contenteditable', ['$sce', function($sce) {
            return {
                restrict: 'A', // only activate on element attribute
                require: '?ngModel', // get a hold of NgModelController
                link: function(scope, element, attrs, ngModel) {
                    if (!ngModel) return; // do nothing if no ng-model

                    // Specify how UI should be updated
                    ngModel.$render = function() {
                        element.html($sce.getTrustedHtml(ngModel.$viewValue || ''));
                    };

                    // Listen for change events to enable binding
                    element.on('blur keyup change', function() {
                        scope.$evalAsync(read);
                    });
                    read(); // initialize

                    // Write data to the model
                    function read() {
                        var html = element.html();
                        ngModel.$setViewValue(html);
                    }
                }
            };
        }]);

    /** @ngInject */
    function comments() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/components/comments/comments.html',
            scope: {},
            controller: CommentsController,
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;

        /** @ngInject */
        function CommentsController($stateParams, $document, $timeout, $http) {
            var vm = this,
                inputName = $document.find('.comments__input--name'),
                inputText = $document.find('.comments__input--text'),
                btnAdd = $document.find('.comments__btn--add'),
                btnSave = $document.find('.comments__btn--save');

            vm.editIndex = null;
            vm.comments = [];
            // vm.comments = [{
            //         item_id: '1',
            //         text: 'First comment',
            //         author: 'Sergey',
            //         item_rating: 1
            //     },{
            //         item_id: '2',
            //         text: 'Second comment',
            //         author: 'Andrey',
            //         item_rating: 4
            //     }];

            vm.newCommentModel = {
                author: '',
                text: '',
                item_id: null,
                item_rating: 0,
                created_on: new Date().getTime()
            };

            // get comment for item
            $http({
                method: 'GET',
                url: 'http://localhost:4001/api/v1/comments/' + $stateParams.id
            }).then(function (resp) {
                vm.comments = resp.data;
            });

            this.addComment = function() {
                var newComment = angular.copy(vm.newCommentModel);
                inputText.removeClass('comments__input--error');
                if (newComment.text != '') {
                    newComment.author = newComment.author || 'Guest';
                    newComment.created_on = new Date().getTime();
                    newComment.item_id = $stateParams.id;
                    // newComment.item_id = vm.comments.length == 0 ? 0 : (vm.comments[vm.comments.length - 1].item_id + 1);

                    // add comment for item to server
                    var req = {
                        method: 'POST',
                        url: 'http://localhost:4001/api/v1/comments/',
                        data: newComment
                    }

                    $http(req).then(function (resp) {
                        vm.comments.push(resp.data);
                        // vm.comments = resp.data;
                    });

                    vm.newCommentModel.author = '';
                    vm.newCommentModel.text = '';

                    inputName.focus();
                } else {
                    // show error border
                    inputText.addClass('comments__input--error');
                    inputText.focus();
                }
            };

            this.removeComment = function(comment, index, $log) {
                // add comment for item to server
                var req = {
                    method: 'DELETE',
                    url: 'http://localhost:4001/api/v1/comments/' + comment.item_id,
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                }
                debugger;

                $http(req).then(function (resp) {
                    // vm.comments.push(resp.data);
                    debugger;
                    $log.log(resp.data);
                });

                // var reversIndex = vm.comments.length - 1 - index;
                // vm.comments.splice(reversIndex, 1);
            };

            this.editComment = function(comment, index) {
                btnAdd.addClass('comments__btn--hide');
                btnSave.removeClass('comments__btn--hide');
                vm.newCommentModel.author = comment.author;
                vm.newCommentModel.text = comment.text;
                vm.newCommentModel.item_id = comment.item_id;
                vm.editIndex = vm.comments.length - 1 - index;
                $timeout(function() {
                    inputText.focus();
                    // setCaret(inputText);
                }, 500);
            };

            this.saveComment = function() {
                var newComment = angular.copy(vm.newCommentModel);

                inputText.removeClass('comments__input--error');

                if (newComment.text != '') {
                    newComment.author = newComment.author || 'Guest';
                    newComment.date = dateFormat(new Date());
                    vm.comments.splice(vm.editIndex, 1, newComment);

                    vm.editIndex = null;
                    vm.newCommentModel.author = '';
                    vm.newCommentModel.text = '';
                    vm.newCommentModel.item_id = null;

                    inputName.focus();
                    btnAdd.removeClass('comments__btn--hide');
                    btnSave.addClass('comments__btn--hide');
                } else {
                    // show error border
                    inputText.addClass('comments__input--error');
                    inputText.focus();
                }
            };
        }
    }

    // set caret(cursor) position in contenteditable element (div)
    function setCaret(elem) {
        var range = document.createRange();
        var sel = window.getSelection();
        range.setStart(elem.lastChild, elem.lastChild.length);
        range.collapse(true);
        sel.removeAllRanges();
        sel.addRange(range);
    }

    // formated date to string
    function dateFormat(date) {
        // get date, month, hours, minutes with leading zero
        var day = date.getDate() < 10 ? ('0' + date.getDate()) : date.getDate(),
            month = (date.getMonth() + 1) < 10 ? ('0' + (date.getMonth() + 1)) : (date.getMonth() + 1),
            hours = date.getHours() < 10 ? ('0' + date.getHours()) : date.getHours(),
            minutes = date.getMinutes() < 10 ? ('0' + date.getMinutes()) : date.getMinutes(),
            // formated date
            stringDate = day + '.' + month + '.' + date.getFullYear() + ' in ' + hours + ':' + minutes;

        return stringDate;
    }
})();
