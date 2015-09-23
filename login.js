var loginapp = angular.module("loginApp", [])
    .controller("loginController", function ($scope) {
        $scope.loginDetails = {
            userName: '',
            userPassword: ''
        };

        $scope.validateLogin = function () {
            if ($scope.loginDetails.userName == "" && $scope.loginDetails.userPassword == "") {
                //alert("Username and password required!");
                $("#message").html('<p class="error">Username and password required!</p>');
                return;
            }
            else if ($scope.loginDetails.userName == "") {
                //alert("Username is required!");
                $("#message").html('<p class="error">Username is required!</p>');
                return;
            }
            else if ($scope.loginDetails.userPassword == "") {
                //alert("Password is required!");
                $("#message").html('<p class="error">Password is required!</p>');
                return;
            } else {
                if ($scope.loginDetails.userName == "nosql" && $scope.loginDetails.userPassword == "html5") {
                    //alert("Welcome to the hell!");
                    $("#lg-form").slideUp('slow', function () {
                        $("#message").html('<p class="success">Welcome to HELL!</p>');
                    });
                } else {
                    //alert("Invalid user!");
                    $("#message").html('<p class="error">Invalid username and/or password.</p>');
                }
            }
        };
    });