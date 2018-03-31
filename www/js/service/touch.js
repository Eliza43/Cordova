angular.module('starter')
    .service('touch', function (mail, contact) {

        scope = this;

        scope.scan = function () {
            window.plugins.touchid.verifyFingerprint(
                'Vérification du doigt', // this will be shown in the native scanner popup
                function (msg) { mail.scan() }, // success handler: fingerprint accepted
                function (msg) { alert('not ok: ' + JSON.verifyFingerprint(msg)) } // error handler with errorcode and localised reason
            );
            
        }

        scope.contact = function () {
            window.plugins.touchid.verifyFingerprint(
                'Vérification du doigt', // this will be shown in the native scanner popup
                function (msg) { contact.pickContact() }, // success handler: fingerprint accepted
                function (msg) { alert('not ok: ' + JSON.verifyFingerprint(msg)) } // error handler with errorcode and localised reason
            );

        }

    });


