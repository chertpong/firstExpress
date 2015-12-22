'use strict';
/**
 * Created by Chertpong on 22/12/2558.
 */
angular.module('myApp',[
    'ngRoute',
    'homeControllers'
])
.config(['$routeProvider',function($routeProvider){
    $routeProvider
        .when('/',{
            templateUrl:"javascripts/template/home.html",
            controller:"homeMainController"
        })
        .otherwise({redirectTo: '/'});
}]);