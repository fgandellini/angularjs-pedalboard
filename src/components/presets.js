angular.module('MyApp')

.directive('presets', function(Presets) {
  return {
    scope: {
      preset: '='
    },
    template: '<div>Presets:' +
      '<span ng-repeat="name in presets">' +
      '<button ng-click="choose(name)">{{name}}</button>' +
      '</span>' +
      '</div>',
    controller: function($scope, $element, $attrs) {
      $scope.presets = Presets.presets();

      $scope.choose = function(name) {
        Presets
          .choose(name)
          .then(function(p) {
            $scope.preset = p;
          });
      };
    }
  }
});
