(function (angular) {

  // Create all modules and define dependencies to make sure they exist
  // and are loaded in the correct order to satisfy dependency injection
  // before all nested files are concatenated by Gulp

  // Config
  angular.module('incuversApp.config', [])
      .value('incuversApp.config', {
          debug: false
      });

  // Modules
  angular.module('incuversApp.directives', []);
  angular.module('incuversApp',
      [
          'incuversApp.config',
          'incuversApp.directives'
      ]);

//})();


})(angular);

// This example was copied from the AngularJs website

// Register `phoneList` component, along with its associated controller and template
angular.
  module('incuversApp.directives', []).
  component('phoneList', {  // This name is what AngularJS uses to match to the `<phone-list>` element.
    template:
      '<ul>' +
      '<li ng-repeat="phone in $ctrl.phones">' +
      '<span>{{phone.name}}</span>' +
      '<p>{{phone.snippet}}</p>' +
      '</li>' +
      '</ul>',
    controller: function PhoneListController() {
      this.phones = [
        {
          name: 'Nexus S',
          snippet: 'Fast just got faster with Nexus S.'
        }, {
          name: 'Motorola XOOM™ with Wi-Fi',
          snippet: 'The Next, Next Generation tablet.'
        }, {
          name: 'MOTOROLA XOOM™',
          snippet: 'The Next, Next Generation tablet.'
        }
      ];
    }
  });