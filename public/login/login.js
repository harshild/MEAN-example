angular.module('testApp.loginctrl',[])
    .controller('loginctrl', function ($scope,$http) {
        $scope.firstname = "";
        $scope.lastname = "";

        var isUserValid = false;
        $scope.dataEntered = function () {
            $scope.fullname = ($scope.firstname +
                " " + $scope.lastname ).trim();

            validateUser($scope.fullname);
        }

        $scope.isFullNameAvailable = function () {
            return $scope.fullname
                && $scope.fullname != ""
                && isUserValid;
        }

        var validateUser = function (fullName) {
            $http({
                method: 'POST',
                url: '/validate',
                data: {name :fullName}
            }).
            success(function (res) {
                if(res == "yes")
                    isUserValid = true
                if(res == "no")
                    isUserValid = false

            }).
            error(function (res) {
                isUserValid = false

            });
        }



    });
