angular.module('starter.controllers', [])

  .controller('AppCtrl', function ($scope, $ionicModal, $timeout) {

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});


  })

  .controller('mediaCtrl', function ($scope) {
    $scope.scan = function () {

      window.imagePicker.getPictures(
        function (results) {
          for (var i = 0; i < results.length; i++) {
            console.log('Image URI: ' + results[i]);
          }
        }, function (error) {
          console.log('Error: ' + error);
        }, {
          maximumImagesCount: 10,
          width: 800
        }
      );



    };
  })

  .controller('vibrateCtrl', function ($scope, vibrate) {
    $scope.vibre = function () {
      navigator.vibrate(3000);
    };
  })

  .controller('geolocCtrl', function ($scope) {
    $scope.geoloc = function () {



      alert("test");
       navigator.geolocation.getCurrentPosition(function (position) {
        alert('Latitude: ' + position.coords.latitude + '\n' +
          'Longitude: ' + position.coords.longitude + '\n');
      }, function (error) {
        alert('code: ' + error.code + '\n' +
          'message: ' + error.message + '\n');
      });

    };
  })


  .controller('mailCtrl', function ($scope) {
    $scope.mail = function () {
      cordova.plugins.email.open();
    };
  })


  .controller('contactCtrl', function ($scope) {
    $scope.contact = function () {
      navigator.contacts.pickContact(function (contact) {
        console.log('The following contact has been selected:' + JSON.stringify(contact));
      }, function (err) {
        console.log('Error: ' + err);
      });
    };
  })