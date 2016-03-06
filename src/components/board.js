angular.module('MyApp')

.directive('board', function() {
  return {
    scope: true,
    transclude: true,
    template: '<div class="board container" ng-transclude></div>',
    controller: function($scope, $timeout) {

      // init stage, audio context and board      
      var stage = new pb.Stage();
      $scope.context = stage.getContext();
      $scope.board = new pb.Board($scope.context);
      stage.setBoard($scope.board);

      // connect LineIn to output
      $timeout(function() {
        stage.stop();
        stage.input = new pb.io.StreamInput(stage.getContext());
        stage.input.addEventListener('loaded', function() {
          stage.route();
        });
      }, 100);

    }
  }
});
