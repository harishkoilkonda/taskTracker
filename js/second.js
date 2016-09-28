(function() {
    'use strict';

    var secondController = function secondController($scope, $http) {
        var self = this;
        self.names = ''
        self.dates = ''
        self.assign = ''
        self.emp = {};

        var API = "./file.json"; //we have to keep an http:// file here 

        //  var myform=function (){
        //    if(!$scope.names || !$scope.dates || !!$scope.tasks =='') return; 

        //  }

        $http
            .get(API)
            .then(function(response) {
                self.emp = response.data;
            }, function(reason) {
                // error
            });
    };


    angular
        .module("myApp")
        .controller("secondController", secondController);

})();
