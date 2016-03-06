angular.module('MyApp')

.directive('switch', function() {
  return {
    scope: true,
    require: '^pedal',
    templateUrl: 'components/switch.html',
    controller: function($scope, $element, $attrs) {
      $scope.label = $attrs.label;

      // get pedal reference
      var pedal = $scope.$parent.$parent.pedal;

      $scope.toggle = function() {
        $scope.isEnabled = !$scope.isEnabled;
        pedal.bypassSwitch.toggle();
      }
    }
  }
});
