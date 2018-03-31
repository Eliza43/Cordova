angular.module('starter')
    .service('contact', function () {

        scope = this;

        scope.pickContact = function () {
         
            navigator.contacts.pickContact(function (contact) {
                console.log('The following contact has been selected:' + JSON.stringify(contact));
            }, function (err) {
                console.log('Error: ' + err);
            });
        }
            
    });
