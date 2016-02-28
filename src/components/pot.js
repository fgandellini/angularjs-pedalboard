angular.module('MyApp')

.directive('pot', function() {
  return {
    scope: {
      preset: '='
    },
    require: '^pedal',
    template: '<div>' +
      '<label>{{label}}</label>' +
      '<input type="range" min="0" max="1" step="0.1" ng-model="value"/>' +
      '<span>{{value * 100}}%</span>' +
      '</div>',
    controller: function($scope, $element, $attrs) {
      $scope.label = $attrs.label;
      $scope.value = 0;

      // get pedal reference
      var pedal = $scope.$parent.$parent.pedal;

      // set pot value on pedal
      var type = $attrs.type || 'Volume';

      $scope.$watch('value', function(value) {
        pedal['set' + type](parseFloat(value || 0));
      });

      $scope.$watch('preset', function(value) {
        $scope.value = value || 0;
      });
    }
  }
});
