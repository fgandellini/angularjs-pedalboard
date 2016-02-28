angular.module('MyApp')

.factory('Presets', function($resource) {

  var Presets = $resource('/presets/:name', {
    name: '@name'
  });

  function presets() {
    return Presets.query();
  }

  function choose(name) {
    return Presets.get({
      name: name
    }).$promise;
  }

  return {
    presets: presets,
    choose: choose
  };

});
