(function() {
    'use strict'

    var MainController = function MainController($http) {
        var self = this;
        self.name = '';
        self.date = '';
        self.assign = '';

        /*
        self.tasks = [];
        var getData = Service
            			.getData()
			            .then(function(response) {
			                console.log(response.data);
			                self.tasks = response.data;
			            });
		*/
        $http
            .get('./../data/file.json')
            .then(function(response) {
                console.log(response.data);
                self.tasks = response.data;
            });
        console.log(self.tasks);

        




        self.myform = function myform() {
            self.tasks.unshift({
                name: self.name,
                date: self.date,
                assigned: self.assign
            });
           self.name = self.date = self.assign = '';
        };
    };

    angular
        .module("myApp", [])
        .controller("MainController", MainController);
})();
