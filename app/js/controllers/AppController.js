'use strict';

app.controller('AppController',
    function ($scope, $location, authService, notifyService) {
        $scope.authService = authService;

        $scope.logout = function() {
            authService.logout();
            notifyService.showInfo("You have logged out.");
            $location.path("/");
        };
    }
);
