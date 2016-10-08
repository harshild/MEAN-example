angular.module('testApp.loginctrl',[])
        .controller('loginctrl', function ($scope) {
            $scope.firstname = "";
            $scope.lastname = "";

            $scope.dataEntered = function () {
                $scope.fullname = $scope.firstname + " " + $scope.lastname;
            }

            $scope.isFullNameAvailable = function () {
                return $scope.fullname && $scope.fullname != "";
            }
        });
