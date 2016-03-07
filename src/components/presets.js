angular.module('MyApp')

.directive('presets', function(Presets) {
  return {
    scope: {
      preset: '='
    },
    templateUrl: '/components/presets.html',
    controller: function($scope, $element, $attrs) {
      $scope.presets = Presets.presets();
      $scope.current = ''

      $scope.choose = function(name) {
        Presets
          .choose(name)
          .then(function(p) {
            $scope.current = name
            $scope.preset = p;
          });
      };
    }
  }
});
