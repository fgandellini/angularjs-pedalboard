angular.module('MyApp')

.directive('pedal', function() {
  return {
    scope: true,
    require: '^board',
    transclude: true,
    template: '<div class="pedal col-xs-12 text-center" ng-transclude></div>',
    controller: function($scope, $element, $attrs) {

      // get parent components (2 levels up)
      var context = $scope.$parent.$parent.context;
      var board = $scope.$parent.$parent.board;

      // create the new pedal
      var type = $attrs.type || 'Overdrive';
      $scope.pedal = new pb.stomp[type](context);
      $scope.pedal.pots.map(function(p) {
        p.setValue(0);
      })

      // append pedal to the board
      var nextPedalIndex = board.getPedals().length;
      board.addPedalAt($scope.pedal, nextPedalIndex, true);

    }
  }
});
