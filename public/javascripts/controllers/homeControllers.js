'use strict';
/**
 * Created by Chertpong on 22/12/2558.
 */

angular.module('homeControllers',[])
    .controller('homeMainController',function($http,$scope){
        $scope.name = '';
        $scope.phone = '';
        $scope.email = '';
        $scope.content = '';

        $(document).ready(function(){
            $(".button-collapse").sideNav();
            $('.parallax').parallax();
            $('.scrollspy').scrollSpy();
        });
        $scope.contact = function(){
            var data = {
                name:$scope.name,
                phone:$scope.phone,
                email:$scope.email,
                content:$scope.content
            };
            $http.post('/home/contact',data).then(
                function successCallback(response){
                    Materialize.toast(response.data,3000);
                },
                function errorCallback(response) {
                    var errors = [];
                    errors = response.data;
                    errors.forEach(function(e,i,a){
                        Materialize.toast(e.msg,5000);
                    });
                }
            );
        };
    });
