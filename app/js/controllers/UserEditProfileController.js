'use strict';

app.controller('UserEditProfileController', function ($scope, $rootScope, $location, userService, townsService, authService, notifyService) {
        $rootScope.pageTitle = "Edit Profile";

        userService.getCurrentUserProfile(function success(data) {
            $scope.userData = data;
        });

        $scope.towns = townsService.getTowns();

        $scope.editUserProfile = function(adData) {
            userService.editUser(
                adData,
                function success(data) {
                    notifyService.showInfo('Profile edited successfully.');
                    $location.path("/user/ads");
                },
                function error(err) {
                    notifyService.showError('Profile edition failed.');
                }
            )
        };

        $scope.editUserPassword = function(adData) {
            userService.editUserPass(
                adData,
                function success(data) {
                    notifyService.showInfo('Password edited successfully.');
                    $location.path("/user/ads");
                },
                function error(err) {
                    notifyService.showError('Password edition failed.');
                }
            )
        };

        $scope.cancel = function () {
            $location.path("/");
        }
    }
);

