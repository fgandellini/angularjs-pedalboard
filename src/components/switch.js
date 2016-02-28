angular.module('MyApp')

.directive('switch', function() {
  return {
    scope: true,
    require: '^pedal',
    template: '<div>' +
      '<button ng-click="toggle()">{{label}}</button>' +
      '<span> {{getStatus()}}</span>' +
      '</div>',
    controller: function($scope, $element, $attrs) {
      $scope.label = $attrs.label;
      $scope.isEnabled = true;

      // get pedal reference
      var pedal = $scope.$parent.$parent.pedal;

      $scope.toggle = function() {
        $scope.isEnabled = !$scope.isEnabled;
        pedal.bypassSwitch.toggle();
      }

      $scope.getStatus = function() {
        return $scope.isEnabled ? 'on' : 'off';
      }
    }
  }
});
