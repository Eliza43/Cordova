// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

  .run(function ($ionicPlatform) {

		Pro.init('490ed4db', {
		appVersion: '0.0.1'
		});
	
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  })

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
      })

      .state('app.mediapicker', {
        url: '/mediapicker',
        views: {
          'menuContent': {
            templateUrl: 'templates/mediapicker.html',
            controller: 'mediaCtrl'
          }
        }
      })

      .state('app.vibrate', {
        url: '/vibrate',
        views: {
          'menuContent': {
            templateUrl: 'templates/vibrate.html',
            controller: 'vibrateCtrl'
          }
        }
      })


      .state('app.geoloc', {
        url: '/geoloc',
        views: {
          'menuContent': {
            templateUrl: 'templates/geoloc.html',
            controller: 'geolocCtrl'
          }
        }
      })

      .state('app.mail', {
        url: '/mail',
        views: {
          'menuContent': {
            templateUrl: 'templates/mail.html',
            controller: 'mailCtrl'
          }
        }
      })

      .state('app.contact', {
        url: '/contact',
        views: {
          'menuContent': {
            templateUrl: 'templates/contact.html',
            controller: 'contactCtrl'
          }
        }
      });


    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/mediapicker');
  });
