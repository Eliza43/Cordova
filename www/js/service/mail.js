angular.module('starter')
    .service('mail', function () {

        scope = this;

        scope.scan = function () {
         
            cordova.plugins.email.open(function () {
                navigator.vibrate(3000);
            });
            

        }

    });
