'use strict';

angular.module('testApp', ['ngRoute','testApp.loginctrl'])
        .config( function ($routeProvider) {
        $routeProvider
            .when('/login', {
                templateUrl: 'login/login.html',
                controller: 'loginctrl'
            })
            .otherwise({redirectTo: '/login'});
    });
